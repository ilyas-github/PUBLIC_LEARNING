// ==========================================
// BATCH 6: ROOT ENTRIES - VERIFIED DATASET
// Corrected: removed 3 roots that duplicated Batch 4 (عقل، فكر، موت),
// fixed 3 word-field mismatches, 1 diacritic typo, 1 transliteration
// typo, and 1 garbled Urdu translation. See audit notes.
// 17 unique roots in this corrected batch.
// ==========================================

const BATCH_6_ROOTS = [
  {
    id: "a-b-d",
    root: "ع ب د",
    rootEnglish: "To worship / Serve / Slave / Servant",
    rootUrdu: "عبادت کرنا / بندگی کرنا / بندہ",
    examples: [
      {
        word: "نَعْبُدُ",
        meaningEnglish: "We worship",
        meaningUrdu: "ہم عبادت کرتے ہیں",
        quranText: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
        reference: "1:5",
        surahName: "Al-Fatiha",
        transliteration: "Iyyaaka na'budu wa iyyaaka nasta'een",
        quranEnglish: "It is You we worship and You we ask for help.",
        quranUrdu: "ہم صرف تیری ہی عبادت کرتے ہیں اور صرف تجھ سے ہی مدد چاہتے ہیں"
      },
      {
        word: "عَابِدُونَ",
        meaningEnglish: "Worshippers",
        meaningUrdu: "عبادت کرنے والے",
        quranText: "نَحْنُ لَهُ عَابِدُونَ",
        reference: "2:138",
        surahName: "Al-Baqarah",
        transliteration: "Nahnu lahoo 'aabidoon",
        quranEnglish: "And we are worshippers of Him.",
        quranUrdu: "اور ہم اسی کی عبادت کرنے والے ہیں"
      },
      {
        word: "عَبْدِهِ",
        meaningEnglish: "His servant",
        meaningUrdu: "اس کا بندہ",
        quranText: "الْحَمْدُ لِلَّهِ الَّذِي أَنزَلَ عَلَىٰ عَبْدِهِ الْكِتَابَ",
        reference: "18:1",
        surahName: "Al-Kahf",
        transliteration: "Alhamdu lillaahil-ladhee anzala 'alaa 'abdihil-kitaab",
        quranEnglish: "Praise be to Allah who sent down upon His servant the Book.",
        quranUrdu: "تمام تعریفیں اللہ کے لیے ہیں جس نے اپنے بندے پر کتاب نازل فرمائی"
      },
      {
        word: "عِبَادِي",
        meaningEnglish: "My servants",
        meaningUrdu: "میرے بندے",
        quranText: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ",
        reference: "2:186",
        surahName: "Al-Baqarah",
        transliteration: "Wa idhaa sa'alaka 'ibaadee 'annee fa-innee qareeb",
        quranEnglish: "And when My servants ask you concerning Me, indeed I am near.",
        quranUrdu: "اور جب میرے بندے آپ سے میرے بارے میں پوچھیں تو میں قریب ہوں"
      }
    ]
  },
  {
    id: "a-dh-b",
    root: "ع ذ ب",
    rootEnglish: "Punishment / Torment / Sweet water",
    rootUrdu: "عذاب دینا / سزا / میٹھا پانی",
    examples: [
      {
        word: "عَذَابٌ",
        meaningEnglish: "Punishment",
        meaningUrdu: "عذاب / سزا",
        quranText: "وَلَهُمْ عَذَابٌ عَظِيمٌ",
        reference: "2:7",
        surahName: "Al-Baqarah",
        transliteration: "Wa lahum 'adhaabun 'azeem",
        quranEnglish: "And for them is a great punishment.",
        quranUrdu: "اور ان کے لیے بڑا عذاب ہے"
      },
      {
        word: "يُعَذِّبُ",
        meaningEnglish: "He punishes",
        meaningUrdu: "وہ عذاب دیتا ہے",
        quranText: "يُعَذِّبُ مَن يَشَاءُ وَيَغْفِرُ لِمَن يَشَاءُ",
        reference: "5:40",
        surahName: "Al-Ma'idah",
        transliteration: "Yu'adh-dhibu may-yashaa'u wa yaghfiru limay-yashaa'",
        quranEnglish: "He punishes whom He wills and forgives whom He wills.",
        quranUrdu: "وہ جسے چاہتا ہے عذاب دیتا ہے اور جسے چاہتا ہے بخش دیتا ہے"
      },
      {
        word: "مُعَذِّبِينَ",
        meaningEnglish: "Punishers",
        meaningUrdu: "عذاب دینے والے",
        quranText: "وَمَا كُنَّا مُعَذِّبِينَ حَتَّىٰ نَبْعَثَ رَسُولًا",
        reference: "17:15",
        surahName: "Al-Isra",
        transliteration: "Wa maa kunnaa mu'adh-dhibeena hat-taa nab'atha rasoolaa",
        quranEnglish: "And We never punish until We send a messenger.",
        quranUrdu: "اور ہم اس وقت تک عذاب دینے والے نہیں جب تک کوئی رسول نہ بھیج دیں"
      },
      {
        word: "عَذْبٌ",
        meaningEnglish: "Sweet / Palatable water",
        meaningUrdu: "میٹھا / خوشگوار پانی",
        quranText: "هَٰذَا عَذْبٌ فُرَاتٌ سَائِغٌ شَرَابُهُ",
        reference: "35:12",
        surahName: "Fatir",
        transliteration: "Haadhaa 'adhbun furaatun saa'ighun sharaabuh",
        quranEnglish: "This one is sweet and fresh, pleasant to drink.",
        quranUrdu: "یہ میٹھا، خوشگوار اور پینے میں آسان ہے"
      }
    ]
  },
  {
    id: "a-z-z",
    root: "ع ز ز",
    rootEnglish: "Might / Honor / Power / Mighty",
    rootUrdu: "عزت / طاقت / غالب / زبردست",
    examples: [
      {
        word: "الْعَزِيزُ",
        meaningEnglish: "The All-Mighty",
        meaningUrdu: "غالب / زبردست",
        quranText: "إِنَّكَ أَنتَ الْعَزِيزُ الْحَكِيمُ",
        reference: "2:129",
        surahName: "Al-Baqarah",
        transliteration: "Innaka antal-'Azeezul-Hakeem",
        quranEnglish: "Indeed, You are the Exalted in Might, the Wise.",
        quranUrdu: "بیشک تو ہی غالب اور حکمت والا ہے"
      },
      {
        word: "العِزَّةُ",
        meaningEnglish: "Honor / Might",
        meaningUrdu: "عزت / غلبہ",
        quranText: "وَلِلَّهِ الْعِزَّةُ وَلِرَسُولِهِ وَلِلْمُؤْمِنِينَ",
        reference: "63:8",
        surahName: "Al-Munafiqun",
        transliteration: "Wa lillaahil-'izzatu wa lirasoolihee wa lil-mu'mineen",
        quranEnglish: "And to Allah belongs all honor, and to His Messenger, and to the believers.",
        quranUrdu: "اور عزت تو اللہ، اس کے رسول اور مومنوں ہی کے لیے ہے"
      },
      {
        word: "تُعِزُّ",
        meaningEnglish: "You honor / exalt",
        meaningUrdu: "تو عزت دیتا ہے",
        quranText: "تُعِزُّ مَن تَشَاءُ وَتُذِلُّ مَن تَشَاءُ",
        reference: "3:26",
        surahName: "Ali 'Imran",
        transliteration: "Tu'izzu may-tashaa'u wa tudhillu may-tashaa'",
        quranEnglish: "You honor whom You will and You humble whom You will.",
        quranUrdu: "تو جسے چاہتا ہے عزت دیتا ہے اور جسے چاہتا ہے ذلیل کرتا ہے"
      },
      {
        word: "أَعَزُّ",
        meaningEnglish: "Mightier / Stronger",
        meaningUrdu: "زیادہ طاقتور / معزز",
        quranText: "قَالَ يَا قَوْمِ أَرَهْطِي أَعَزُّ عَلَيْكُم مِّنَ اللهِ",
        reference: "11:92",
        surahName: "Hud",
        transliteration: "Qaala yaa qawmi arahtee a'azzu 'alaikum minallaah",
        quranEnglish: "He said, 'O my people, is my clan more respected by you than Allah?'",
        quranUrdu: "اس نے کہا: اے میری قوم! کیا میرا خاندان تمہارے نزدیک اللہ سے زیادہ معزز ہے؟"
      }
    ]
  },
  {
    id: "f-t-h",
    root: "ف ت ح",
    rootEnglish: "To open / Grant victory / Judge",
    rootUrdu: "کھولنا / فتح دینا / فیصلہ کرنا",
    examples: [
      {
        word: "فَتَحْنَا",
        meaningEnglish: "We opened / granted victory",
        meaningUrdu: "ہم نے کھولا / فتح دی",
        quranText: "إِنَّا فَتَحْنَا لَكَ فَتْحًا مُّبِينًا",
        reference: "48:1",
        surahName: "Al-Fath",
        transliteration: "Innaa fatahnaa laka fat-ham mubeenaa",
        quranEnglish: "Indeed, We have granted you a clear victory.",
        quranUrdu: "بیشک ہم نے آپ کو کھلی فتح عطا فرمائی"
      },
      {
        word: "مَفَاتِحُ",
        meaningEnglish: "Keys",
        meaningUrdu: "چابیاں / کنجیاں",
        quranText: "وَعِندَهُ مَفَاتِحُ الْغَيْبِ لَا يَعْلَمُهَا إِلَّا هُوَ",
        reference: "6:59",
        surahName: "Al-An'am",
        transliteration: "Wa 'indahoo mafaatihul-ghaibi laa ya'lamuhaa illaa Hoo",
        quranEnglish: "And with Him are the keys of the unseen; none knows them except Him.",
        quranUrdu: "اور اسی کے پاس غیب کی کنجیاں ہیں، جنہیں اس کے سوا کوئی نہیں جانتا"
      },
      {
        word: "يَفْتَحِ",
        meaningEnglish: "He opens / grants",
        meaningUrdu: "وہ کھولتا ہے / عنایت کرتا ہے",
        quranText: "مَّا يَفْتَحِ اللهُ لِلنَّاسِ مِن رَّحْمَةٍ فَلَا مُمْسِكَ لَهَا",
        reference: "35:2",
        surahName: "Fatir",
        transliteration: "Maa yaftahillaahu linnaasi mir-rahmatin falaa mumsika lahaa",
        quranEnglish: "Whatever mercy Allah opens for the people - none can withhold it.",
        quranUrdu: "اللہ لوگوں کے لیے جو رحمت کھول دے اسے کوئی روکنے والا نہیں"
      },
      {
        word: "الفَتْحُ",
        meaningEnglish: "The victory / Decision",
        meaningUrdu: "فتح / فیصلہ",
        quranText: "إِذَا جَاءَ نَصْرُ اللهِ وَالْفَتْحُ",
        reference: "110:1",
        surahName: "An-Nasr",
        transliteration: "Idhaa jaa'a nasrullaahi wal-fath",
        quranEnglish: "When the help of Allah has come and the victory.",
        quranUrdu: "جب اللہ کی مدد اور فتح آ جائے"
      }
    ]
  },
  {
    id: "h-k-m",
    root: "ح ك م",
    rootEnglish: "To judge / Wisdom / Command / Rule",
    rootUrdu: "فیصلہ کرنا / حکمت / حکم دینا",
    examples: [
      {
        word: "الْحَكِيمُ",
        meaningEnglish: "The All-Wise",
        meaningUrdu: "حکمت والا",
        quranText: "إِنَّكَ أَنتَ الْعَزِيزُ الْحَكِيمُ",
        reference: "2:129",
        surahName: "Al-Baqarah",
        transliteration: "Innaka antal-'Azeezul-Hakeem",
        quranEnglish: "Indeed, You are the Exalted in Might, the Wise.",
        quranUrdu: "بیشک تو ہی غالب اور حکمت والا ہے"
      },
      {
        word: "حَكَمًا",
        meaningEnglish: "A judge / Arbitrator",
        meaningUrdu: "منصف / فیصلہ کرنے والا",
        quranText: "أَفَغَيْرَ اللهِ أَبْتَغِي حَكَمًا",
        reference: "6:114",
        surahName: "Al-An'am",
        transliteration: "Afaghairallaahi abtaghee hakamaa",
        quranEnglish: "Then is it other than Allah I should seek as judge?",
        quranUrdu: "کیا میں اللہ کے سوا کسی اور کو منصف تلاش کروں؟"
      },
      {
        word: "الْحُكْمُ",
        meaningEnglish: "The judgment / Command",
        meaningUrdu: "حکم / فیصلہ",
        quranText: "إِنِ الْحُكْمُ إِلَّا لِلَّهِ",
        reference: "6:57",
        surahName: "Al-An'am",
        transliteration: "Inil-hukmu illaa lillaah",
        quranEnglish: "Legislation is not but for Allah.",
        quranUrdu: "حکم تو صرف اللہ ہی کے لیے ہے"
      },
      {
        word: "الْحِكْمَةَ",
        meaningEnglish: "The wisdom",
        meaningUrdu: "دانائی / حکمت",
        quranText: "يُؤْتِي الْحِكْمَةَ مَن يَشَاءُ",
        reference: "2:269",
        surahName: "Al-Baqarah",
        transliteration: "Yu'til-Hikmata may-yashaa'",
        quranEnglish: "He gives wisdom to whom He wills.",
        quranUrdu: "وہ جسے چاہتا ہے حکمت عطا فرماتا ہے"
      }
    ]
  },
  {
    id: "h-m-d",
    root: "ح م د",
    rootEnglish: "To praise / Praise / Commendation",
    rootUrdu: "تعریف کرنا / حمد و ثنا",
    examples: [
      {
        word: "الْحَمْدُ",
        meaningEnglish: "All praise",
        meaningUrdu: "سب تعریفیں",
        quranText: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
        reference: "1:2",
        surahName: "Al-Fatiha",
        transliteration: "Alhamdu lillaahi Rabbil-'Aalameen",
        quranEnglish: "[All] praise is [due] to Allah, Lord of the worlds.",
        quranUrdu: "سب تعریفیں اللہ کے لیے ہیں جو تمام جہانوں کا پروردگار ہے"
      },
      {
        word: "حَمِيدٌ",
        meaningEnglish: "Praiseworthy",
        meaningUrdu: "تعریف کے لائق",
        quranText: "وَاعْلَمُوا أَنَّ اللهَ غَنِيٌّ حَمِيدٌ",
        reference: "2:267",
        surahName: "Al-Baqarah",
        transliteration: "Wa'lamoo annallaaha Ghaniyyun Hameed",
        quranEnglish: "And know that Allah is Free of need and Praiseworthy.",
        quranUrdu: "اور جان لو کہ اللہ بے نیاز، تعریف کے لائق ہے"
      },
      {
        word: "مَحْمُودًا",
        meaningEnglish: "Praised / Praiseworthy station",
        meaningUrdu: "تعریف کیا ہوا / مقامِ محمود",
        quranText: "عَسَىٰ أَن يَبْعَثَكَ رَبُّكَ مَقَامًا مَّحْمُودًا",
        reference: "17:79",
        surahName: "Al-Isra",
        transliteration: "'Asaa ay-yab'athaka Rabbuka Maqaamam-Mahmoodaa",
        quranEnglish: "It may be that your Lord will raise you to a praised station.",
        quranUrdu: "قریب ہے کہ آپ کا رب آپ کو مقامِ محمود پر فائز فرمائے"
      },
      {
        word: "يُحْمَدُوا",
        meaningEnglish: "They be praised",
        meaningUrdu: "ان کی تعریف کی جائے",
        quranText: "وَيُحِبُّونَ أَن يُحْمَدُوا بِمَا لَمْ يَفْعَلُوا",
        reference: "3:188",
        surahName: "Ali 'Imran",
        transliteration: "Wa yuhibboona ay-yuhmadoo bimaa lam yaf'aloo",
        quranEnglish: "And love to be praised for what they did not do.",
        quranUrdu: "اور چاہتے ہیں کہ ان کاموں پر بھی ان کی تعریف کی جائے جو انہوں نے نہیں کیے"
      }
    ]
  },
  {
    id: "h-s-b",
    root: "ح س ب",
    rootEnglish: "To reckon / Count / Account / Sufficient",
    rootUrdu: "حساب کرنا / گننا / کافی ہونا",
    examples: [
      {
        word: "حَسْبُنَا",
        meaningEnglish: "Sufficient for us",
        meaningUrdu: "ہمیں کافی ہے",
        quranText: "وَقَالُوا حَسْبُنَا اللهُ وَنِعْمَ الْوَكِيلُ",
        reference: "3:173",
        surahName: "Ali 'Imran",
        transliteration: "Wa qaaloo hasbunallaahu wa ni'mal-Wakeel",
        quranEnglish: "And they said, 'Sufficient for us is Allah, and [He is] the best Disposer of affairs.'",
        quranUrdu: "اور انہوں نے کہا: ہمیں اللہ کافی ہے اور وہ بہترین کارساز ہے"
      },
      {
        word: "الْحِسَابِ",
        meaningEnglish: "The account / Reckoning",
        meaningUrdu: "حساب",
        quranText: "وَاللهُ سَرِيعُ الْحِسَابِ",
        reference: "2:202",
        surahName: "Al-Baqarah",
        transliteration: "Wallaahu Saree'ul-Hisaab",
        quranEnglish: "And Allah is swift in account.",
        quranUrdu: "اور اللہ جلد حساب لینے والا ہے"
      },
      {
        word: "يَحْسَبُونَ",
        meaningEnglish: "They think / consider",
        meaningUrdu: "وہ گمان کرتے ہیں",
        quranText: "وَيَحْسَبُونَ أَنَّهُم مُّهْتَدُونَ",
        reference: "7:30",
        surahName: "Al-A'raf",
        transliteration: "Wa yahsaboona annahum muhtadoon",
        quranEnglish: "While they think that they are guided.",
        quranUrdu: "اور وہ گمان کرتے ہیں کہ وہ ہدایت پر ہیں"
      },
      {
        word: "حَسِيبًا",
        meaningEnglish: "Reckoner / Takes account",
        meaningUrdu: "حساب لینے والا",
        quranText: "وَكَفَىٰ بِاللهِ حَسِيبًا",
        reference: "4:6",
        surahName: "An-Nisa",
        transliteration: "Wa kafaa bil-laahi Haseebaa",
        quranEnglish: "And sufficient is Allah as a Reckoner.",
        quranUrdu: "اور اللہ حساب لینے کے لیے کافی ہے"
      }
    ]
  },
  {
    id: "j-h-d",
    root: "ج ه د",
    rootEnglish: "To strive / Struggle / Endeavor",
    rootUrdu: "کوشش کرنا / جہاد کرنا",
    examples: [
      {
        word: "جَاهَدُوا",
        meaningEnglish: "They strove / struggled",
        meaningUrdu: "انہوں نے جہاد / کوشش کی",
        quranText: "وَالَّذِينَ آمَنُوا وَهَاجَرُوا وَجَاهَدُوا فِي سَبِيلِ اللهِ",
        reference: "8:74",
        surahName: "Al-Anfal",
        transliteration: "Wal-ladheena aamanoo wa haajaroo wa jaahadoo fee sabeelillaah",
        quranEnglish: "And those who have believed and emigrated and strove in the cause of Allah.",
        quranUrdu: "اور جو لوگ ایمان لائے، انہوں نے ہجرت کی اور اللہ کی راہ میں جہاد کیا"
      },
      {
        word: "جَاهِدِ",
        meaningEnglish: "Strive (command)",
        meaningUrdu: "جہاد کرو / کوشش کرو",
        quranText: "يَا أَيُّهَا النَّبِيُّ جَاهِدِ الْكُفَّارَ وَالْمُنَافِقِينَ",
        reference: "9:73",
        surahName: "At-Tawbah",
        transliteration: "Yaa ayyuhan-Nabiyyu jaahidil-kuffaara wal-munafiqeen",
        quranEnglish: "O Prophet, strive against the disbelievers and the hypocrites.",
        quranUrdu: "اے نبی! کافروں اور منافقوں کے خلاف جہاد کیجیے"
      },
      {
        word: "جُهْدَ",
        meaningEnglish: "Utmost oaths / Endeavor",
        meaningUrdu: "پختہ / کڑی قسمیں",
        quranText: "وَأَقْسَمُوا بِاللهِ جُهْدَ أَيْمَانِهِمْ",
        reference: "6:109",
        surahName: "Al-An'am",
        transliteration: "Wa aqsamoo bil-laahi juhda aimaanihim",
        quranEnglish: "And they swear by Allah their strongest oaths.",
        quranUrdu: "اور انہوں نے اللہ کی بڑی پختہ قسمیں کھائیں"
      },
      {
        word: "الْمُجَاهِدِينَ",
        meaningEnglish: "Those who strive",
        meaningUrdu: "جہاد کرنے والے",
        quranText: "وَفَضَّلَ اللهُ الْمُجَاهِدِينَ عَلَى الْقَاعِدِينَ أَجْرًا عَظِيمًا",
        reference: "4:95",
        surahName: "An-Nisa",
        transliteration: "Wa faddalallaahul-mujaahideena 'alal-qaa'ideena ajran 'azeemaa",
        quranEnglish: "And Allah has preferred the mujahideen over those who remain behind with a great reward.",
        quranUrdu: "اور اللہ نے بیٹھ رہنے والوں کے مقابلے میں جہاد کرنے والوں کو بڑا اجر عطا فرمایا"
      }
    ]
  },
  {
    id: "kh-f-y",
    root: "خ ف ي",
    rootEnglish: "To hide / Conceal / Unseen",
    rootUrdu: "چھپانا / پوشیدہ ہونا",
    examples: [
      {
        word: "يَخْفَىٰ",
        meaningEnglish: "Is hidden",
        meaningUrdu: "چھپا ہوا ہے",
        quranText: "إِنَّ اللهَ لَا يَخْفَىٰ عَلَيْهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ",
        reference: "3:5",
        surahName: "Ali 'Imran",
        transliteration: "Innallaaha laa yakhfaa 'alaihi shai'un fil-ardi wa laa fis-samaa'",
        quranEnglish: "Indeed, from Allah nothing is hidden in the earth or in the heaven.",
        quranUrdu: "بیشک اللہ سے زمین اور آسمان میں کوئی چیز پوشیدہ نہیں"
      },
      {
        word: "تُخْفُوا",
        meaningEnglish: "You conceal / hide",
        meaningUrdu: "تم چھپاتے ہو",
        quranText: "قُلْ إِن تُخْفُوا مَا فِي صُدُورِكُمْ أَوْ تُبْدُوهُ يَعْلَمْهُ اللهُ",
        reference: "3:29",
        surahName: "Ali 'Imran",
        transliteration: "Qul in tukhfoo maa fee sudoorikum aw tubdoohu ya'lamhullaah",
        quranEnglish: "Say, 'Whether you conceal what is in your breasts or reveal it, Allah knows it.'",
        quranUrdu: "فرما دیجیے: اگر تم اس کو چھپاؤ جو تمہارے سینوں میں ہے یا ظاہر کرو، اللہ اسے جانتا ہے"
      },
      {
        word: "خُفْيَةً",
        meaningEnglish: "In secret / Privately",
        meaningUrdu: "پوشیدہ طور پر / چپکے سے",
        quranText: "ادْعُوا رَبَّكُمْ تَضَرُّعًا وَخُفْيَةً",
        reference: "7:55",
        surahName: "Al-A'raf",
        transliteration: "Ud'oo Rabbakum tadarru'aw-wa khufyah",
        quranEnglish: "Call upon your Lord in humility and privately.",
        quranUrdu: "اپنے رب سے عاجزی سے اور چپکے سے دعا کرو"
      },
      {
        word: "خَفِيًّا",
        meaningEnglish: "Secret / Hidden call",
        meaningUrdu: "پوشیدہ / آہستہ",
        quranText: "إِذْ نَادَىٰ رَبَّهُ نِدَاءً خَفِيًّا",
        reference: "19:3",
        surahName: "Maryam",
        transliteration: "Idh naadaa Rabbahoo nidaa'an khafiyyaa",
        quranEnglish: "When he called to his Lord a private call.",
        quranUrdu: "جب انہوں نے اپنے رب کو آہستہ آواز سے پکارا"
      }
    ]
  },
  {
    id: "kh-w-f",
    root: "خ و ف",
    rootEnglish: "Fear / Dread / Danger",
    rootUrdu: "خوف / ڈر",
    examples: [
      {
        word: "خَوْفٌ",
        meaningEnglish: "Fear",
        meaningUrdu: "خوف / ڈر",
        quranText: "فَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ",
        reference: "2:38",
        surahName: "Al-Baqarah",
        transliteration: "Falaa khawfun 'alaihim wa laa hum yahzanoon",
        quranEnglish: "There will be no fear concerning them, nor shall they grieve.",
        quranUrdu: "تو ان پر نہ کوئی خوف ہو گا اور نہ وہ غمگین ہوں گے"
      },
      {
        word: "تَخَافُوا",
        meaningEnglish: "You fear",
        meaningUrdu: "تم ڈرتے ہو",
        quranText: "أَلَّا تَخَافُوا وَلَا تَحْزَنُوا",
        reference: "41:30",
        surahName: "Fussilat",
        transliteration: "Allaa takhaafoo wa laa tahzanoo",
        quranEnglish: "Do not fear and do not grieve.",
        quranUrdu: "اور تم نہ ڈرو اور نہ غم کرو"
      },
      {
        word: "يَخَافُونَ",
        meaningEnglish: "They fear",
        meaningUrdu: "وہ ڈرتے ہیں",
        quranText: "يَخَافُونَ رَبَّهُم مِّن فَوْقِهِمْ",
        reference: "16:50",
        surahName: "An-Nahl",
        transliteration: "Yakhaafoona Rabbahum min fawqihim",
        quranEnglish: "They fear their Lord above them.",
        quranUrdu: "وہ اپنے رب سے ڈرتے ہیں جو ان کے اوپر ہے"
      },
      {
        word: "خِيفَةً",
        meaningEnglish: "Apprehension / Fear",
        meaningUrdu: "خوف / ڈر",
        quranText: "فَأَوْجَسَ فِي نَفْسِهِ خِيفَةً مُّوسَىٰ",
        reference: "20:67",
        surahName: "Taha",
        transliteration: "Fa-awjasa fee nafsihee kheefatam-Moosaa",
        quranEnglish: "And Musa sensed within himself apprehension.",
        quranUrdu: "تو موسیٰ نے اپنے دل میں خوف محسوس کیا"
      }
    ]
  },
  {
    id: "m-l-k",
    root: "م ل ك",
    rootEnglish: "To possess / King / Ownership / Angel",
    rootUrdu: "مالک ہونا / بادشاہ / فرشتہ",
    examples: [
      {
        word: "مَالِكِ",
        meaningEnglish: "Master / Owner",
        meaningUrdu: "مالک",
        quranText: "مَالِكِ يَوْمِ الدِّينِ",
        reference: "1:4",
        surahName: "Al-Fatiha",
        transliteration: "Maaliki Yawmid-Deen",
        quranEnglish: "Sovereign of the Day of Recompense.",
        quranUrdu: "جزا کے دن کا مالک"
      },
      {
        word: "الْمَلِكُ",
        meaningEnglish: "The Sovereign / King",
        meaningUrdu: "بادشاہ",
        quranText: "فَتَعَالَى اللهُ الْمَلِكُ الْحَقُّ",
        reference: "20:114",
        surahName: "Taha",
        transliteration: "Fa-ta'aalallaahul-Malikul-Haqq",
        quranEnglish: "So high [above all] is Allah, the Sovereign, the Truth.",
        quranUrdu: "پس بلند برتر ہے اللہ جو سچا بادشاہ ہے"
      },
      {
        word: "مَلَائِكَةِ",
        meaningEnglish: "Angels",
        meaningUrdu: "فرشتے",
        quranText: "آمَنَ الرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ مِن رَّبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللهِ وَمَلَائِكَتِهِ",
        reference: "2:285",
        surahName: "Al-Baqarah",
        transliteration: "Aamanar-Rasoolu bimaa unzila ilaihi mir-Rabbihee wal-Mu'minoon, kullun aamana billaahi wa malaa'ikatihee",
        quranEnglish: "The Messenger has believed in what was revealed to him from his Lord, and [so have] the believers. All of them have believed in Allah and His angels.",
        quranUrdu: "رسول اس پر ایمان لائے جو ان کے رب کی طرف سے ان پر نازل ہوا اور مومنین بھی، سب اللہ اور اس کے فرشتوں پر ایمان لائے"
      },
      {
        word: "يَمْلِكُونَ",
        meaningEnglish: "They possess / control",
        meaningUrdu: "وہ مالک ہیں / اختیار رکھتے ہیں",
        quranText: "قُلِ ادْعُوا الَّذِينَ زَعَمْتُم مِّن دُونِهِ فَلَا يَمْلِكُونَ كَشْفَ الضُّرِّ عَنكُمْ",
        reference: "17:56",
        surahName: "Al-Isra",
        transliteration: "Qulid'ul-ladheena za'amtum min doonihee falaa yamlikoona kashfad-durri 'ankum",
        quranEnglish: "Say, 'Call upon those you have claimed besides Him, for they do not possess the ability to remove adversity from you.'",
        quranUrdu: "فرما دیجیے: انہیں پکارو جنہیں تم اس کے سوا (معبود) گمان کرتے ہو، وہ تم سے تکلیف دور کرنے کا اختیار نہیں رکھتے"
      }
    ]
  },
  {
    id: "r-z-q",
    root: "ر ز ق",
    rootEnglish: "Provision / Sustenance / To provide",
    rootUrdu: "رزق دینا / روزی / روزی کا سامان",
    examples: [
      {
        word: "رَزَقْنَاهُمْ",
        meaningEnglish: "We provided them",
        meaningUrdu: "ہم نے انہیں رزق دیا",
        quranText: "وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ",
        reference: "2:3",
        surahName: "Al-Baqarah",
        transliteration: "Wa mimmaa razaqnaahum yunfiqoon",
        quranEnglish: "And spend out of what We have provided them.",
        quranUrdu: "اور جو کچھ ہم نے انہیں رزق دیا اس میں سے خرچ کرتے ہیں"
      },
      {
        word: "الرَّزَّاقُ",
        meaningEnglish: "The Provider",
        meaningUrdu: "بہت رزق دینے والا",
        quranText: "إِنَّ اللهَ هُوَ الرَّزَّاقُ ذُو الْقُوَّةِ الْمَتِينُ",
        reference: "51:58",
        surahName: "Adh-Dhariyat",
        transliteration: "Innallaaha Huwar-Razzaaqu Dhul-Quwwatil-Mateen",
        quranEnglish: "Indeed, it is Allah who is the Continual Provider, the possessor of strength, the Firm.",
        quranUrdu: "بیشک اللہ ہی بڑا رزق دینے والا، صاحبِ قوت اور زبردست ہے"
      },
      {
        word: "رِزْقٌ",
        meaningEnglish: "Provision / Sustenance",
        meaningUrdu: "رزق / روزی",
        quranText: "كُلُوا وَاشْرَبُوا مِن رِّزْقِ اللهِ",
        reference: "2:60",
        surahName: "Al-Baqarah",
        transliteration: "Kuloo washraboo mir-rizqillaah",
        quranEnglish: "Eat and drink from the provision of Allah.",
        quranUrdu: "اللہ کے رزق میں سے کھاؤ اور پیو"
      },
      {
        word: "يَرْزُقُ",
        meaningEnglish: "He provides",
        meaningUrdu: "وہ رزق دیتا ہے",
        quranText: "وَاللهُ يَرْزُقُ مَن يَشَاءُ بِغَيْرِ حِسَابٍ",
        reference: "2:212",
        surahName: "Al-Baqarah",
        transliteration: "Wallaahu yarzuqu may-yashaa'u bighairi hisaab",
        quranEnglish: "And Allah gives provision to whom He wills without account.",
        quranUrdu: "اور اللہ جسے چاہتا ہے بغیر حساب کے رزق دیتا ہے"
      }
    ]
  },
  {
    id: "sh-k-r",
    root: "ش ك ر",
    rootEnglish: "To thank / Be grateful / Gratitude",
    rootUrdu: "شکر ادا کرنا / شکر گزاری",
    examples: [
      {
        word: "اشْكُرُوا",
        meaningEnglish: "Be grateful / Thank (command)",
        meaningUrdu: "شکر ادا کرو",
        quranText: "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ",
        reference: "2:152",
        surahName: "Al-Baqarah",
        transliteration: "Fadhkuroonee adhkurkum washkuroo lee wa laa takfuroon",
        quranEnglish: "So remember Me; I will remember you. And be grateful to Me and do not deny Me.",
        quranUrdu: "پس تم مجھے یاد کرو، میں تمہیں یاد رکھوں گا، اور میرا شکر ادا کرو اور میری ناشکری نہ کرو"
      },
      {
        word: "الشَّاكِرِينَ",
        meaningEnglish: "The grateful ones",
        meaningUrdu: "شکر کرنے والے",
        quranText: "وَسَيَجْزِي اللهُ الشَّاكِرِينَ",
        reference: "3:144",
        surahName: "Ali 'Imran",
        transliteration: "Wa sayajzillaahush-shaakireen",
        quranEnglish: "And Allah will reward the grateful.",
        quranUrdu: "اور اللہ عنقریب شکر گزاروں کو جزا دے گا"
      },
      {
        word: "شَكُورٌ",
        meaningEnglish: "Appreciative / Grateful",
        meaningUrdu: "قدردان / شکر قبول کرنے والا",
        quranText: "إِنَّ رَبَّنَا لَغَفُورٌ شَكُورٌ",
        reference: "35:34",
        surahName: "Fatir",
        transliteration: "Inna Rabbanaa la-Ghafoorun Shakoor",
        quranEnglish: "Indeed, our Lord is Forgiving and Appreciative.",
        quranUrdu: "بیشک ہمارا رب بہت بخشنے والا، بڑا قدردان ہے"
      },
      {
        word: "شَكَرْتُمْ",
        meaningEnglish: "You are grateful",
        meaningUrdu: "تم شکر کرو",
        quranText: "لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ",
        reference: "14:7",
        surahName: "Ibrahim",
        transliteration: "La'in shakartum la-azeedannakum",
        quranEnglish: "If you are grateful, I will surely increase you.",
        quranUrdu: "اگر تم شکر کرو گے تو میں تمہیں ضرور زیادہ دوں گا"
      }
    ]
  },
  {
    id: "s-l-m",
    root: "س ل م",
    rootEnglish: "Peace / Safety / Islam / Submission",
    rootUrdu: "سلامتی / امن / اسلام / اطاعت",
    examples: [
      {
        word: "السَّلَامُ",
        meaningEnglish: "Peace / The Perfection",
        meaningUrdu: "سلامتی / امن",
        quranText: "وَاللهُ يَدْعُو إِلَىٰ دَارِ السَّلَامِ",
        reference: "10:25",
        surahName: "Yunus",
        transliteration: "Wallaahu yad'oo ilaa Daaris-Salaam",
        quranEnglish: "And Allah invites to the Home of Peace.",
        quranUrdu: "اور اللہ سلامتی والے گھر کی طرف بلاتا ہے"
      },
      {
        word: "مُسْلِمَيْنِ",
        meaningEnglish: "Two submitting ones (dual - Ibrahim and Isma'il)",
        meaningUrdu: "دو فرمانبردار (ابراہیم اور اسماعیل)",
        quranText: "رَبَّنَا وَاجْعَلْنَا مُسْلِمَيْنِ لَكَ",
        reference: "2:128",
        surahName: "Al-Baqarah",
        transliteration: "Rabbanaa waj'alnaa muslimaini laka",
        quranEnglish: "Our Lord, and make us Muslims [submissive] to You.",
        quranUrdu: "اے ہمارے رب! اور ہمیں اپنے حضور فرمانبردار بنا"
      },
      {
        word: "سَلَّمْتُم",
        meaningEnglish: "You pay / submit in safety",
        meaningUrdu: "تم نے سپرد کر دیا / ادا کیا",
        quranText: "إِذَا سَلَّمْتُم مَّا آتَيْتُم بِالْمَعْرُوفِ",
        reference: "2:233",
        surahName: "Al-Baqarah",
        transliteration: "Idhaa sallamtum maa aataitum bil-ma'roof",
        quranEnglish: "When you pay what you give according to acceptable terms.",
        quranUrdu: "جب تم دستور کے مطابق جو دینا ہے ادا کر دو"
      },
      {
        word: "سَلِيمٍ",
        meaningEnglish: "Sound / Pure heart",
        meaningUrdu: "سلامتی والا / پاک دل",
        quranText: "إِلَّا مَنْ أَتَى اللهَ بِقَلْبٍ سَلِيمٍ",
        reference: "26:89",
        surahName: "Ash-Shu'ara",
        transliteration: "Illaa man atallaaha bi-qalbin saleem",
        quranEnglish: "But only one who comes to Allah with a sound heart.",
        quranUrdu: "سوائے اس کے جو اللہ کے پاس پاک دل لے کر آیا"
      }
    ]
  },
  {
    id: "t-b-a",
    root: "ت ب ع",
    rootEnglish: "To follow / Pursue / Obedience",
    rootUrdu: "پیروی کرنا / پیچھے چلنا",
    examples: [
      {
        word: "اتَّبِعُوا",
        meaningEnglish: "Follow (command)",
        meaningUrdu: "پیروی کرو",
        quranText: "اتَّبِعُوا مَا أُنزِلَ إِلَيْكُم مِّن رَّبِّكُمْ",
        reference: "7:3",
        surahName: "Al-A'raf",
        transliteration: "Ittabi'oo maa unzila ilaikum mir-Rabbikum",
        quranEnglish: "Follow what has been revealed to you from your Lord.",
        quranUrdu: "اس کی پیروی کرو جو تمہارے رب کی طرف سے تم پر نازل کیا گیا"
      },
      {
        word: "يَتَّبِعُونَ",
        meaningEnglish: "They follow",
        meaningUrdu: "وہ پیروی کرتے ہیں",
        quranText: "الَّذِينَ يَتَّبِعُونَ الرَّسُولَ النَّبِيَّ الْأُمِّيَّ",
        reference: "7:157",
        surahName: "Al-A'raf",
        transliteration: "Al-ladheena yattabi'oonar-Rasoolan-Nabiyyal-Ummiyya",
        quranEnglish: "Those who follow the Messenger, the unlettered prophet.",
        quranUrdu: "جو لوگ اس امی نبی رسول کی پیروی کرتے ہیں"
      },
      {
        word: "اتَّبَعُوا",
        meaningEnglish: "They followed",
        meaningUrdu: "انہوں نے پیروی کی",
        quranText: "وَاتَّبَعُوا مَا تَتْلُو الشَّيَاطِينُ",
        reference: "2:102",
        surahName: "Al-Baqarah",
        transliteration: "Wattaba'oo maa tatlush-shayaateen",
        quranEnglish: "And they followed what the devils recited.",
        quranUrdu: "اور وہ اس چیز کے پیچھے لگ گئے جسے شیاطین پڑھتے تھے"
      },
      {
        word: "تَابِعٍ",
        meaningEnglish: "A follower",
        meaningUrdu: "پیروی کرنے والا",
        quranText: "وَمَا أَنْتَ بِتَابِعٍ قِبْلَتَهُمْ",
        reference: "2:145",
        surahName: "Al-Baqarah",
        transliteration: "Wa maa anta bi-taabi'in qiblatahum",
        quranEnglish: "Nor are you a follower of their qiblah.",
        quranUrdu: "اور نہ آپ ان کے قبلے کی پیروی کرنے والے ہیں"
      }
    ]
  },
  {
    id: "w-l-y",
    root: "و ل ي",
    rootEnglish: "Protector / Guardian / Nearness / Turn towards",
    rootUrdu: "سرپرست / دوست / قریب ہونا / متوجہ ہونا",
    examples: [
      {
        word: "وَلِيٌّ",
        meaningEnglish: "Protector / Guardian",
        meaningUrdu: "مددگار / دوست",
        quranText: "اللهُ وَلِيُّ الَّذِينَ آمَنُوا",
        reference: "2:257",
        surahName: "Al-Baqarah",
        transliteration: "Allaahu Waliyyul-ladheena aamanoo",
        quranEnglish: "Allah is the Ally of those who believe.",
        quranUrdu: "اللہ ایمان والوں کا کارساز و مددگار ہے"
      },
      {
        word: "أَوْلِيَاءُ",
        meaningEnglish: "Allies / Friends",
        meaningUrdu: "دوست / سرپرست (جمع)",
        quranText: "أَلَا إِنَّ أَوْلِيَاءَ اللهِ لَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ",
        reference: "10:62",
        surahName: "Yunus",
        transliteration: "Alaa inna awliyaa'allaahi laa khawfun 'alaihim wa laa hum yahzanoon",
        quranEnglish: "Unquestionably, for the allies of Allah there will be no fear concerning them, nor will they grieve.",
        quranUrdu: "خبردار! بیشک اللہ کے دوستوں پر نہ کوئی خوف ہو گا اور نہ وہ غمگین ہوں گے"
      },
      {
        word: "تَوَلَّىٰ",
        meaningEnglish: "He turned away",
        meaningUrdu: "اس نے منہ موڑا",
        quranText: "عَبَسَ وَتَوَلَّىٰ",
        reference: "80:1",
        surahName: "Abasa",
        transliteration: "'Abasa wa tawallaa",
        quranEnglish: "The Prophet frowned and turned away.",
        quranUrdu: "انہوں نے تیوری چڑھائی اور منہ موڑ لیا"
      },
      {
        word: "مَوْلَاكُمُ",
        meaningEnglish: "Your Protector",
        meaningUrdu: "تمہارا مولیٰ / سرپرست",
        quranText: "وَاعْتَصِمُوا بِاللهِ هُوَ مَوْلَاكُمْ",
        reference: "22:78",
        surahName: "Al-Hajj",
        transliteration: "Wa'tasimoo billaahi Huwa Mawlaakum",
        quranEnglish: "And hold fast to Allah. He is your protector.",
        quranUrdu: "اور اللہ کو مضبوطی سے تھام لو، وہی تمہارا مولیٰ ہے"
      }
    ]
  },
  {
    id: "y-q-n",
    root: "ي ق ن",
    rootEnglish: "Certainty / Conviction / Sure belief",
    rootUrdu: "یقین / کامل ایمان",
    examples: [
      {
        word: "يُوقِنُونَ",
        meaningEnglish: "They are certain",
        meaningUrdu: "وہ یقین رکھتے ہیں",
        quranText: "وَبِالْآخِرَةِ هُمْ يُوقِنُونَ",
        reference: "2:4",
        surahName: "Al-Baqarah",
        transliteration: "Wa bil-Aakhirati hum yooqinoon",
        quranEnglish: "And of the Hereafter they are certain.",
        quranUrdu: "اور وہ آخرت پر کامل یقین رکھتے ہیں"
      },
      {
        word: "الْيَقِينُ",
        meaningEnglish: "The certainty (Death)",
        meaningUrdu: "یقین (موت)",
        quranText: "وَاعْبُدْ رَبَّكَ حَتَّىٰ يَأْتِيَكَ الْيَقِينُ",
        reference: "15:99",
        surahName: "Al-Hijr",
        transliteration: "Wa'bud Rabbaka hat-taa ya'tiyakal-Yaqeen",
        quranEnglish: "And worship your Lord until there comes to you the certainty.",
        quranUrdu: "اور اپنے رب کی عبادت کرتے رہیں یہاں تک کہ آپ کے پاس یقین (موت) آ جائے"
      },
      {
        word: "مُوقِنِينَ",
        meaningEnglish: "Believers with certainty",
        meaningUrdu: "یقین رکھنے والے",
        quranText: "إِن كُنتُم مُّوقِنِينَ",
        reference: "44:7",
        surahName: "Ad-Dukhan",
        transliteration: "In kuntum mooqineen",
        quranEnglish: "If you should be reasoning with certainty.",
        quranUrdu: "اگر تم یقین رکھنے والے ہو"
      },
      {
        word: "مُوقِنُونَ",
        meaningEnglish: "Those who have certainty",
        meaningUrdu: "یقین لانے والے",
        quranText: "رَبَّنَا أَبْصَرْنَا وَسَمِعْنَا فَارْجِعْنَا نَعْمَلْ صَالِحًا إِنَّا مُوقِنُونَ",
        reference: "32:12",
        surahName: "As-Sajdah",
        transliteration: "Rabbanaa absarnaa wa sami'naa farji'naa na'mal saalihan innaa mooqinoon",
        quranEnglish: "Our Lord, we have seen and heard, so return us; we will do righteousness; indeed, we are certain.",
        quranUrdu: "اے ہمارے رب! ہم نے دیکھ لیا اور سن لیا، پس ہمیں واپس بھیج دے تاکہ ہم نیک عمل کریں، بیشک ہم اب یقین لانے والے ہیں"
      }
    ]
  }
];

if (typeof QURANIC_ROOTS_DATA === 'undefined') {
  window.QURANIC_ROOTS_DATA = [];
}
QURANIC_ROOTS_DATA.push(...BATCH_6_ROOTS);
