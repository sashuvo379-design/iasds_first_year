/* ==========================================================================
   QMHBot Serverless API Handler (/api/chat)
   Stateless, login-free academic tutor grounded in the active IASDS lesson.
   Protected with narrow per-student quotas (sized for ~55 classmates),
   smart Lite/Flagship model routing, origin checks, and payload caps.
   ========================================================================== */

const TEXT_MODELS = [
  process.env.QMHBOT_TEXT_MODEL,
  'gemini-3.1-flash-lite',
  'gemini-flash-lite-latest',
  'gemini-3-flash-preview',
  'gemini-3.8-flash',
].filter(Boolean);

const MULTIMODAL_MODELS = [
  process.env.QMHBOT_MODEL,
  'gemini-3-flash-preview',
  'gemini-3.8-flash',
  'gemini-3.1-flash-lite',
  'gemini-flash-latest',
].filter(Boolean);

const LIMITS = {
  perStudent10Min: 6,
  perStudentDay: 20,
  perStudentImg30Min: 2,
  perStudentImgDay: 4,
  perIp10Min: 40,
  perIpDay: 250,
  perIpImg30Min: 12,
  perIpImgDay: 60,
  sitePerMin: 14,
  sitePerDay: 650,
  siteImgPerMin: 3,
  siteImgPerDay: 90,
};

const MAX_REQUEST_BYTES = 2.5 * 1024 * 1024;
const ALLOWED_IMAGE_MIME = new Set([
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
  'image/gif',
]);
const ALLOWED_AUDIO_MIME = new Set([
  'audio/webm',
  'audio/mp4',
  'audio/mpeg',
  'audio/mp3',
  'audio/wav',
  'audio/ogg',
  'audio/aac',
]);

// Ephemeral warm-instance rate-limit store (effective on Fluid Compute concurrent instances)
const studentBuckets = new Map();
const ipBuckets = new Map();
const studentImgBuckets = new Map();
const ipImgBuckets = new Map();
let siteMinuteBucket = { windowStart: 0, count: 0 };
let siteDayBucket = { day: '', count: 0 };
let siteImgMinBucket = { windowStart: 0, count: 0 };
let siteImgDayBucket = { day: '', count: 0 };

function getDayKey(now = Date.now()) {
  return new Date(now).toISOString().slice(0, 10);
}

function pruneMapIfLarge(map) {
  if (map.size > 2000) {
    const cutoff = Date.now() - 25 * 3600 * 1000;
    for (const [k, v] of map.entries()) {
      if (v.winStart < cutoff && v.day !== getDayKey()) map.delete(k);
    }
  }
}

function checkDualBucket(map, key, maxWin, maxDay, windowMs, now) {
  const day = getDayKey(now);
  let entry = map.get(key);
  if (!entry) {
    entry = { winStart: now, winCount: 0, day, dayCount: 0 };
  }
  if (now - entry.winStart >= windowMs) {
    entry.winStart = now;
    entry.winCount = 0;
  }
  if (entry.day !== day) {
    entry.day = day;
    entry.dayCount = 0;
  }
  if (entry.dayCount >= maxDay) {
    const nextMidnight = Date.UTC(
      new Date(now).getUTCFullYear(),
      new Date(now).getUTCMonth(),
      new Date(now).getUTCDate() + 1
    );
    return { allowed: false, scope: 'day', retryAfterSec: Math.max(60, Math.ceil((nextMidnight - now) / 1000)) };
  }
  if (entry.winCount >= maxWin) {
    const retryAfterSec = Math.max(10, Math.ceil((entry.winStart + windowMs - now) / 1000));
    return { allowed: false, scope: 'window', retryAfterSec };
  }
  return { allowed: true, entry };
}

function incrementDualBucket(map, key, windowMs, now) {
  const day = getDayKey(now);
  let entry = map.get(key);
  if (!entry) {
    entry = { winStart: now, winCount: 0, day, dayCount: 0 };
  }
  if (now - entry.winStart >= windowMs) {
    entry.winStart = now;
    entry.winCount = 0;
  }
  if (entry.day !== day) {
    entry.day = day;
    entry.dayCount = 0;
  }
  entry.winCount += 1;
  entry.dayCount += 1;
  map.set(key, entry);
  pruneMapIfLarge(map);
  return entry;
}

