/* ==========================================================================
   QMHBot Serverless API Handler (/api/chat)
   Stateless, login-free academic tutor grounded in the active IASDS lesson.
   Supports English, Bangla (বাংলা), Banglish, images, and recorded voice clips.
   ========================================================================== */

const MODEL_CANDIDATES = [
  process.env.QMHBOT_MODEL,
  'gemini-3-flash-preview',
  'gemini-3.8-flash',
  'gemini-3.1-flash-lite',
  'gemini-flash-latest',
].filter(Boolean);
const MAX_REQUEST_BYTES = 4.2 * 1024 * 1024;
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

function normalizeMime(mime, allowedSet) {
  if (!mime || typeof mime !== 'string') return '';
  const clean = mime.split(';')[0].trim().toLowerCase();
  if (allowedSet.has(clean)) return clean === 'image/jpg' ? 'image/jpeg' : clean;
  return '';
}

function scrubIdentityLeaks(text) {
  if (!text) return '';
  // Ensure strict white-labeling as QMHBot even if an unexpected upstream mention slips through
  return String(text)
    .replace(/\b(Google\s+Gemini|Gemini\s+\d+(?:\.\d+)?(?:\s+(?:Pro|Flash|Ultra))?|Gemini|Google\s+AI)\b/gi, 'QMHBot')
    .replace(/\b(trained|created|built|developed)\s+by\s+Google\b/gi, 'built for IASDS students as QMHBot')
    .trim();
}

function buildSystemInstruction(lessonContext = {}) {
  const courseCode = String(lessonContext.courseCode || '').slice(0, 32);
  const courseName = String(lessonContext.courseName || '').slice(0, 140);
  const lessonTitle = String(lessonContext.lessonTitle || '').slice(0, 200);
  const examNote = String(lessonContext.examNote || '').slice(0, 500);
  const headings = Array.isArray(lessonContext.headings)
    ? lessonContext.headings.slice(0, 40).map((h) => `- ${String(h).slice(0, 140)}`).join('\n')
    : '';
  const excerpt = String(lessonContext.contentText || '').slice(0, 14000);

  return [
    'You are QMHBot, a friendly, sharp, exam-oriented academic study assistant for First-Year students of Applied Statistics and Data Science (ISRT, University of Dhaka).',
    '',
    'CRITICAL IDENTITY RULES:',
    '1. Your name is QMHBot. Always identify strictly as QMHBot.',
    '2. NEVER mention Google, Gemini, PaLM, Vertex, OpenAI, Claude, LLM providers, or any underlying model name or vendor in any answer. If asked what AI you are or who made you, respond simply that you are QMHBot, the built-in study assistant for this IASDS learning portal.',
    '3. Keep answers clear, rigorous, encouraging, and directly helpful for university statistics, mathematics, and economics exams.',
    '',
    'LANGUAGE & MULTIMODAL RULES:',
    '- You are fluent in English, Bangla (বাংলা script), and Banglish (Bengla written in English/Latin letters, e.g. "ei formula ta bujhai dao", "variance er proof ki?").',
    '- Reply in the same language/style the student writes or speaks in (e.g., if they ask in Bangla, reply in clear Bangla with standard English mathematical terms/LaTeX where natural; if they ask in Banglish, reply warmly in clean Bangla or easy Banglish+English clarity as fits best; if English, reply in crisp academic English).',
    '- If the student attaches an image (handwritten math, printed question paper, graph, table, or diagram), carefully read every symbol, number, and label from the image and solve or explain it step by step.',
    '- If the student sends a voice recording, listen carefully to the audio (English, Bangla, or Banglish) and answer their spoken question directly.',
    '- Format mathematics cleanly using standard LaTeX ($...$ for inline math, $$...$$ for display equations) and clean Markdown bullet points or numbered steps.',
    '',
    'OPENED LESSON CONTEXT:',
    courseCode ? `Course: ${courseCode}${courseName ? ` — ${courseName}` : ''}` : 'Course: IASDS First-Year Curriculum',
    lessonTitle ? `Opened Lesson: ${lessonTitle}` : '',
    examNote ? `Exam Pattern Note: ${examNote}` : '',
    headings ? `Lesson Sections:\n${headings}` : '',
    excerpt ? `Lesson Content Reference:\n"""\n${excerpt}\n"""` : '',
    '',
    'Ground your explanations in the opened lesson above whenever relevant, and feel free to explain prerequisite or related concepts needed for full understanding.',
  ]
    .filter(Boolean)
    .join('\n');
}

