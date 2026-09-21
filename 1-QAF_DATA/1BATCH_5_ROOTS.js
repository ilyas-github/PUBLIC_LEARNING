// ==========================================
// BATCH 5: ROOT ENTRIES (FREQUENCY-BASED DATASET)
// Corrected: fixed a mis-cited Hadith text, 3 word-field mismatches,
// removed a duplicate root already present in Batch 4 (ن ص ر),
// and added missing surahName/transliteration fields. See audit notes.
// 19 unique roots in this corrected batch.
// ==========================================

const BATCH_5_ROOTS = [
  {
    id: "s-m-a",
    root: "س م ع",
    rootEnglish: "To hear / Listen / Pay attention",
    rootUrdu: "سننا / دھیان دینا",
    examples: [
      {
        word: "سَمِعَ",
        meaningEnglish: "He heard",
        meaningUrdu: "اس نے سنا",
        quranText: "لَقَدْ سَمِعَ اللهُ قَوْلَ الَّتِي تُجَادِلُكَ فِي زَوْجِهَا",
        transliteration: "Laqad sami'a Allahu qawla allati tujadiluka fi zawjiha",
        surahName: "Al-Mujadila",
        reference: "58:1",
        quranEnglish: "Certainly has Allah heard the speech of the one who argues with you [O Muhammad] concerning her husband.",
        quranUrdu: "بےشک اللہ نے اس عورت کی بات سن لی جو اپنے شوہر کے بارے میں آپ سے جھگڑ رہی تھی"
      },
      {
        word: "السَّمِيعُ",
        meaningEnglish: "The All-Hearing",
        meaningUrdu: "سب کچھ سننے والا",
        quranText: "وَهُوَ السَّمِيعُ الْعَلِيمُ",
        transliteration: "Wa huwa as-sami'u al-'alim",
        surahName: "Al-Baqarah",
        reference: "2:137",
        quranEnglish: "And He is the Hearing, the Knowing.",
        quranUrdu: "اور وہی سب کچھ سننے والا، سب کچھ جاننے والا ہے"
      },
      {
        word: "يَسْمَعُونَ",
        meaningEnglish: "They hear / listen",
        meaningUrdu: "وہ سنتے ہیں",
        quranText: "لَهُمْ قُلُوبٌ لَّا يَفْقَهُونَ بِهَا وَلَهُمْ أَعْيُنٌ لَّا يُبْصِرُونَ بِهَا وَلَهُمْ آذَانٌ لَّا يَسْمَعُونَ بِهَا",
        transliteration: "Lahum qulubun la yafqahuna biha wa lahum a'yunun la yubsiruna biha wa lahum adhanun la yasma'una biha",
        surahName: "Al-A'raf",
        reference: "7:179",
        quranEnglish: "They have hearts with which they do not understand, eyes with which they do not see, and ears with which they do not hear.",
        quranUrdu: "ان کے دل ہیں جن سے وہ سمجھتے نہیں، ان کی آنکھیں ہیں جن سے وہ دیکھتے نہیں، اور ان کے کان ہیں جن سے وہ سنتے نہیں"
      },
      {
        word: "اسْمَعُوا",
        meaningEnglish: "Listen / Hear (command)",
        meaningUrdu: "سنو",
        quranText: "وَاسْمَعُوا وَأَطِيعُوا",
        transliteration: "Wasma'u wa ati'u",
        surahName: "At-Taghabun",
        reference: "64:16",
        quranEnglish: "And listen and obey.",
        quranUrdu: "اور سنو اور اطاعت کرو"
      }
    ]
  },
  {
    id: "sh-h-d",
    root: "ش ه د",
    rootEnglish: "To witness / Bear testimony / Presence",
    rootUrdu: "گواہی دینا / حاضر ہونا",
    examples: [
      {
        word: "شَهِدَ",
        meaningEnglish: "He bore witness",
        meaningUrdu: "اس نے گواہی دی",
        quranText: "شَهِدَ اللهُ أَنَّهُ لَا إِلَٰهَ إِلَّا هُوَ",
        transliteration: "Shahida Allahu annahu la ilaha illa huwa",
        surahName: "Ali 'Imran",
        reference: "3:18",
        quranEnglish: "Allah witnesses that there is no deity except Him.",
        quranUrdu: "اللہ نے گواہی دی کہ اس کے سوا کوئی معبود نہیں"
      },
      {
        word: "شَهِيدٌ",
        meaningEnglish: "The Witness / Martyr",
        meaningUrdu: "گواہ / حاضر",
        quranText: "وَاللهُ عَلَىٰ كُلِّ شَيْءٍ شَهِيدٌ",
        transliteration: "Wallahu 'ala kulli shay'in shahid",
        surahName: "Al-Mujadila",
        reference: "58:6",
        quranEnglish: "And Allah is, over all things, Witness.",
        quranUrdu: "اور اللہ ہر چیز پر گواہ ہے"
      },
      {
        word: "شُهَدَاءَ",
        meaningEnglish: "Witnesses (plural)",
        meaningUrdu: "گواہ (جمع)",
        quranText: "وَتَكُونُوا شُهَدَاءَ عَلَى النَّاسِ",
        transliteration: "Wa takunu shuhada'a 'ala an-nas",
        surahName: "Al-Hajj",
        reference: "22:78",
        quranEnglish: "And that you may be witnesses over the people.",
        quranUrdu: "اور تاکہ تم لوگوں پر گواہ بنو"
      },
      {
        word: "شَهَادَةٍ",
        meaningEnglish: "Testimony / Witnessing",
        meaningUrdu: "گواہی",
        quranText: "عَالِمُ الْغَيْبِ وَالشَّهَادَةِ",
        transliteration: "'Alimu al-ghaybi wash-shahadah",
        surahName: "Al-Hashr",
        reference: "59:22",
        quranEnglish: "Knower of the unseen and the witnessed.",
        quranUrdu: "غائب اور ظاہر کا جاننے والا"
      }
    ]
  },
  {
    id: "s-b-r",
    root: "ص ب ر",
    rootEnglish: "To be patient / Endure / Perseverance",
    rootUrdu: "صبر کرنا / برداشت کرنا",
    examples: [
      {
        word: "اصْبِرُوا",
        meaningEnglish: "Be patient (command)",
        meaningUrdu: "صبر کرو",
        quranText: "يَا أَيُّهَا الَّذِينَ آمَنُوا اصْبِرُوا وَصَابِرُوا",
        transliteration: "Ya ayyuha al-ladhina amanu isbiru wa sabiru",
        surahName: "Ali 'Imran",
        reference: "3:200",
        quranEnglish: "O you who have believed, persevere and endure.",
        quranUrdu: "اے ایمان والو! صبر کرو اور ثابت قدم رہو"
      },
      {
        word: "الصَّابِرِينَ",
        meaningEnglish: "The patient ones",
        meaningUrdu: "صبر کرنے والے",
        quranText: "إِنَّ اللهَ مَعَ الصَّابِرِينَ",
        transliteration: "Inna Allaha ma'a as-sabirin",
        surahName: "Al-Baqarah",
        reference: "2:153",
        quranEnglish: "Indeed, Allah is with the patient.",
        quranUrdu: "بیشک اللہ صبر کرنے والوں کے ساتھ ہے"
      },
      {
        word: "صَبْرٌ",
        meaningEnglish: "Patience / Endurance",
        meaningUrdu: "صبر",
        quranText: "فَصَبْرٌ جَمِيلٌ",
        transliteration: "Fasabrun jamil",
        surahName: "Yusuf",
        reference: "12:18",
        quranEnglish: "So patience is most fitting.",
        quranUrdu: "پس خوبصورت صبر ہی بہتر ہے"
      },
      {
        word: "صَبَرُوا",
        meaningEnglish: "They were patient",
        meaningUrdu: "انہوں نے صبر کیا",
        quranText: "وَجَزَاهُم بِمَا صَبَرُوا جَنَّةً وَحَرِيرًا",
        transliteration: "Wa jazahum bima sabaru jannatan wa harira",
        surahName: "Al-Insan",
        reference: "76:12",
        quranEnglish: "And will reward them for what they patiently endured with a garden and silk.",
        quranUrdu: "اور ان کے صبر کے بدلے انہیں جنت اور ریشمی لباس عطا فرمائے گا"
      }
    ]
  },
  {
    id: "s-d-q",
    root: "ص د ق",
    rootEnglish: "To speak truth / Be truthful / Charity",
    rootUrdu: "سچ بولنا / سچا ہونا / صدقہ",
    examples: [
      {
        word: "صَدَقَ",
        meaningEnglish: "He spoke truth",
        meaningUrdu: "اس نے سچ کہا",
        quranText: "قُلْ صَدَقَ اللهُ",
        transliteration: "Qul sadaqa Allah",
        surahName: "Ali 'Imran",
        reference: "3:95",
        quranEnglish: "Say, 'Allah has spoken the truth.'",
        quranUrdu: "فرما دیجیے: اللہ نے سچ فرمایا"
      },
      {
        word: "الصَّادِقِينَ",
        meaningEnglish: "The truthful ones",
        meaningUrdu: "سچے لوگ",
        quranText: "وَكُونُوا مَعَ الصَّادِقِينَ",
        transliteration: "Wa kunu ma'a as-sadiqin",
        surahName: "At-Tawbah",
        reference: "9:119",
        quranEnglish: "And be with those who are truthful.",
        quranUrdu: "اور سچوں کے ساتھ ہو جاؤ"
      },
      {
        word: "صَدَقَةً",
        meaningEnglish: "Charity / Alms",
        meaningUrdu: "صدقہ",
        quranText: "خُذْ مِنْ أَمْوَالِهِمْ صَدَقَةً تُطَهِّرُهُمْ",
        transliteration: "Khudh min amwalihim sadaqatan tutahhiruhum",
        surahName: "At-Tawbah",
        reference: "9:103",
        quranEnglish: "Take, [O Muhammad], from their wealth a charity by which you purify them.",
        quranUrdu: "ان کے مالوں میں سے صدقہ لیجیے جس کے ذریعے آپ انہیں پاک کریں"
      },
      {
        word: "صَدَّقَ",
        meaningEnglish: "He confirmed / Believed",
        meaningUrdu: "اس نے تصدیق کی",
        quranText: "وَصَدَّقَ بِالْحُسْنَىٰ",
        transliteration: "Wa saddaqa bil-husna",
        surahName: "Al-Layl",
        reference: "92:6",
        quranEnglish: "And believed in the best [reward].",
        quranUrdu: "اور اس نے بھلائی کی تصدیق کی"
      }
    ]
  },
  {
    id: "s-l-w",
    root: "ص ل و",
    rootEnglish: "Prayer / Supplication / Blessings",
    rootUrdu: "نماز / درود / دعائے خیر",
    examples: [
      {
        word: "الصَّلَاةَ",
        meaningEnglish: "The prayer",
        meaningUrdu: "نماز",
        quranText: "وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ",
        transliteration: "Wa aqimu as-salata wa atu az-zakah",
        surahName: "Al-Baqarah",
        reference: "2:43",
        quranEnglish: "And establish prayer and give zakah.",
        quranUrdu: "اور نماز قائم کرو اور زکوۃ دو"
      },
      {
        word: "يُصَلُّونَ",
        meaningEnglish: "They send blessings / Pray",
        meaningUrdu: "وہ درود / برکت بھیجتے ہیں",
        quranText: "إِنَّ اللهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ",
        transliteration: "Inna Allaha wa mala'ikatahu yusalluna 'ala an-nabiyy",
        surahName: "Al-Ahzab",
        reference: "33:56",
        quranEnglish: "Indeed, Allah and His angels send blessings upon the Prophet.",
        quranUrdu: "بیشک اللہ اور اس کے فرشتے نبی پر درود بھیجتے ہیں"
      },
      {
        word: "الْمُصَلِّينَ",
        meaningEnglish: "Those who pray",
        meaningUrdu: "نمازی / نماز پڑھنے والے",
        quranText: "إِلَّا الْمُصَلِّينَ",
        transliteration: "Illa al-musallin",
        surahName: "Al-Ma'arij",
        reference: "70:22",
        quranEnglish: "Except the worshippers.",
        quranUrdu: "مگر نماز پڑھنے والے"
      },
      {
        word: "صَلَوَاتٌ",
        meaningEnglish: "Prayers / Blessings",
        meaningUrdu: "صلوات / برکتیں",
        quranText: "أُولَٰئِكَ عَلَيْهِمْ صَلَوَاتٌ مِّن رَّبِّهِمْ وَرَحْمَةٌ",
        transliteration: "Ula'ika 'alayhim salawatun min rabbihim wa rahmah",
        surahName: "Al-Baqarah",
        reference: "2:157",
        quranEnglish: "Those are the ones upon whom are blessings from their Lord and mercy.",
        quranUrdu: "یہ وہ لوگ ہیں جن پر ان کے رب کی طرف سے درود اور رحمت ہے"
      }
    ]
  },
  {
    id: "dh-l-m",
    root: "ظ ل م",
    rootEnglish: "Wrongdoing / Darkness / Injustice",
    rootUrdu: "ظلم کرنا / اندھیرا / زیادتی",
    examples: [
      {
        word: "ظَلَمُوا",
        meaningEnglish: "They did wrong / oppressed",
        meaningUrdu: "انہوں نے ظلم کیا",
        quranText: "وَمَا ظَلَمُونَا وَلَٰكِن كَانُوا أَنفُسَهُمْ يَظْلِمُونَ",
        transliteration: "Wa ma zalamuna wa lakin kanu anfusahum yazlimun",
        surahName: "Al-Baqarah",
        reference: "2:57",
        quranEnglish: "And they did not harm Us, but they were harming themselves.",
        quranUrdu: "اور انہوں نے ہمارا کچھ نہیں بگاڑا بلکہ وہ اپنی ہی جانوں پر ظلم کرتے تھے"
      },
      {
        word: "الظَّالِمِينَ",
        meaningEnglish: "The wrongdoers / Oppressors",
        meaningUrdu: "ظالم لوگ",
        quranText: "وَاللهُ لَا يَهْدِي الْقَوْمَ الظَّالِمِينَ",
        transliteration: "Wallahu la yahdi al-qawma az-zalimin",
        surahName: "Al-Baqarah",
        reference: "2:258",
        quranEnglish: "And Allah does not guide the wrongdoing people.",
        quranUrdu: "اور اللہ ظالم قوم کو ہدایت نہیں دیتا"
      },
      {
        word: "ظُلُمَاتٍ",
        meaningEnglish: "Darknesses",
        meaningUrdu: "اندھیرے / تاریکیاں",
        quranText: "يُخْرِجُهُم مِّنَ الظُّلُمَاتِ إِلَى النُّورِ",
        transliteration: "Yukhrijuhum mina az-zulumati ila an-nur",
        surahName: "Al-Baqarah",
        reference: "2:257",
        quranEnglish: "He brings them out from darknesses into the light.",
        quranUrdu: "وہ انہیں اندھیروں سے نکال کر روشنی کی طرف لاتا ہے"
      },
      {
        word: "ظُلْمًا",
        meaningEnglish: "Injustice / Wrongdoing",
        meaningUrdu: "ظلم / زیادتی",
        quranText: "وَمَن يَفْعَلْ ذَٰلِكَ عُدْوَانًا وَظُلْمًا فَسَوْفَ نُصْلِيهِ نَارًا",
        transliteration: "Wa man yaf'al dhalika 'udwanan wa zulman fasawfa nuslihi naran",
        surahName: "An-Nisa",
        reference: "4:30",
        quranEnglish: "And whoever does that in aggression and injustice - We will drive him into a Fire.",
        quranUrdu: "اور جو کوئی سرکشی اور ظلم سے ایسا کرے گا تو ہم جلد اس کو آگ میں جھونک دیں گے"
      }
    ]
  },
  {
    id: "a-l-m",
    root: "ع ل م",
    rootEnglish: "To know / Knowledge / Scholar",
    rootUrdu: "جاننا / علم حاصل کرنا",
    examples: [
      {
        word: "عَلِيمٌ",
        meaningEnglish: "All-Knowing",
        meaningUrdu: "سب کچھ جاننے والا",
        quranText: "وَاللهُ بِكُلِّ شَيْءٍ عَلِيمٌ",
        transliteration: "Wallahu bikulli shay'in 'alim",
        surahName: "Al-Baqarah",
        reference: "2:282",
        quranEnglish: "And Allah is Knowing of all things.",
        quranUrdu: "اور اللہ ہر چیز کا علم رکھنے والا ہے"
      },
      {
        word: "يَعْلَمُونَ",
        meaningEnglish: "They know",
        meaningUrdu: "وہ جانتے ہیں",
        quranText: "وَاللهُ يَعْلَمُ وَأَنتُمْ لَا تَعْلَمُونَ",
        transliteration: "Wallahu ya'lamu wa antum la ta'lamun",
        surahName: "Al-Baqarah",
        reference: "2:216",
        quranEnglish: "And Allah knows, while you do not know.",
        quranUrdu: "اور اللہ جانتا ہے اور تم نہیں جانتے"
      },
      {
        word: "عِلْمٌ",
        meaningEnglish: "Knowledge",
        meaningUrdu: "علم",
        quranText: "وَقُل رَّبِّ زِدْنِي عِلْمًا",
        transliteration: "Wa qul rabbi zidni 'ilma",
        surahName: "Ta-Ha",
        reference: "20:114",
        quranEnglish: "And say, 'My Lord, increase me in knowledge.'",
        quranUrdu: "اور عرض کرو: اے میرے رب! میرے علم میں اضافہ فرما"
      },
      {
        word: "الْعَالَمِينَ",
        meaningEnglish: "The worlds / Creation",
        meaningUrdu: "تمام جہان / مخلوقات",
        quranText: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
        transliteration: "Alhamdu lillahi rabbi al-'alamin",
        surahName: "Al-Fatihah",
        reference: "1:2",
        quranEnglish: "[All] praise is [due] to Allah, Lord of the worlds.",
        quranUrdu: "سب تعریفیں اللہ کے لیے ہیں جو تمام جہانوں کا پروردگار ہے"
      }
    ]
  },
  {
    id: "a-m-l",
    root: "ع م ل",
    rootEnglish: "To work / Do deeds / Action",
    rootUrdu: "عمل کرنا / کام کرنا",
    examples: [
      {
        word: "عَمِلُوا",
        meaningEnglish: "They worked / did good",
        meaningUrdu: "انہوں نے عمل کیے",
        quranText: "الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ",
        transliteration: "Al-ladhina amanu wa 'amilu as-salihat",
        surahName: "Al-Baqarah",
        reference: "2:25",
        quranEnglish: "Those who believe and do righteous deeds.",
        quranUrdu: "جو لوگ ایمان لائے اور انہوں نے نیک اعمال کیے"
      },
      {
        word: "تَعْمَلُونَ",
        meaningEnglish: "You do / perform",
        meaningUrdu: "تم عمل کرتے ہو",
        quranText: "وَاللهُ بَصِيرٌ بِمَا تَعْمَلُونَ",
        transliteration: "Wallahu basirun bima ta'malun",
        surahName: "Al-Baqarah",
        reference: "2:265",
        quranEnglish: "And Allah is Seeing of what you do.",
        quranUrdu: "اور اللہ تمہارے کاموں کو خوب دیکھنے والا ہے"
      },
      {
        word: "عَمَلٌ",
        meaningEnglish: "Deed / Work",
        meaningUrdu: "عمل / کام",
        quranText: "إِنَّهُ عَمَلٌ غَيْرُ صَالِحٍ",
        transliteration: "Innahu 'amalun ghayru salih",
        surahName: "Hud",
        reference: "11:46",
        quranEnglish: "Indeed, it is a deed other than righteous.",
        quranUrdu: "بیشک یہ غیر صالح عمل ہے"
      },
      {
        word: "أَعْمَالُهُمْ",
        meaningEnglish: "Their deeds",
        meaningUrdu: "ان کے اعمال",
        quranText: "حَبِطَتْ أَعْمَالُهُمْ فِي الدُّنْيَا وَالْآخِرَةِ",
        transliteration: "Habitat a'maluhum fi ad-dunya wal-akhirah",
        surahName: "Ali 'Imran",
        reference: "3:22",
        quranEnglish: "Their deeds have become worthless in this world and the Hereafter.",
        quranUrdu: "ان کے اعمال دنیا اور آخرت میں ضائع ہو گئے"
      }
    ]
  },
  {
    id: "gh-f-r",
    root: "غ ف ر",
    rootEnglish: "To forgive / Cover / Pardoning",
    rootUrdu: "بخشنا / مغفرت کرنا / ڈھانپنا",
    examples: [
      {
        word: "غَفُورٌ",
        meaningEnglish: "Oft-Forgiving",
        meaningUrdu: "بہت بخشنے والا",
        quranText: "وَاللهُ غَفُورٌ رَّحِيمٌ",
        transliteration: "Wallahu ghafurun rahim",
        surahName: "Al-Baqarah",
        reference: "2:218",
        quranEnglish: "And Allah is Forgiving and Merciful.",
        quranUrdu: "اور اللہ بہت بخشنے والا، نہایت رحم فرمانے والا ہے"
      },
      {
        word: "اغْفِرْ",
        meaningEnglish: "Forgive (command)",
        meaningUrdu: "بخش دے",
        quranText: "رَبَّنَا اغْفِرْ لَنَا ذُنُوبَنَا",
        transliteration: "Rabbana ighfir lana dhunubana",
        surahName: "Ali 'Imran",
        reference: "3:147",
        quranEnglish: "Our Lord, forgive us our sins.",
        quranUrdu: "اے ہمارے رب! ہمارے گناہوں کو معاف فرما"
      },
      {
        word: "مَغْفِرَةٌ",
        meaningEnglish: "Forgiveness",
        meaningUrdu: "مغفرت / بخشش",
        quranText: "مَّغْفِرَةٌ مِّن رَّبِّكُمْ وَجَنَّةٌ",
        transliteration: "Maghfiratun min rabbikum wa jannah",
        surahName: "Ali 'Imran",
        reference: "3:133",
        quranEnglish: "Forgiveness from your Lord and a garden.",
        quranUrdu: "تمہارے رب کی طرف سے بخشش اور جنت"
      },
      {
        word: "يَغْفِرُ",
        meaningEnglish: "He forgives",
        meaningUrdu: "وہ بخشتا ہے",
        quranText: "إِنَّ اللهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا",
        transliteration: "Inna Allaha yaghfiru adh-dhunuba jami'a",
        surahName: "Az-Zumar",
        reference: "39:53",
        quranEnglish: "Indeed, Allah forgives all sins.",
        quranUrdu: "بیشک اللہ تمام گناہوں کو بخش دیتا ہے"
      }
    ]
  },
  {
    id: "f-a-l",
    root: "ف ع ل",
    rootEnglish: "To do / Perform / Action",
    rootUrdu: "کرنا / عمل میں لانا",
    examples: [
      {
        word: "فَعَلَ",
        meaningEnglish: "He did",
        meaningUrdu: "اس نے کیا",
        quranText: "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ",
        transliteration: "Alam tara kayfa fa'ala rabbuka bi-ashabi al-fil",
        surahName: "Al-Fil",
        reference: "105:1",
        quranEnglish: "Have you not considered how your Lord dealt with the companions of the elephant?",
        quranUrdu: "کیا آپ نے نہیں دیکھا کہ آپ کے رب نے ہاتھی والوں کے ساتھ کیا سلوک کیا؟"
      },
      {
        word: "تَفْعَلُوا",
        meaningEnglish: "You do (plural)",
        meaningUrdu: "تم کرتے ہو",
        quranText: "وَمَا تَفْعَلُوا مِنْ خَيْرٍ يَعْلَمْهُ اللهُ",
        transliteration: "Wa ma taf'alu min khayrin ya'lamhu Allah",
        surahName: "Al-Baqarah",
        reference: "2:197",
        quranEnglish: "And whatever good you do - Allah knows it.",
        quranUrdu: "اور تم جو بھی نیکی کرو گے اللہ اسے جان لے گا"
      },
      {
        word: "يَفْعَلُ",
        meaningEnglish: "He does",
        meaningUrdu: "وہ کرتا ہے",
        quranText: "إِنَّ اللهَ يَفْعَلُ مَا يُرِيدُ",
        transliteration: "Inna Allaha yaf'alu ma yurid",
        surahName: "Al-Hajj",
        reference: "22:14",
        quranEnglish: "Indeed, Allah does what He intends.",
        quranUrdu: "بیشک اللہ جو چاہتا ہے کرتا ہے"
      },
      {
        word: "فَاعِلُونَ",
        meaningEnglish: "Doers / Performers",
        meaningUrdu: "کرنے والے",
        quranText: "وَإِنَّا لَهُمْ لَفَاعِلُونَ",
        transliteration: "Wa inna lahum lafa'ilun",
        surahName: "Yusuf",
        reference: "12:61",
        quranEnglish: "And indeed, we will do it.",
        quranUrdu: "اور ہم یہ کام ضرور کرنے والے ہیں"
      }
    ]
  },
  {
    id: "q-d-r",
    root: "ق د ر",
    rootEnglish: "Power / Measure / Decree / Ability",
    rootUrdu: "قدرت رکھنا / اندازہ / تقدیر",
    examples: [
      {
        word: "قَدِيرٌ",
        meaningEnglish: "All-Powerful",
        meaningUrdu: "بہت قدرت رکھنے والا",
        quranText: "إِنَّ اللهَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
        transliteration: "Inna Allaha 'ala kulli shay'in qadir",
        surahName: "Al-Baqarah",
        reference: "2:20",
        quranEnglish: "Indeed, Allah is over all things competent.",
        quranUrdu: "بیشک اللہ ہر چیز پر قادر ہے"
      },
      {
        word: "قَدَرًا",
        meaningEnglish: "A decree / Measure",
        meaningUrdu: "ایک اندازہ / تقدیر",
        quranText: "وَكَانَ أَمْرُ اللهِ قَدَرًا مَّقْدُورًا",
        transliteration: "Wa kana amru Allahi qadaran maqdura",
        surahName: "Al-Ahzab",
        reference: "33:38",
        quranEnglish: "And the command of Allah is a decree determined.",
        quranUrdu: "اور اللہ کا حکم ایک طے شدہ تقدیر ہے"
      },
      {
        word: "قَدَرْنَا",
        meaningEnglish: "We decreed / determined",
        meaningUrdu: "ہم نے مقرر / اندازہ کیا",
        quranText: "فَقَدَرْنَا فَنِعْمَ الْقَادِرُونَ",
        transliteration: "Faqadarna fani'ma al-qadirun",
        surahName: "Al-Mursalat",
        reference: "77:23",
        quranEnglish: "So We have decreed, and how excellent are We to determine!",
        quranUrdu: "پس ہم نے اندازہ مقرر کیا، سو ہم کیا ہی اچھے قادر ہیں"
      },
      {
        word: "الْقَدْرِ",
        meaningEnglish: "Decree / Honor",
        meaningUrdu: "قدر / عزت",
        quranText: "إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ",
        transliteration: "Inna anzalnahu fi laylati al-qadr",
        surahName: "Al-Qadr",
        reference: "97:1",
        quranEnglish: "Indeed, We sent the Quran down during the Night of Decree.",
        quranUrdu: "بیشک ہم نے اس (قرآن) کو شبِ قدر میں نازل فرمایا"
      }
    ]
  },
  {
    id: "q-w-l",
    root: "ق و ل",
    rootEnglish: "To say / Speak / Word / Speech",
    rootUrdu: "کہنا / بات کرنا / قول",
    examples: [
      {
        word: "قَالَ",
        meaningEnglish: "He said",
        meaningUrdu: "اس نے کہا",
        quranText: "قَالَ إِنِّي أَعْلَمُ مَا لَا تَعْلَمُونَ",
        transliteration: "Qala inni a'lamu ma la ta'lamun",
        surahName: "Al-Baqarah",
        reference: "2:30",
        quranEnglish: "He said, 'Indeed, I know that which you do not know.'",
        quranUrdu: "فرمایا: میں وہ کچھ جانتا ہوں جو تم نہیں جانتے"
      },
      {
        word: "قُلْ",
        meaningEnglish: "Say (command)",
        meaningUrdu: "کہہ دیجیے",
        quranText: "قُلْ هُوَ اللهُ أَحَدٌ",
        transliteration: "Qul huwa Allahu ahad",
        surahName: "Al-Ikhlas",
        reference: "112:1",
        quranEnglish: "Say, 'He is Allah, [who is] One.'",
        quranUrdu: "فرما دیجیے: وہی اللہ ایک ہے"
      },
      {
        word: "يَقُولُ",
        meaningEnglish: "He/one says",
        meaningUrdu: "وہ کہتا ہے",
        quranText: "وَمِنَ النَّاسِ مَن يَقُولُ آمَنَّا بِاللهِ",
        transliteration: "Wa mina an-nasi man yaqulu amanna billah",
        surahName: "Al-Baqarah",
        reference: "2:8",
        quranEnglish: "And of the people are some who say, 'We believe in Allah.'",
        quranUrdu: "اور لوگوں میں سے کچھ ایسے بھی ہیں جو کہتے ہیں ہم اللہ پر ایمان لائے"
      },
      {
        word: "قَوْلًا",
        meaningEnglish: "A word / Speech",
        meaningUrdu: "ایک بات / قول",
        quranText: "وَقُولُوا قَوْلًا سَدِيدًا",
        transliteration: "Wa qulu qawlan sadida",
        surahName: "Al-Ahzab",
        reference: "33:70",
        quranEnglish: "And speak words of appropriate justice.",
        quranUrdu: "اور سیدھی سچی بات کہا کرو"
      }
    ]
  },
  {
    id: "k-t-b",
    root: "ك ت ب",
    rootEnglish: "To write / Book / Prescribe / Decree",
    rootUrdu: "لکھنا / کتاب / فرض کرنا",
    examples: [
      {
        word: "كُتِبَ",
        meaningEnglish: "It is prescribed / written",
        meaningUrdu: "فرض کیا گیا / لکھا گیا",
        quranText: "كُتِبَ عَلَيْكُمُ الصِّيَامُ",
        transliteration: "Kutiba 'alaykumu as-siyam",
        surahName: "Al-Baqarah",
        reference: "2:183",
        quranEnglish: "Decreed upon you is fasting.",
        quranUrdu: "تم پر روزے فرض کیے گئے ہیں"
      },
      {
        word: "الْكِتَابُ",
        meaningEnglish: "The Book",
        meaningUrdu: "کتاب",
        quranText: "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ",
        transliteration: "Dhalika al-kitabu la rayba fih",
        surahName: "Al-Baqarah",
        reference: "2:2",
        quranEnglish: "This is the Book about which there is no doubt.",
        quranUrdu: "یہ وہ عظیم کتاب ہے جس میں کوئی شک نہیں"
      },
      {
        word: "يَكْتُبُونَ",
        meaningEnglish: "They write",
        meaningUrdu: "وہ لکھتے ہیں",
        quranText: "فَوَيْلٌ لِّلَّذِينَ يَكْتُبُونَ الْكِتَابَ بِأَيْدِيهِمْ",
        transliteration: "Fawaylun lil-ladhina yaktubuna al-kitaba bi-aydihim",
        surahName: "Al-Baqarah",
        reference: "2:79",
        quranEnglish: "So woe to those who write the book with their hands.",
        quranUrdu: "پس ہلاکت ہے ان لوگوں کے لیے جو اپنے ہاتھوں سے کتاب لکھتے ہیں"
      },
      {
        word: "كَتَبَ",
        meaningEnglish: "He prescribed / wrote",
        meaningUrdu: "اس نے لازم کر لیا / لکھا",
        quranText: "كَتَبَ رَبُّكُمْ عَلَىٰ نَفْسِهِ الرَّحْمَةَ",
        transliteration: "Kataba rabbukum 'ala nafsihi ar-rahmah",
        surahName: "Al-An'am",
        reference: "6:54",
        quranEnglish: "Your Lord has decreed upon Himself mercy.",
        quranUrdu: "تمہارے رب نے اپنے ذمے رحمت لازم فرما لی ہے"
      }
    ]
  },
  {
    id: "k-f-r",
    root: "ك ف ر",
    rootEnglish: "To disbelieve / Deny / Cover / Ungrateful",
    rootUrdu: "انکار کرنا / کفر کرنا / ناشکری کرنا",
    examples: [
      {
        word: "كَفَرُوا",
        meaningEnglish: "They disbelieved",
        meaningUrdu: "انہوں نے انکار کیا",
        quranText: "إِنَّ الَّذِينَ كَفَرُوا سَوَاءٌ عَلَيْهِمْ",
        transliteration: "Inna al-ladhina kafaru sawa'un 'alayhim",
        surahName: "Al-Baqarah",
        reference: "2:6",
        quranEnglish: "Indeed, those who disbelieve - it is all the same for them.",
        quranUrdu: "بیشک جن لوگوں نے کفر کیا ان کے لیے برابر ہے"
      },
      {
        word: "الْكَافِرِينَ",
        meaningEnglish: "The disbelievers",
        meaningUrdu: "کافر / انکار کرنے والے",
        quranText: "وَاللهُ مُحِيطٌ بِالْكَافِرِينَ",
        transliteration: "Wallahu muhitun bil-kafirin",
        surahName: "Al-Baqarah",
        reference: "2:19",
        quranEnglish: "And Allah is encompassing the disbelievers.",
        quranUrdu: "اور اللہ کافروں کو گھیرنے والا ہے"
      },
      {
        word: "الْكُفْرَ",
        meaningEnglish: "Disbelief / Denial",
        meaningUrdu: "کفر / انکار",
        quranText: "وَمَن يَتَبَدَّلِ الْكُفْرَ بِالْإِيمَانِ فَقَدْ ضَلَّ سَوَاءَ السَّبِيلِ",
        transliteration: "Wa man yatabaddali al-kufra bil-imani faqad dalla sawa'a as-sabil",
        surahName: "Al-Baqarah",
        reference: "2:108",
        quranEnglish: "And whoever exchanges faith for disbelief has certainly strayed from the soundness of the way.",
        quranUrdu: "اور جو شخص ایمان کے بدلے کفر اختیار کرے تو وہ سیدھے راستے سے بھٹک گیا"
      },
      {
        word: "تَكْفُرُونَ",
        meaningEnglish: "You disbelieve / deny",
        meaningUrdu: "تم انکار کرتے ہو",
        quranText: "كَيْفَ تَكْفُرُونَ بِاللهِ وَكُنتُمْ أَمْوَاتًا فَأَحْيَاكُمْ",
        transliteration: "Kayfa takfuruna billahi wa kuntum amwatan fa-ahyakum",
        surahName: "Al-Baqarah",
        reference: "2:28",
        quranEnglish: "How can you disbelieve in Allah when you were lifeless and He brought you to life?",
        quranUrdu: "تم کس طرح اللہ کا انکار کرتے ہو حالانکہ تم مردہ تھے تو اس نے تمہیں زندگی دی"
      }
    ]
  },
  {
    id: "l-h-q",
    root: "ل ح ق",
    rootEnglish: "To overtake / Join / Reach",
    rootUrdu: "ملنا / جا ملنا / پہنچنا",
    examples: [
      {
        word: "يَلْحَقُوا",
        meaningEnglish: "They join / reach",
        meaningUrdu: "وہ ان سے ملیں",
        quranText: "بِالَّذِينَ لَمْ يَلْحَقُوا بِهِم مِّنْ خَلْفِهِمْ",
        transliteration: "Bil-ladhina lam yalhaqu bihim min khalfihim",
        surahName: "Ali 'Imran",
        reference: "3:170",
        quranEnglish: "For those who have not yet joined them from behind them.",
        quranUrdu: "ان لوگوں کے لیے جو ان کے پیچھے سے ابھی ان سے نہیں ملے"
      },
      {
        word: "أَلْحَقْنَا",
        meaningEnglish: "We joined / united",
        meaningUrdu: "ہم نے ملا دیا",
        quranText: "وَالَّذِينَ آمَنُوا وَاتَّبَعَتْهُمْ ذُرِّيَّتُهُم بِإِيمَانٍ أَلْحَقْنَا بِهِمْ ذُرِّيَّتَهُمْ",
        transliteration: "Wal-ladhina amanu wattaba'athum dhurriyyatuhum bi-imanin alhaqna bihim dhurriyyatahum",
        surahName: "At-Tur",
        reference: "52:21",
        quranEnglish: "And those who believed and whose descendants followed them in faith - We will join with them their descendants.",
        quranUrdu: "اور جو لوگ ایمان لائے اور ان کی اولاد نے ایمان کے ساتھ ان کی پیروی کی، ہم نے ان کی اولاد کو ان سے ملا دیا"
      },
      {
        word: "أَلْحِقْنِي",
        meaningEnglish: "Join me (command)",
        meaningUrdu: "مجھے ملا دے",
        quranText: "تَوَفَّنِي مُسْلِمًا وَأَلْحِقْنِي بِالصَّالِحِينَ",
        transliteration: "Tawaffani musliman wa alhiqni bis-salihin",
        surahName: "Yusuf",
        reference: "12:101",
        quranEnglish: "Cause me to die a Muslim and join me with the righteous.",
        quranUrdu: "مجھے اسلام پر موت دے اور مجھے نیک لوگوں کے ساتھ ملا دے"
      },
      {
        word: "يَلْحَقُوا",
        meaningEnglish: "They overtake / join",
        meaningUrdu: "وہ ملتے ہیں / پہنچتے ہیں",
        quranText: "وَآخَرِينَ مِنْهُمْ لَمَّا يَلْحَقُوا بِهِمْ",
        transliteration: "Wa akharina minhum lamma yalhaqu bihim",
        surahName: "Al-Jumu'ah",
        reference: "62:3",
        quranEnglish: "And [to] others among them who have not yet joined them.",
        quranUrdu: "اور ان میں سے ان دوسرے لوگوں کے لیے بھی جو ابھی ان سے نہیں ملے"
      }
    ]
  },
  {
    id: "n-z-l",
    root: "ن ز ل",
    rootEnglish: "To descend / Reveal / Send down / Lodging",
    rootUrdu: "نازل ہونا / اتارا جانا / اترنا",
    examples: [
      {
        word: "أَنزَلَ",
        meaningEnglish: "He revealed / sent down",
        meaningUrdu: "اس نے نازل فرمایا",
        quranText: "الَّذِي أَنزَلَ عَلَىٰ عَبْدِهِ الْكِتَابَ",
        transliteration: "Al-ladhi anzala 'ala 'abdihi al-kitab",
        surahName: "Al-Kahf",
        reference: "18:1",
        quranEnglish: "Who sent down upon His Servant the Book.",
        quranUrdu: "جس نے اپنے بندے پر کتاب نازل فرمائی"
      },
      {
        word: "نَزَّلْنَا",
        meaningEnglish: "We sent down in stages",
        meaningUrdu: "ہم نے نازل فرمایا",
        quranText: "إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ",
        transliteration: "Inna nahnu nazzalna adh-dhikra wa inna lahu lahafizun",
        surahName: "Al-Hijr",
        reference: "15:9",
        quranEnglish: "Indeed, it is We who sent down the Quran and indeed, We will be its guardian.",
        quranUrdu: "بیشک ہم نے ہی اس ذکر (قرآن) کو نازل فرمایا اور ہم ہی اس کی حفاظت کرنے والے ہیں"
      },
      {
        word: "مُنزَلًا",
        meaningEnglish: "A lodging / Landing place",
        meaningUrdu: "اتارنے کی جگہ / منزل",
        quranText: "وَقُل رَّبِّ أَنزِلْنِي مُنزَلًا مُّبَارَكًا",
        transliteration: "Wa qul rabbi anzilni munzalan mubaraka",
        surahName: "Al-Mu'minun",
        reference: "23:29",
        quranEnglish: "And say, 'My Lord, let me land at a blessed landing place.'",
        quranUrdu: "اور عرض کرو: اے میرے رب! مجھے برکت والی جگہ پر اتار"
      },
      {
        word: "يَنزِلُ",
        meaningEnglish: "It descends",
        meaningUrdu: "وہ اترتا ہے",
        quranText: "يَعْلَمُ مَا يَلِجُ فِي الْأَرْضِ وَمَا يَخْرُجُ مِنْهَا وَمَا يَنزِلُ مِنَ السَّمَاءِ",
        transliteration: "Ya'lamu ma yaliju fi al-ardi wa ma yakhruju minha wa ma yanzilu mina as-sama'",
        surahName: "Saba",
        reference: "34:2",
        quranEnglish: "He knows what penetrates into the earth and what emerges from it and what descends from the heaven.",
        quranUrdu: "وہ جانتا ہے جو کچھ زمین میں داخل ہوتا ہے اور جو اس سے نکلتا ہے اور جو آسمان سے اترتا ہے"
      }
    ]
  },
  {
    id: "n-a-m",
    root: "ن ع م",
    rootEnglish: "Blessing / Favor / Cattle / Comfort",
    rootUrdu: "نعمت / احسان / مویشی / آرام",
    examples: [
      {
        word: "أَنْعَمْتَ",
        meaningEnglish: "You bestowed favor",
        meaningUrdu: "تو نے انعام فرمایا",
        quranText: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ",
        transliteration: "Sirata al-ladhina an'amta 'alayhim",
        surahName: "Al-Fatihah",
        reference: "1:7",
        quranEnglish: "The path of those upon whom You have bestowed favor.",
        quranUrdu: "ان لوگوں کا راستہ جن پر تو نے انعام فرمایا"
      },
      {
        word: "نِعْمَةَ",
        meaningEnglish: "Blessing / Favor",
        meaningUrdu: "نعمت / احسان",
        quranText: "وَاذْكُرُوا نِعْمَةَ اللهِ عَلَيْكُمْ",
        transliteration: "Wadhkuru ni'mata Allahi 'alaykum",
        surahName: "Al-Baqarah",
        reference: "2:231",
        quranEnglish: "And remember the favor of Allah upon you.",
        quranUrdu: "اور اپنے پر اللہ کی نعمت کو یاد کرو"
      },
      {
        word: "الْأَنْعَامِ",
        meaningEnglish: "Cattle / Livestock",
        meaningUrdu: "مویشی / چوپائے",
        quranText: "زُيِّنَ لِلنَّاسِ حُبُّ الشَّهَوَاتِ مِنَ النِّسَاءِ وَالْبَنِينَ وَالْقَنَاطِيرِ الْمُقَنطَرَةِ مِنَ الذَّهَبِ وَالْفِضَّةِ وَالْخَيْلِ الْمُسَوَّمَةِ وَالْأَنْعَامِ",
        transliteration: "Zuyyina lin-nasi hubbu ash-shahawati mina an-nisa'i wal-banina wal-qanatiri al-muqantarati mina adh-dhahabi wal-fiddati wal-khayli al-musawwamati wal-an'am",
        surahName: "Ali 'Imran",
        reference: "3:14",
        quranEnglish: "Beautified for people is the love of that which they desire - of women and sons, heaped-up sums of gold and silver, fine branded horses, and cattle.",
        quranUrdu: "لوگوں کے لیے ان کی مرغوب چیزوں کی محبت کو آراستہ کر دیا گیا ہے یعنی عورتیں، بیٹے، سونے اور چاندی کے جمع کیے ہوئے ڈھیر، نشان لگے ہوئے گھوڑے اور مویشی"
      },
      {
        word: "نَعِيمٍ",
        meaningEnglish: "Delight / Bliss",
        meaningUrdu: "نعمتیں / آرام",
        quranText: "فِي جَنَّاتِ النَّعِيمِ",
        transliteration: "Fi jannati an-na'im",
        surahName: "Al-Waqi'ah",
        reference: "56:12",
        quranEnglish: "In the Gardens of Pleasure.",
        quranUrdu: "نعمتوں کے باغات میں"
      }
    ]
  },
  {
    id: "h-d-y",
    root: "ه د ي",
    rootEnglish: "To guide / Guidance / Gift",
    rootUrdu: "ہدایت دینا / سیدھا راستہ دکھانا",
    examples: [
      {
        word: "اهْدِنَا",
        meaningEnglish: "Guide us (command)",
        meaningUrdu: "ہمیں ہدایت دے",
        quranText: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
        transliteration: "Ihdina as-sirata al-mustaqim",
        surahName: "Al-Fatihah",
        reference: "1:6",
        quranEnglish: "Guide us to the straight path.",
        quranUrdu: "ہمیں سیدھے راستے کی ہدایت فرما"
      },
      {
        word: "هُدًى",
        meaningEnglish: "Guidance",
        meaningUrdu: "ہدایت",
        quranText: "هُدًى لِّلْمُتَّقِينَ",
        transliteration: "Hudan lil-muttaqin",
        surahName: "Al-Baqarah",
        reference: "2:2",
        quranEnglish: "Guidance for those conscious of Allah.",
        quranUrdu: "پرہیزگاروں کے لیے ہدایت ہے"
      },
      {
        word: "يَهْدِي",
        meaningEnglish: "He guides",
        meaningUrdu: "وہ ہدایت دیتا ہے",
        quranText: "وَاللهُ يَهْدِي مَن يَشَاءُ إِلَىٰ صِرَاطٍ مُّسْتَقِيمٍ",
        transliteration: "Wallahu yahdi man yasha'u ila siratin mustaqim",
        surahName: "Al-Baqarah",
        reference: "2:213",
        quranEnglish: "And Allah guides whom He wills to a straight path.",
        quranUrdu: "اور اللہ جسے چاہتا ہے سیدھے راستے کی طرف ہدایت دیتا ہے"
      },
      {
        word: "الْمُهْتَدُونَ",
        meaningEnglish: "The guided ones",
        meaningUrdu: "ہدایت پانے والے",
        quranText: "وَأُولَٰئِكَ هُمُ الْمُهْتَدُونَ",
        transliteration: "Wa ula'ika humu al-muhtadun",
        surahName: "Al-Baqarah",
        reference: "2:157",
        quranEnglish: "And it is those who are the [rightly] guided.",
        quranUrdu: "اور یہی لوگ ہدایت پانے والے ہیں"
      }
    ]
  },
  {
    id: "w-k-l",
    root: "و ك ل",
    rootEnglish: "To trust / Rely upon / Trustee / Advocate",
    rootUrdu: "توکل کرنا / بھروسہ کرنا / کارساز",
    examples: [
      {
        word: "وَكِيلًا",
        meaningEnglish: "Trustee / Disposer of affairs",
        meaningUrdu: "کارساز / محافظ",
        quranText: "وَكَفَىٰ بِاللهِ وَكِيلًا",
        transliteration: "Wa kafa billahi wakila",
        surahName: "An-Nisa",
        reference: "4:81",
        quranEnglish: "And sufficient is Allah as a Disposer of affairs.",
        quranUrdu: "اور اللہ کارساز کے طور پر کافی ہے"
      },
      {
        word: "تَوَكَّلْ",
        meaningEnglish: "Rely / Put trust (command)",
        meaningUrdu: "توکل کر / بھروسہ رکھ",
        quranText: "وَتَوَكَّلْ عَلَى اللهِ",
        transliteration: "Wa tawakkal 'ala Allah",
        surahName: "Al-Ahzab",
        reference: "33:3",
        quranEnglish: "And rely upon Allah.",
        quranUrdu: "اور اللہ پر بھروسہ رکھو"
      },
      {
        word: "يَتَوَكَّلْ",
        meaningEnglish: "He relies / trusts",
        meaningUrdu: "وہ توکل کرتا ہے",
        quranText: "وَمَن يَتَوَكَّلْ عَلَى اللهِ فَهُوَ حَسْبُهُ",
        transliteration: "Wa man yatawakkal 'ala Allahi fahuwa hasbuh",
        surahName: "At-Talaq",
        reference: "65:3",
        quranEnglish: "And whoever relies upon Allah - then He is sufficient for him.",
        quranUrdu: "اور جو شخص اللہ پر توکل کرتا ہے تو وہ اس کے لیے کافی ہے"
      },
      {
        word: "الْمُتَوَكِّلِينَ",
        meaningEnglish: "Those who rely / trust",
        meaningUrdu: "توکل کرنے والے",
        quranText: "إِنَّ اللهَ يُحِبُّ الْمُتَوَكِّلِينَ",
        transliteration: "Inna Allaha yuhibbu al-mutawakkilin",
        surahName: "Ali 'Imran",
        reference: "3:159",
        quranEnglish: "Indeed, Allah loves those who rely [upon Him].",
        quranUrdu: "بیشک اللہ توکل کرنے والوں سے محبت فرماتا ہے"
      }
    ]
  }
];

if (typeof QURANIC_ROOTS_DATA !== 'undefined') {
  QURANIC_ROOTS_DATA.push(...BATCH_5_ROOTS);
} else {
  var QURANIC_ROOTS_DATA = [...BATCH_5_ROOTS];
}