function enforceRateLimits(request, hasImage = false) {
  const now = Date.now();
  const day = getDayKey(now);
  const TEN_MIN = 10 * 60 * 1000;
  const THIRTY_MIN = 30 * 60 * 1000;

  // Sync global instance counters
  if (now - siteMinuteBucket.windowStart >= 60 * 1000) {
    siteMinuteBucket = { windowStart: now, count: 0 };
  }
  if (siteDayBucket.day !== day) {
    siteDayBucket = { day, count: 0 };
  }
  if (now - siteImgMinBucket.windowStart >= 60 * 1000) {
    siteImgMinBucket = { windowStart: now, count: 0 };
  }
  if (siteImgDayBucket.day !== day) {
    siteImgDayBucket = { day, count: 0 };
  }

  if (siteDayBucket.count >= LIMITS.sitePerDay) {
    return {
      ok: false,
      retryAfterSec: 3600,
      message:
        'QMHBot reached today’s shared class limit to keep the free service healthy. আজকের শেয়ার্ড লিমিট শেষ হয়েছে — অনুগ্রহ করে আগামীকাল আবার চেষ্টা করো।',
    };
  }
  if (siteMinuteBucket.count >= LIMITS.sitePerMin) {
    return {
      ok: false,
      retryAfterSec: 25,
      message:
        'Many classmates are asking at the same moment. অনেক শিক্ষার্থী একসাথে প্রশ্ন করছে — ২০–৩০ সেকেন্ড পরে আবার চেষ্টা করো।',
    };
  }

  if (hasImage) {
    if (siteImgDayBucket.count >= LIMITS.siteImgPerDay) {
      return {
        ok: false,
        retryAfterSec: 3600,
        message:
          'Shared daily photo quota is full for today (text questions still work!). আজকের শেয়ার্ড ছবি আপলোডের কোটা শেষ — তবে লিখে প্রশ্ন করতে পারবে।',
      };
    }
    if (siteImgMinBucket.count >= LIMITS.siteImgPerMin) {
      return {
        ok: false,
        retryAfterSec: 35,
        message:
          'Several photo questions are being solved right now. একটু অপেক্ষা করে (৩০–৪০ সেকেন্ড পর) আবার ছবি পাঠাও।',
      };
    }
  }

  const forwarded = request.headers.get('x-forwarded-for') || '';
  const ip = (forwarded.split(',')[0] || request.headers.get('x-real-ip') || 'local').trim().slice(0, 64);
  const rawClient = (request.headers.get('x-qmh-client') || '').trim().replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 48);
  const studentKey = `${ip}:${rawClient || 'anon'}`;

  const studentCheck = checkDualBucket(studentBuckets, studentKey, LIMITS.perStudent10Min, LIMITS.perStudentDay, TEN_MIN, now);
  if (!studentCheck.allowed) {
    const mins = Math.max(1, Math.ceil(studentCheck.retryAfterSec / 60));
    return {
      ok: false,
      retryAfterSec: studentCheck.retryAfterSec,
      message:
        studentCheck.scope === 'day'
          ? `You have reached today's personal limit (${LIMITS.perStudentDay} questions/day, shared fairly across ~55 classmates). আজকের তোমার ${LIMITS.perStudentDay}টি প্রশ্নের কোটা পূর্ণ হয়েছে — আগামীকাল আবার ব্যবহার করতে পারবে।`
          : `Short cooldown (${LIMITS.perStudent10Min} questions per 10 min) so all classmates can use QMHBot smoothly. অনুগ্রহ করে প্রায় ${mins} মিনিট পর আবার প্রশ্ন করো।`,
    };
  }

  if (hasImage) {
    const studentImgCheck = checkDualBucket(
      studentImgBuckets,
      studentKey,
      LIMITS.perStudentImg30Min,
      LIMITS.perStudentImgDay,
      THIRTY_MIN,
      now
    );
    if (!studentImgCheck.allowed) {
      const mins = Math.max(1, Math.ceil(studentImgCheck.retryAfterSec / 60));
      return {
        ok: false,
        retryAfterSec: studentImgCheck.retryAfterSec,
        message:
          studentImgCheck.scope === 'day'
            ? `Daily photo limit reached (${LIMITS.perStudentImgDay} photos/day per student — text questions still work!). আজকের তোমার ${LIMITS.perStudentImgDay}টি ছবির কোটা শেষ — তবে টেক্সটে প্রশ্ন করতে পারবে।`
            : `Photo limit (${LIMITS.perStudentImg30Min} photos per 30 min) helps save shared quota. অনুগ্রহ করে ${mins} মিনিট পর ছবি দাও অথবা প্রশ্নটি লিখে জিজ্ঞেস করো।`,
      };
    }

    const ipImgCheck = checkDualBucket(ipImgBuckets, ip, LIMITS.perIpImg30Min, LIMITS.perIpImgDay, THIRTY_MIN, now);
    if (!ipImgCheck.allowed) {
      return {
        ok: false,
        retryAfterSec: ipImgCheck.retryAfterSec,
        message: 'Network photo upload limit reached right now. অনুগ্রহ করে কিছুক্ষণ পর চেষ্টা করো অথবা লিখে প্রশ্ন করো।',
      };
    }
  }

  const ipCheck = checkDualBucket(ipBuckets, ip, LIMITS.perIp10Min, LIMITS.perIpDay, TEN_MIN, now);
  if (!ipCheck.allowed) {
    return {
      ok: false,
      retryAfterSec: ipCheck.retryAfterSec,
      message:
        'Too many requests from this network right now. অনুগ্রহ করে কয়েক মিনিট পর আবার চেষ্টা করো।',
    };
  }

  siteMinuteBucket.count += 1;
  siteDayBucket.count += 1;
  const updatedStudent = incrementDualBucket(studentBuckets, studentKey, TEN_MIN, now);
  incrementDualBucket(ipBuckets, ip, TEN_MIN, now);

  let remainingImagesToday = Math.max(0, LIMITS.perStudentImgDay - (studentImgBuckets.get(studentKey)?.dayCount || 0));
  if (hasImage) {
    siteImgMinBucket.count += 1;
    siteImgDayBucket.count += 1;
    const updatedImg = incrementDualBucket(studentImgBuckets, studentKey, THIRTY_MIN, now);
    incrementDualBucket(ipImgBuckets, ip, THIRTY_MIN, now);
    remainingImagesToday = Math.max(0, LIMITS.perStudentImgDay - updatedImg.dayCount);
  }

  return {
    ok: true,
    remainingToday: Math.max(0, LIMITS.perStudentDay - updatedStudent.dayCount),
    remaining10Min: Math.max(0, LIMITS.perStudent10Min - updatedStudent.tenMinCount),
    remainingImagesToday,
  };
}

