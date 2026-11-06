/**
 * loader.js - loads one surah file on demand.
 * Needs data/index.js loaded first (it defines window.quranIndex).
 *
 *   loadSurah(2).then(surah => { ... surah.ayahs ... });
 *
 * Each surah file adds its block to window.quranDatabase, exactly like the old single file,
 * so code that reads window.quranDatabase keeps working once the surah has been loaded.
 */
function loadSurah(n) {
  return new Promise(function (resolve, reject) {
    var db = (window.quranDatabase = window.quranDatabase || []);
    var found = db.find(function (s) { return s.surahNumber === n; });
    if (found) return resolve(found);                       // already loaded
    var entry = (window.quranIndex || []).find(function (e) { return e.surahNumber === n; });
    if (!entry) return reject(new Error('Surah ' + n + ' is not in the index yet'));
    var sc = document.createElement('script');
    sc.src = entry.file + '?v=' + entry.version;            // version changes when the file is updated
    sc.onload = function () {
      resolve(window.quranDatabase.find(function (s) { return s.surahNumber === n; }));
    };
    sc.onerror = function () { reject(new Error('Could not load ' + entry.file)); };
    document.head.appendChild(sc);
  });
}
