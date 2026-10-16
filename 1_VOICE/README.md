# Urdu Dictation — اردو بول کر لکھیں

A big-button Urdu speech-to-text page for a writer with weak eyesight.
Speak Urdu → the article appears in large Nastaliq text → save as .txt or Word .doc.

## Why this must be hosted (important)

Chrome **blocks the speech-recognition service for files opened directly**
(`file://` / downloaded copies): the microphone permission is granted, but no
text ever appears ("service-not-allowed"). The page must be served over the
web (HTTPS) or from localhost. That is why this folder is published with
GitHub Pages — the same way as the Quran Roots app.

## Publish on GitHub Pages (one time)

1. Create a new public repository, e.g. `urdu-dictation`.
2. Upload `index.html` from this folder (and this README if you like).
3. Repository → Settings → Pages → "Deploy from a branch" → `main` / root → Save.
4. After a minute the site is live at `https://<your-username>.github.io/urdu-dictation/`
5. Open that link in Chrome (laptop) or Chrome on the phone, allow the
   microphone once, and dictate.

## Use

- Big green button: start / stop speaking (or Ctrl+M).
- "پہلے مائیک جانچیں" tests the microphone alone (moving bar = mic works).
- Text auto-saves in that browser; 💾 saves a .txt, 📄 saves a Word .doc.
- Needs Chrome or Edge, a microphone, and internet (the browser's speech
  service does the Urdu recognition, language `ur-PK`).

## Version 4 — what changed

- **Read aloud fixed**: waits for the PC's voices to load, prefers an Urdu →
  Arabic → Hindi voice, and reads in short sentence chunks (Chrome used to
  cut long readings off). Press 🔊 again to stop. If the PC has **no** Urdu
  voice it now says so on screen — Microsoft Edge ships one, or add Urdu in
  Windows Settings → Time & Language → Speech.
- **Text size**: A− / A+ buttons plus a slider, with the size shown as a
  number (24–80). The change is applied with top priority so it cannot be
  overridden.
- **Languages**: اردو / English / **Mix** buttons above the mic button.
  Mix alternates language after each sentence (Urdu sentence → English
  sentence). Switching is instant, even mid-dictation.
- **Word export is now a real .docx** with the "Noto Nastaliq Urdu" font
  named in its styles, RTL paragraphs and wide line spacing. For the font
  itself to appear in Word, install **Noto Nastaliq Urdu** once on the PC
  (free: Google Fonts → "Noto Nastaliq Urdu" → Download → right-click the
  .ttf files → Install). The new **Print / PDF** button always renders true
  Nastaliq because the page loads the web font itself.

## Version 5 — what changed

- **Mix slowness fixed**: v4 stopped and restarted recognition after every
  sentence to swap languages — that restart was the lag. Mix is now one
  steady Urdu session (English words are written in Urdu script as spoken);
  use the English button for whole English paragraphs.
- **Read-aloud diagnosis**: new 🗣️ Voice Test button speaks one sentence
  and shows the exact voice name found (or that none was found). If the
  chosen voice fails, reading retries once with the PC default voice; if
  every voice fails, the red box now shows the real error code instead of
  silence.
- **Edge note**: Edge's speech recognition has a known "network" error
  problem (reported since Edge 134, while the same pages work in Chrome).
  Use Chrome for this app; it is not your internet connection.

## Version 6 (2026-10-16)

- **Urdu only** — the English / Mix buttons are removed (they were slow and
  are not needed; Urdu recognition stays).
- **Read-aloud fixed for PCs with no Urdu voice** — if the PC has no
  Urdu/Arabic voice installed, "Listen" and "Voice Test" now automatically
  use Google's online Urdu voice (internet needed, which dictation needs
  anyway). If a PC voice exists, it is used as before.
- Permanent one-time fix for offline read-aloud on the PC: Windows
  Settings → Time & language → Speech → Add voices → Urdu → install
  **Microsoft Salma** → restart Chrome.