function isAllowedOrigin(origin) {
  if (!origin) return true;
  try {
    const u = new URL(origin);
    const host = u.hostname.toLowerCase();
    if (host === 'localhost' || host === '127.0.0.1') return true;
    if (host === 'iasds-first-year.vercel.app') return true;
    if (host.endsWith('-sashuvo379-design.vercel.app')) return true;
    if (host === 'sashuvo379-design.github.io') return true;
    return false;
  } catch {
    return false;
  }
}

function normalizeMime(mime, allowedSet) {
  if (!mime || typeof mime !== 'string') return '';
  const clean = mime.split(';')[0].trim().toLowerCase();
  if (allowedSet.has(clean)) return clean === 'image/jpg' ? 'image/jpeg' : clean;
  return '';
}

function scrubIdentityLeaks(text) {
  if (!text) return '';
  return String(text)
    .replace(/\b(Google\s+Gemini|Gemini\s+\d+(?:\.\d+)?(?:\s+(?:Pro|Flash|Ultra|Lite))?|Gemini|Google\s+AI)\b/gi, 'QMHBot')
    .replace(/\b(trained|created|built|developed)\s+by\s+Google\b/gi, 'built for IASDS students as QMHBot')
    .trim();
}

function buildSystemInstruction(lessonContext = {}) {
  const courseCode = String(lessonContext.courseCode || '').slice(0, 32);
  const courseName = String(lessonContext.courseName || '').slice(0, 140);
  const lessonTitle = String(lessonContext.lessonTitle || '').slice(0, 200);
  const examNote = String(lessonContext.examNote || '').slice(0, 400);
  const headings = Array.isArray(lessonContext.headings)
    ? lessonContext.headings.slice(0, 30).map((h) => `- ${String(h).slice(0, 120)}`).join('\n')
    : '';
  const excerpt = String(lessonContext.contentText || '').slice(0, 8500);

  return [
    'You are QMHBot, a friendly, sharp, exam-oriented academic study assistant for First-Year students of Applied Statistics and Data Science (ISRT, University of Dhaka).',
    '',
    'CRITICAL IDENTITY RULES:',
    '1. Your name is QMHBot. Always identify strictly as QMHBot.',
    '2. NEVER mention Google, Gemini, PaLM, Vertex, OpenAI, Claude, LLM providers, or any underlying model name or vendor in any answer. If asked what AI you are or who made you, respond simply that you are QMHBot, the built-in study assistant for this IASDS learning portal.',
    '3. Keep answers clear, focused, concise, rigorous, and directly helpful for university statistics, mathematics, and economics exams.',
    '',
    'LANGUAGE & MULTIMODAL RULES:',
    '- You are fluent in English, Bangla (বাংলা script), and Banglish (Bangla written in English/Latin letters, e.g. "ei formula ta bujhai dao").',
    '- Reply in the same language/style the student writes or speaks in.',
    '- If the student attaches an image, read every symbol, number, and label from the image and solve or explain it step by step.',
    '- If the student sends a voice recording, listen carefully (English, Bangla, or Banglish) and answer directly.',
    '- Format mathematics cleanly using LaTeX ($...$ for inline, $$...$$ for display) and concise bullet points.',
    '',
    'OPENED LESSON CONTEXT:',
    courseCode ? `Course: ${courseCode}${courseName ? ` — ${courseName}` : ''}` : 'Course: IASDS First-Year Curriculum',
    lessonTitle ? `Opened Lesson: ${lessonTitle}` : '',
    examNote ? `Exam Pattern Note: ${examNote}` : '',
    headings ? `Lesson Sections:\n${headings}` : '',
    excerpt ? `Lesson Content Reference:\n"""\n${excerpt}\n"""` : '',
    '',
    'Ground your explanations in the opened lesson above whenever relevant, and clearly explain related concepts when helpful.',
  ]
    .filter(Boolean)
    .join('\n');
}

