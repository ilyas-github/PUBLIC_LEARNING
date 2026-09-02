/**
 * Qur'anic Root Explorer - Root Dataset (Prototype)
 * 
 * Schema Architecture:
 * - root: The Arabic root letters (space-separated for clarity)
 * - rootEnglish: Core conceptual meaning in English
 * - rootUrdu: Core conceptual meaning in Urdu
 * - status: "verified" | "needs_review" | "preliminary"
 * - examples: Array of derived Qur'anic occurrences (1 to 4 max)
 */

const QURANIC_ROOTS_DATA = [
  {
    id: "ktb",
    root: "ك ت ب",
    rootEnglish: "writing / prescribing / recording",
    rootUrdu: "لکھنا / فرض کرنا / محفوظ کرنا",
    status: "verified",
    examples: [
      {
        word: "كَتَبَ",
        transliteration: "kataba",
        meaningEnglish: "he prescribed / he wrote",
        meaningUrdu: "اس نے فرض کیا / اس نے لکھا",
        reference: "2:183",
        surahName: "Al-Baqarah",
        ayah: 183,
        quranText: "كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِن قَبْلِكُمْ",
        quranEnglish: "Fasting is prescribed for you as it was prescribed for those before you.",
        quranUrdu: "تم پر روزے فرض کیے گئے ہیں جیسا کہ تم سے پہلے لوگوں پر فرض کیے گئے تھے۔",
        validation: { quranicReferenceChecked: true, wordFormChecked: true, rootAssignmentChecked: true, meaningReviewed: true, scholarlyReview: "pending" }
      },
      {
        word: "كِتَابٌ",
        transliteration: "kitab",
        meaningEnglish: "book / scripture / decree",
        meaningUrdu: "کتاب / فرمان / تحریر",
        reference: "2:2",
        surahName: "Al-Baqarah",
        ayah: 2,
        quranText: "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ",
        quranEnglish: "This is the Book about which there is no doubt, a guidance for those conscious of Allah.",
        quranUrdu: "یہ وہ کتاب ہے جس میں کوئی شک نہیں، پرہیزگاروں کے لیے ہدایت ہے۔",
        validation: { quranicReferenceChecked: true, wordFormChecked: true, rootAssignmentChecked: true, meaningReviewed: true, scholarlyReview: "pending" }
      },
      {
        word: "كَاتِبٌ",
        transliteration: "katib",
        meaningEnglish: "scribe / writer",
        meaningUrdu: "لکھنے والا / کاتب",
        reference: "2:282",
        surahName: "Al-Baqarah",
        ayah: 282,
        quranText: "وَلْيَكْتُب بَّيْنَكُمْ كَاتِبٌ بِالْعَدْلِ",
        quranEnglish: "And let a scribe write [it] down between you in justice.",
        quranUrdu: "اور چاہیے کہ تمہارے درمیان کوئی لکھنے والا انصاف کے ساتھ لکھے۔",
        validation: { quranicReferenceChecked: true, wordFormChecked: true, rootAssignmentChecked: true, meaningReviewed: true, scholarlyReview: "pending" }
      },
      {
        word: "مَكْتُوبًا",
        transliteration: "maktub",
        meaningEnglish: "written / recorded / inscribed",
        meaningUrdu: "لکھا ہوا / درج شدہ",
        reference: "7:157",
        surahName: "Al-A'raf",
        ayah: 157,
        quranText: "الَّذِينَ يَتَّبِعُونَ الرَّسُولَ النَّبِيَّ الْأُمِّيَّ الَّذِي يَجِدُونَهُ مَكْتُوبًا عِندَهُمْ",
        quranEnglish: "Those who follow the Messenger, the unlettered prophet, whom they find written down with them...",
        quranUrdu: "جو اس رسول، نبی امی کی پیروی کرتے ہیں جسے وہ اپنے پاس لکھا ہوا پاتے ہیں...",
        validation: { quranicReferenceChecked: true, wordFormChecked: true, rootAssignmentChecked: true, meaningReviewed: true, scholarlyReview: "pending" }
      }
    ]
  },
  {
    id: "clm",
    root: "ع ل م",
    rootEnglish: "knowing / knowledge / sign / world",
    rootUrdu: "جاننا / علم / نشان / کائنات",
    status: "verified",
    examples: [
      {
        word: "عَلِمَ",
        transliteration: "alima",
        meaningEnglish: "he knew / learned",
        meaningUrdu: "اس نے جانا / معلوم کیا",
        reference: "2:255",
        surahName: "Al-Baqarah",
        ayah: 255,
        quranText: "يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ",
        quranEnglish: "He knows what is [presently] before them and what will be after them.",
        quranUrdu: "وہ جانتا ہے جو کچھ ان کے آگے ہے اور جو کچھ ان کے پیچھے ہے۔",
        validation: { quranicReferenceChecked: true, wordFormChecked: true, rootAssignmentChecked: true, meaningReviewed: true, scholarlyReview: "pending" }
      },
      {
        word: "عَلِيمٌ",
        transliteration: "aleem",
        meaningEnglish: "All-Knowing / Omniscient",
        meaningUrdu: "سب کچھ جاننے والا / علیم",
        reference: "2:29",
        surahName: "Al-Baqarah",
        ayah: 29,
        quranText: "وَهُوَ بِكُلِّ شَيْءٍ عَلِيمٌ",
        quranEnglish: "And He is Knowing of all things.",
        quranUrdu: "اور وہ ہر چیز کا علم رکھنے والا ہے۔",
        validation: { quranicReferenceChecked: true, wordFormChecked: true, rootAssignmentChecked: true, meaningReviewed: true, scholarlyReview: "pending" }
      },
      {
        word: "عَلَّمَ",
        transliteration: "allama",
        meaningEnglish: "he taught / instructed",
        meaningUrdu: "اس نے سکھایا / علم دیا",
        reference: "96:4",
        surahName: "Al-Alaq",
        ayah: 4,
        quranText: "الَّذِي عَلَّمَ بِالْقَلَمِ",
        quranEnglish: "Who taught by the pen.",
        quranUrdu: "جس نے قلم کے ذریعے سکھایا۔",
        validation: { quranicReferenceChecked: true, wordFormChecked: true, rootAssignmentChecked: true, meaningReviewed: true, scholarlyReview: "pending" }
      },
      {
        word: "العَالَمِينَ",
        transliteration: "al-alameen",
        meaningEnglish: "the worlds / all creation",
        meaningUrdu: "تمام جہان / تمام مخلوقات",
        reference: "1:2",
        surahName: "Al-Fatihah",
        ayah: 2,
        quranText: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
        quranEnglish: "[All] praise is [due] to Allah, Lord of the worlds.",
        quranUrdu: "تمام تعریفیں اللہ کے لیے ہیں جو تمام جہانوں کا پروردگار ہے۔",
        validation: { quranicReferenceChecked: true, wordFormChecked: true, rootAssignmentChecked: true, meaningReviewed: true, scholarlyReview: "pending" }
      }
    ]
  },
  {
    id: "rmn",
    root: "ر ح م",
    rootEnglish: "mercy / compassion / womb",
    rootUrdu: "رحم / مہربانی / شفقت",
    status: "verified",
    examples: [
      {
        word: "الرَّحْمَٰنِ",
        transliteration: "ar-rahman",
        meaningEnglish: "The Most Gracious / Entirely Merciful",
        meaningUrdu: "بہت مہربان / رحمان",
        reference: "1:1",
        surahName: "Al-Fatihah",
        ayah: 1,
        quranText: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        quranEnglish: "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
        quranUrdu: "اللہ کے نام سے جو بے حد مہربان، نہایت رحم کرنے والا ہے۔",
        validation: { quranicReferenceChecked: true, wordFormChecked: true, rootAssignmentChecked: true, meaningReviewed: true, scholarlyReview: "pending" }
      },
      {
        word: "رَحْمَةً",
        transliteration: "rahmah",
        meaningEnglish: "mercy / grace",
        meaningUrdu: "رحمت / مہربانی",
        reference: "21:107",
        surahName: "Al-Anbiya",
        ayah: 107,
        quranText: "وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ",
        quranEnglish: "And We have not sent you, [O Muhammad], except as a mercy to the worlds.",
        quranUrdu: "اور ہم نے آپ کو تمام جہانوں کے لیے رحمت بنا کر ہی بھیجا ہے۔",
        validation: { quranicReferenceChecked: true, wordFormChecked: true, rootAssignmentChecked: true, meaningReviewed: true, scholarlyReview: "pending" }
      },
      {
        word: "أَرْحَامِ",
        transliteration: "arham",
        meaningEnglish: "wombs / ties of kinship",
        meaningUrdu: "رحم / بچے دانی / رشتہ داری",
        reference: "3:6",
        surahName: "Ali 'Imran",
        ayah: 6,
        quranText: "هُوَ الَّذِي يُصَوِّرُكُمْ فِي الْأَرْحَامِ كَيْفَ يَشَاءُ",
        quranEnglish: "It is He who forms you in the wombs as He wills.",
        quranUrdu: "وہی ہے جو ماؤں کے پیٹ میں تمہاری صورتیں بناتا ہے جیسے چاہتا ہے۔",
        validation: { quranicReferenceChecked: true, wordFormChecked: true, rootAssignmentChecked: true, meaningReviewed: true, scholarlyReview: "pending" }
      }
    ]
  },
  {
    id: "nhr",
    root: "ن هـ ر",
    rootEnglish: "river / daylight / flowing water",
    rootUrdu: "نہر / دن کا اجالا / جاری پانی",
    status: "verified",
    examples: [
      {
        word: "أَنْهَارٌ",
        transliteration: "anhaar",
        meaningEnglish: "rivers / streams",
        meaningUrdu: "نہریں / جاری چشمے",
        reference: "2:25",
        surahName: "Al-Baqarah",
        ayah: 25,
        quranText: "جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ",
        quranEnglish: "Gardens beneath which rivers flow...",
        quranUrdu: "ایسے باغات جن کے نیچے نہریں بہتی ہیں...",
        validation: { quranicReferenceChecked: true, wordFormChecked: true, rootAssignmentChecked: true, meaningReviewed: true, scholarlyReview: "pending" }
      },
      {
        word: "النَّهَارَ",
        transliteration: "an-nahar",
        meaningEnglish: "the daytime",
        meaningUrdu: "دن / روز",
        reference: "3:190",
        surahName: "Ali 'Imran",
        ayah: 190,
        quranText: "وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لِّأُولِي الْأَلْبَابِ",
        quranEnglish: "And the alternation of the night and the day are signs for those of understanding.",
        quranUrdu: "اور رات اور دن کے باری باری آنے میں عقل مندوں کے لیے نشانیاں ہیں۔",
        validation: { quranicReferenceChecked: true, wordFormChecked: true, rootAssignmentChecked: true, meaningReviewed: true, scholarlyReview: "pending" }
      }
    ]
  },
  {
    id: "sjd",
    root: "س ج د",
    rootEnglish: "prostration / submission",
    rootUrdu: "سجدہ کرنا / عاجزی کرنا",
    status: "verified",
    examples: [
      {
        word: "اسْجُدُوا",
        transliteration: "usjudoo",
        meaningEnglish: "prostrate yourselves! (plural command)",
        meaningUrdu: "سجدہ کرو! (حکم)",
        reference: "2:34",
        surahName: "Al-Baqarah",
        ayah: 34,
        quranText: "وَإِذْ قُلْنَا لِلْمَلَائِكَةِ اسْجُدُوا لِآدَمَ فَسَجَدُوا",
        quranEnglish: "And [mention] when We said to the angels, 'Prostrate before Adam'; so they prostrated...",
        quranUrdu: "اور جب ہم نے فرشتوں سے کہا کہ آدم کے آگے سجدہ کرو تو سب نے سجدہ کیا۔",
        validation: { quranicReferenceChecked: true, wordFormChecked: true, rootAssignmentChecked: true, meaningReviewed: true, scholarlyReview: "pending" }
      },
      {
        word: "مَسَاجِدَ",
        transliteration: "masajid",
        meaningEnglish: "mosques / places of prostration",
        meaningUrdu: "مسجدیں / سجدہ گاہیں",
        reference: "2:114",
        surahName: "Al-Baqarah",
        ayah: 114,
        quranText: "وَمَنْ أَظْلَمُ مِمَّن مَّنَعَ مَسَاجِدَ اللَّهِ أَن يُذْكَرَ فِيهَا اسْمُهُ",
        quranEnglish: "And who is more unjust than who prevents the mosques of Allah from being mentioned therein His name?",
        quranUrdu: "اور اس سے بڑا ظالم کون ہوگا جو اللہ کی مسجدوں میں اس کے نام کا ذکر کیے جانے سے روکے؟",
        validation: { quranicReferenceChecked: true, wordFormChecked: true, rootAssignmentChecked: true, meaningReviewed: true, scholarlyReview: "pending" }
      },
      {
        word: "سُجَّدًا",
        transliteration: "sujjadan",
        meaningEnglish: "in prostration / prostrating",
        meaningUrdu: "سجدے کی حالت میں",
        reference: "48:29",
        surahName: "Al-Fath",
        ayah: 29,
        quranText: "تَرَاهُمْ رُكَّعًا سُجَّدًا يَبْتَغُونَ فَضْلًا مِّنَ اللَّهِ وَرِضْوَانًا",
        quranEnglish: "You see them bowing and prostrating, seeking bounty from Allah and His pleasure.",
        quranUrdu: "تو انہیں رکوع اور سجدے کرتے ہوئے دیکھے گا، وہ اللہ کا فضل اور اس کی رضا تلاش کرتے ہیں۔",
        validation: { quranicReferenceChecked: true, wordFormChecked: true, rootAssignmentChecked: true, meaningReviewed: true, scholarlyReview: "pending" }
      }
    ]
  },
  {
    id: "qwl",
    root: "ق و ل",
    rootEnglish: "saying / speech / word",
    rootUrdu: "کہنا / بات / قول",
    status: "verified",
    examples: [
      {
        word: "قَالَ",
        transliteration: "qaala",
        meaningEnglish: "he said",
        meaningUrdu: "اس نے کہا",
        reference: "2:30",
        surahName: "Al-Baqarah",
        ayah: 30,
        quranText: "وَإِذْ قَالَ رَبُّكَ لِلْمَلَائِكَةِ إِنِّي جَاعِلٌ فِي الْأَرْضِ خَلِيفَةً",
        quranEnglish: "And [mention] when your Lord said to the angels, 'Indeed, I will make upon the earth a successive authority.'",
        quranUrdu: "اور جب تیرے رب نے فرشتوں سے فرمایا کہ میں زمین میں ایک نائب بنانے والا ہوں۔",
        validation: { quranicReferenceChecked: true, wordFormChecked: true, rootAssignmentChecked: true, meaningReviewed: true, scholarlyReview: "pending" }
      },
      {
        word: "قَوْلًا",
        transliteration: "qawlan",
        meaningEnglish: "a statement / speech / word",
        meaningUrdu: "بات / قول / کلام",
        reference: "73:5",
        surahName: "Al-Muzzammil",
        ayah: 5,
        quranText: "إِنَّا سَنُلْقِي عَلَيْكَ قَوْلًا ثَقِيلًا",
        quranEnglish: "Indeed, We shall cast upon you a heavy word.",
        quranUrdu: "ہم عنقریب آپ پر ایک بھاری کلام نازل کرنے والے ہیں۔",
        validation: { quranicReferenceChecked: true, wordFormChecked: true, rootAssignmentChecked: true, meaningReviewed: true, scholarlyReview: "pending" }
      },
      {
        word: "قِيلَ",
        transliteration: "qeela",
        meaningEnglish: "it was said / it is said",
        meaningUrdu: "کہا گیا",
        reference: "2:11",
        surahName: "Al-Baqarah",
        ayah: 11,
        quranText: "وَإِذَا قِيلَ لَهُمْ لَا تُفْسِدُوا فِي الْأَرْضِ قَالُوا إِنَّمَا نَحْنُ مُصْلِحُونَ",
        quranEnglish: "And when it is said to them, 'Do not cause corruption on the earth,' they say, 'We are but reformers.'",
        quranUrdu: "اور جب ان سے کہا جاتا ہے کہ زمین میں فساد نہ پھیلاؤ تو کہتے ہیں ہم تو اصلاح کرنے والے ہیں۔",
        validation: { quranicReferenceChecked: true, wordFormChecked: true, rootAssignmentChecked: true, meaningReviewed: true, scholarlyReview: "pending" }
      }
    ]
  }
];