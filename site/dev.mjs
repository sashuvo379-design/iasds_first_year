/* ==========================================================================
   IASDS Local Dev Server with Live Rebuild & SSE Live Reload
   Zero external dependencies — uses Node built-in http & fs.
   ========================================================================== */

import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { buildSite } from './build.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const PORT = Number(process.env.PORT || 4173);

// Load local .env / .env.local if present for local API testing
for (const envName of ['.env.local', '.env']) {
  const envPath = path.join(ROOT_DIR, envName);
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, 'utf8').split(/\r?\n/);
    for (const line of lines) {
      const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
      if (m && !(m[1] in process.env)) {
        process.env[m[1]] = m[2].replace(/^['"]|['"]$/g, '');
      }
    }
  }
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.pdf': 'application/pdf',
  '.ico': 'image/x-icon',
};

const LIVE_RELOAD_SNIPPET = `
<script>
(function(){
  try {
    var es = new EventSource('/__dev_events');
    es.onmessage = function(e){ if (e.data === 'reload') location.reload(); };
  } catch (e) {}
})();
</script>`;

// Initial build
buildSite();

const clients = new Set();

const server = http.createServer(async (req, res) => {
  const reqUrl = new URL(req.url || '/', `http://localhost:${PORT}`);
  const pathname = decodeURIComponent(reqUrl.pathname);

  if (pathname === '/api/chat') {
    try {
      const chatMod = await import(`../api/chat.js?t=${Date.now()}`);
      if (req.method === 'OPTIONS' && chatMod.OPTIONS) {
        const resp = await chatMod.OPTIONS();
        res.writeHead(resp.status, Object.fromEntries(resp.headers.entries()));
        res.end();
        return;
      }
      if (req.method === 'POST' && chatMod.POST) {
        const chunks = [];
        for await (const chunk of req) chunks.push(chunk);
        const bodyBuf = Buffer.concat(chunks);
        const webReq = new Request(reqUrl.toString(), {
          method: 'POST',
          headers: req.headers,
          body: bodyBuf,
        });
        const webResp = await chatMod.POST(webReq);
        const respText = await webResp.text();
        res.writeHead(webResp.status, {
          'Content-Type': webResp.headers.get('content-type') || 'application/json; charset=utf-8',
        });
        res.end(respText);
        return;
      }
      res.writeHead(405, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Method not allowed' }));
      return;
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: err.message || 'API error' }));
      return;
    }
  }

  if (pathname === '/__dev_events') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    });
    res.write('retry: 1000\n\n');
    clients.add(res);
    req.on('close', () => clients.delete(res));
    return;
  }

  let filePath = path.join(DIST_DIR, pathname === '/' ? 'index.html' : pathname);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  // Prevent directory traversal outside dist/
  if (!path.resolve(filePath).startsWith(path.resolve(DIST_DIR))) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('Forbidden');
    return;
  }

  if (!fs.existsSync(filePath)) {
    const notFound = path.join(DIST_DIR, '404.html');
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(fs.existsSync(notFound) ? fs.readFileSync(notFound, 'utf8') : '404 Not Found');
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  if (ext === '.html') {
    let html = fs.readFileSync(filePath, 'utf8');
    html = html.replace('</body>', `${LIVE_RELOAD_SNIPPET}\n</body>`);
    res.writeHead(200, { 'Content-Type': contentType, 'Cache-Control': 'no-store' });
    res.end(html);
  } else {
    res.writeHead(200, { 'Content-Type': contentType, 'Cache-Control': 'no-store' });
    fs.createReadStream(filePath).pipe(res);
  }
});

// Watch site/ and course directories for live rebuild
let rebuildTimer = null;
function scheduleRebuild(changed) {
  clearTimeout(rebuildTimer);
  rebuildTimer = setTimeout(() => {
    console.log(`\nChange detected (${changed}) — rebuilding...`);
    try {
      buildSite();
      for (const client of clients) {
        client.write('data: reload\n\n');
      }
    } catch (err) {
      console.error('Rebuild failed:', err);
    }
  }, 180);
}

try {
  fs.watch(path.join(ROOT_DIR, 'site'), { recursive: true }, (_event, filename) => {
    if (filename) scheduleRebuild(`site/${filename}`);
  });
  for (const entry of fs.readdirSync(ROOT_DIR, { withFileTypes: true })) {
    if (
      entry.isDirectory() &&
      !entry.name.startsWith('.') &&
      !['site', 'dist', 'api', 'node_modules'].includes(entry.name)
    ) {
      fs.watch(path.join(ROOT_DIR, entry.name), { recursive: true }, (_event, filename) => {
        if (filename) scheduleRebuild(`${entry.name}/${filename}`);
      });
    }
  }
} catch {
  // Watch fallback on unsupported filesystems
}

server.listen(PORT, '127.0.0.1', () => {
  console.log(`IASDS dev server running at http://localhost:${PORT}/`);
  console.log('Watching site/ and course folders for live rebuilds (Ctrl+C to stop).');
});
