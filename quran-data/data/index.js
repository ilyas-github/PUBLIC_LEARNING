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
    ayahRange: "1-83",
    ayahsCovered: 83,
    totalAyahs: 286,
    status: "partial",
    file: "data/surah-002.js",
    version: 11
  },
  {
    surahNumber: 3,
    surahNameArabic: "آل عمران",
    surahNameEnglish: "Ali 'Imran (Family of Imran)",
    ayahRange: "1-80",
    ayahsCovered: 80,
    totalAyahs: 200,
    status: "partial",
    file: "data/surah-003.js",
    version: 8
  }
];