function buildContents(history = [], currentMessage = {}, attachments = []) {
  const contents = [];

  if (Array.isArray(history)) {
    const recent = history.slice(-6);
    for (const turn of recent) {
      if (!turn || typeof turn !== 'object') continue;
      const role = turn.role === 'model' ? 'model' : 'user';
      const text = String(turn.text || '').trim().slice(0, 1500);
      if (!text) continue;
      contents.push({
        role,
        parts: [{ text }],
      });
    }
  }

  const userParts = [];
  const promptText = String(currentMessage.text || '').trim().slice(0, 3000);
  if (promptText) {
    userParts.push({ text: promptText });
  }

  let hasImage = false;
  let hasAudio = false;
  for (const att of attachments.slice(0, 2)) {
    if (!att || !att.data || !att.mimeType) continue;
    const base64Clean = String(att.data).replace(/^data:[^;]+;base64,/, '').trim();
    if (!base64Clean) continue;

    if (att.kind === 'image' && !hasImage) {
      const mime = normalizeMime(att.mimeType, ALLOWED_IMAGE_MIME);
      if (mime) {
        userParts.push({ inlineData: { mimeType: mime, data: base64Clean } });
        hasImage = true;
      }
    } else if (att.kind === 'audio' && !hasAudio) {
      const mime = normalizeMime(att.mimeType, ALLOWED_AUDIO_MIME);
      if (mime) {
        userParts.push({ inlineData: { mimeType: mime, data: base64Clean } });
        hasAudio = true;
      }
    }
  }

  if (!promptText && userParts.length > 0) {
    if (hasAudio && hasImage) {
      userParts.unshift({
        text: 'Please listen to my voice question and examine the attached image carefully, then answer in detail.',
      });
    } else if (hasAudio) {
      userParts.unshift({
        text: 'Please listen to my spoken question in this audio clip (English, Bangla, or Banglish) and answer clearly in relation to the opened lesson.',
      });
    } else if (hasImage) {
      userParts.unshift({
        text: 'Please examine this image carefully and solve or explain it clearly in relation to the opened lesson.',
      });
    }
  }

  if (userParts.length > 0) {
    contents.push({ role: 'user', parts: userParts });
  }

  return { contents, isMultimodal: hasImage || hasAudio, hasImage };
}