function buildContents(history = [], currentMessage = {}, attachments = []) {
  const contents = [];

  if (Array.isArray(history)) {
    const recent = history.slice(-10);
    for (const turn of recent) {
      if (!turn || typeof turn !== 'object') continue;
      const role = turn.role === 'model' ? 'model' : 'user';
      const text = String(turn.text || '').trim().slice(0, 6000);
      if (!text) continue;
      contents.push({
        role,
        parts: [{ text }],
      });
    }
  }

  const userParts = [];
  const promptText = String(currentMessage.text || '').trim().slice(0, 8000);
  if (promptText) {
    userParts.push({ text: promptText });
  }

  for (const att of attachments) {
    if (!att || !att.data || !att.mimeType) continue;
    const base64Clean = String(att.data).replace(/^data:[^;]+;base64,/, '').trim();
    if (!base64Clean) continue;

    if (att.kind === 'image') {
      const mime = normalizeMime(att.mimeType, ALLOWED_IMAGE_MIME);
      if (mime) {
        userParts.push({ inlineData: { mimeType: mime, data: base64Clean } });
      }
    } else if (att.kind === 'audio') {
      const mime = normalizeMime(att.mimeType, ALLOWED_AUDIO_MIME);
      if (mime) {
        userParts.push({ inlineData: { mimeType: mime, data: base64Clean } });
      }
    }
  }

  if (!promptText && userParts.length > 0) {
    const hasAudio = attachments.some((a) => a && a.kind === 'audio');
    const hasImage = attachments.some((a) => a && a.kind === 'image');
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

  return contents;
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

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

export async function POST(request) {
  try {
    const contentLength = Number(request.headers.get('content-length') || 0);
    if (contentLength > MAX_REQUEST_BYTES) {
      return Response.json(
        { error: 'Your attachment is too large. Please use a smaller photo or shorter voice clip.' },
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
        { error: 'Request payload exceeds size limit. Please compress your image or record a shorter audio clip.' },
        { status: 413 }
      );
    }

    let body;
    try {
      body = JSON.parse(rawBody);
    } catch {
      return Response.json({ error: 'Invalid JSON request body.' }, { status: 400 });
    }

    const attachments = Array.isArray(body.attachments) ? body.attachments.slice(0, 3) : [];
    const contents = buildContents(body.history, { text: body.message }, attachments);

    if (contents.length === 0 || contents[contents.length - 1].role !== 'user') {
      return Response.json(
        { error: 'Please type a question, attach an image, or record a voice message.' },
        { status: 400 }
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
        maxOutputTokens: 2048,
      },
    };

    let result = { ok: false, status: 503, data: {} };
    for (const modelName of MODEL_CANDIDATES) {
      result = await callModelEndpoint(apiKey, modelName, payload);
      if (result.ok) break;
      if (![400, 404, 429, 500, 503].includes(result.status)) break;
    }

    if (!result.ok) {
      console.error('[QMHBot] Upstream AI response failed:', result.status, JSON.stringify(result.data?.error || {}));
      if (result.status === 429) {
        return Response.json(
          { error: 'QMHBot is temporarily busy due to high demand. Please wait a few seconds and try again.' },
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
    });
  } catch (err) {
    console.error('[QMHBot] Unexpected handler error:', err);
    return Response.json(
      { error: 'QMHBot encountered an unexpected error. Please try again.' },
      { status: 500 }
    );
  }
}
