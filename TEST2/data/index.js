/**
 * Index of available surahs. Update this file whenever a surah file is added or changed
 * (raise "version" for any surah whose file changed, so browsers fetch the new copy).
 */

window.quranIndex = [
  {
    surahNumber: 1,
    surahNameArabic: "الفاتحة",
    surahNameEnglish: "Al-Fatihah (The Opening)",
    ayahRange: "1-7",
    ayahsCovered: 7,
    totalAyahs: 7,
    status: "complete",
    file: "data/surah-001.js",
    version: 1
  },
  {
    surahNumber: 2,
    surahNameArabic: "البقرة",
    surahNameEnglish: "Al-Baqarah (The Cow)",
    ayahRange: "1-65",
    ayahsCovered: 65,
    totalAyahs: 286,
    status: "partial",
    file: "data/surah-002.js",
    version: 7
  }
];
