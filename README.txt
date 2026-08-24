BrewTracker 3.0 PWA Edition

FILES
- index.html: main app
- app.js: app logic
- manifest.webmanifest: PWA metadata
- sw.js: offline service worker
- icon-*.png: app icons

LOCAL TEST
1. Open a terminal in this folder.
2. Run: py -m http.server 8000
3. Open http://localhost:8000 on the same PC.

IPHONE TEST
Open the app from an HTTPS-hosted address in Safari, then Share > Add to Home Screen.
The offline cache is prepared after the first successful online load.

Important: opening index.html directly from Files does not provide the intended PWA behavior.
Service workers require a secure context (HTTPS, or localhost on the same device).