async function callModelEndpoint(apiKey, modelName, payload) {
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(modelName)}:generateContent`;
  const resp = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-goog-api-key': apiKey,
    },
    body: JSON.stringify(payload),
  });

  const data = await resp.json().catch(() => ({}));
  return { ok: resp.ok, status: resp.status, data };
}

export async function GET() {
  const now = Date.now();
  const day = getDayKey(now);
  const minuteCount = now - siteMinuteBucket.windowStart < 60 * 1000 ? siteMinuteBucket.count : 0;
  const dailyCount = siteDayBucket.day === day ? siteDayBucket.count : 0;
  const imageDailyCount = siteImgDayBucket.day === day ? siteImgDayBucket.count : 0;

  return Response.json({
    ok: Boolean((process.env.GEMINI_API_KEY || '').trim()),
    assistant: 'QMHBot',
    limits: LIMITS,
    instanceUsage: {
      day,
      minuteCount,
      dailyCount,
      imageDailyCount,
      remainingSiteDayOnInstance: Math.max(0, LIMITS.sitePerDay - dailyCount),
      remainingImageDayOnInstance: Math.max(0, LIMITS.siteImgPerDay - imageDailyCount),
    },
  });
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': 'https://iasds-first-year.vercel.app',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, x-qmh-client',
    },
  });
}

export async function POST(request) {
  try {
    const origin = request.headers.get('origin') || '';
    if (!isAllowedOrigin(origin)) {
      return Response.json(
        { error: 'Origin not allowed for QMHBot requests.' },
        { status: 403 }
      );
    }

    const contentLength = Number(request.headers.get('content-length') || 0);
    if (contentLength > MAX_REQUEST_BYTES) {
      return Response.json(
        { error: 'Your attachment is too large (max 2.5 MB). Please use a smaller photo or shorter voice clip.' },
        { status: 413 }
      );
    }

    const apiKey = (process.env.GEMINI_API_KEY || '').trim();
    if (!apiKey) {
      console.error('[QMHBot] Missing GEMINI_API_KEY environment variable');
      return Response.json(
        {
          code: 'NOT_CONFIGURED',
          error: 'QMHBot backend key is not configured yet on this deployment.',
        },
        { status: 503 }
      );
    }

    const rawBody = await request.text();
    if (Buffer.byteLength(rawBody, 'utf8') > MAX_REQUEST_BYTES) {
      return Response.json(
        { error: 'Request payload exceeds 2.5 MB limit. Please compress your photo or record a shorter voice clip.' },
        { status: 413 }
      );
    }

    let body;
    try {
      body = JSON.parse(rawBody);
    } catch {
      return Response.json({ error: 'Invalid JSON request body.' }, { status: 400 });
    }

    const attachments = Array.isArray(body.attachments) ? body.attachments.slice(0, 2) : [];
    const { contents, isMultimodal, hasImage } = buildContents(body.history, { text: body.message }, attachments);

    if (contents.length === 0 || contents[contents.length - 1].role !== 'user') {
      return Response.json(
        { error: 'Please type a question, attach an image, or record a voice message.' },
        { status: 400 }
      );
    }

    // Enforce narrow fair-use rate limits before calling AI
    const limitStatus = enforceRateLimits(request, hasImage);
    if (!limitStatus.ok) {
      return Response.json(
        {
          code: 'RATE_LIMITED',
          retryAfterSec: limitStatus.retryAfterSec,
          error: limitStatus.message,
        },
        {
          status: 429,
          headers: { 'Retry-After': String(limitStatus.retryAfterSec) },
        }
      );
    }

    const systemText = buildSystemInstruction(body.lessonContext);
    const payload = {
      systemInstruction: {
        parts: [{ text: systemText }],
      },
      contents,
      generationConfig: {
        temperature: 0.45,
        maxOutputTokens: 1400,
      },
    };

    const candidateModels = isMultimodal ? MULTIMODAL_MODELS : TEXT_MODELS;
    let result = { ok: false, status: 503, data: {} };
    for (const modelName of candidateModels) {
      result = await callModelEndpoint(apiKey, modelName, payload);
      if (result.ok) break;
      if (![400, 404, 429, 500, 503].includes(result.status)) break;
    }

    if (!result.ok) {
      console.error('[QMHBot] Upstream AI response failed:', result.status, JSON.stringify(result.data?.error || {}));
      if (result.status === 429 || result.status === 503) {
        return Response.json(
          {
            error:
              'QMHBot is temporarily busy because shared class quota is high right now. কিছুক্ষণ পর (৩০–৬০ সেকেন্ড) আবার চেষ্টা করো।',
          },
          { status: 429 }
        );
      }
      return Response.json(
        { error: 'QMHBot could not process this request right now. Please try again.' },
        { status: 502 }
      );
    }

    const candidate = result.data?.candidates?.[0];
    const replyParts = candidate?.content?.parts || [];
    const rawReply = replyParts.map((p) => p.text || '').join('').trim();

    if (!rawReply) {
      const finishReason = candidate?.finishReason || 'UNKNOWN';
      console.error('[QMHBot] Empty candidate response:', finishReason);
      return Response.json(
        { error: 'QMHBot could not generate an answer for that input. Please rephrase and try again.' },
        { status: 502 }
      );
    }

    return Response.json({
      assistant: 'QMHBot',
      reply: scrubIdentityLeaks(rawReply),
      quota: {
        remainingToday: limitStatus.remainingToday,
        remaining10Min: limitStatus.remaining10Min,
        remainingImagesToday: limitStatus.remainingImagesToday,
        dailyLimit: LIMITS.perStudentDay,
        imageDailyLimit: LIMITS.perStudentImgDay,
      },
    });
  } catch (err) {
    console.error('[QMHBot] Unexpected handler error:', err);
    return Response.json(
      { error: 'QMHBot encountered an unexpected error. Please try again.' },
      { status: 500 }
    );
  }
}
