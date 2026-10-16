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
