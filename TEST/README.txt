QURAN ROOTS DATA - folder layout
================================

quran-data/
  index.html        the Quranic Root Finder page (reads the data folder)
  data/
    index.js        list of available surahs (window.quranIndex)  <- update when a surah is added/changed
    surah-001.js    Al-Fatihah       (complete, 7 of 7 ayahs)
    surah-002.js    Al-Baqarah       (partial, ayahs 1-40 of 286)
    roots.js        shared root dictionary, each root once (optional to use)
  loader.js         loadSurah(n) - loads a surah file when needed
  example.html      tiny working example of the above

HOW THE PAGE WORKS NOW
----------------------
index.html no longer contains data. When it opens it reads data/index.js, loads every surah file
listed there, builds its root/word/meaning indexes, and then enables search.
Search, voice, themes and the display are unchanged.
Keep index.html and the data folder together. Opening index.html directly from your computer also works.

HOW YOUR OWN HTML CHANGES (if you use a different page)
-------------------------------------------------------
Before: one <script src="...master.js"> that loaded everything.
Now:    <script src="data/index.js"></script>
        <script src="loader.js"></script>
and wherever the page needs a surah:  loadSurah(2).then(function (surah) { ... });

After loadSurah(n) finishes, the surah is inside window.quranDatabase, in the same format as before.
Do not read window.quranDatabase for a surah before loading it.

ADDING A NEW SURAH (e.g. Surah 3)
---------------------------------
1. Put surah-003.js into the data/ folder.
2. Replace data/index.js with the new index I send (it has the extra entry).
3. Commit and push. No other file changes.

ADDING MORE AYAHS TO A SURAH THAT IS ALREADY HERE (e.g. 2:41-45)
----------------------------------------------------------------
The surah-002.js file is REPLACED by the new version (it then contains 2:1-45).
Also replace data/index.js (its "version" number goes up, so browsers fetch the new file).

UPLOADING TO GITHUB
-------------------
- The website upload takes files up to 25 MB; every surah file here will be far smaller.
- Keep the folder structure exactly as above (data/ inside the repository folder).
- Do not rename the files; the index points to them by name.
