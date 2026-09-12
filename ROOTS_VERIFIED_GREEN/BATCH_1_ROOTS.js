// ==========================================
// BATCH 1: ROOT ENTRIES (1 TO 20) - VERIFIED DATASET
// ==========================================

const BATCH_1_ROOTS = [
  {
    id: "alif-ba-waw",
    root: "أ ب و",
    rootEnglish: "Father / Ancestry",
    rootUrdu: "باپ / آباء و اجداد",
    examples: [
      {
        word: "أَبِي",
        meaningEnglish: "My father",
        meaningUrdu: "میرا باپ",
        quranText: "إِذْ قَالَ لِأَبِيهِ يَا أَبَتِ لِمَ تَعْبُدُ مَا لَا يَسْمَعُ",
        reference: "19:42",
        quranEnglish: "When he said to his father, 'O my father, why do you worship that which does not hear...'",
        quranUrdu: "جب اس نے اپنے باپ سے کہا: اے میرے باپ! آپ اس کی کیوں عبادت کرتے ہیں جو سنتا نہیں"
      },
      {
        word: "آبَاؤُكُمْ",
        meaningEnglish: "Your fathers / ancestors",
        meaningUrdu: "تمہارے باپ دادا",
        quranText: "آبَاؤُكُمْ وَأَبْنَاؤُكُمْ لَا تَدْرُونَ أَيُّهُمْ أَقْرَبُ لَكُمْ نَفْعًا",
        reference: "4:11",
        quranEnglish: "Your parents and your children - you do not know which of them is nearer to you in benefit.",
        quranUrdu: "تمہارے باپ اور تمہارے بیٹے، تم نہیں جانتے کہ ان میں سے کون فائدے میں تمہارے زیادہ قریب ہے"
      },
      {
        word: "أَبَوَيْهِ",
        meaningEnglish: "His parents",
        meaningUrdu: "اس کے ماں باپ",
        quranText: "وَرَفَعَ أَبَوَيْهِ عَلَى الْعَرْشِ",
        reference: "12:100",
        quranEnglish: "And he raised his parents upon the throne.",
        quranUrdu: "اور اس نے اپنے والدین کو تخت پر بٹھایا"
      },
      {
        word: "آبَائِنَا",
        meaningEnglish: "Our fathers",
        meaningUrdu: "ہمارے باپ دادا",
        quranText: "قَالُوا وَجَدْنَا عَلَيْهَا آبَاءَنَا",
        reference: "7:28",
        quranEnglish: "They say, 'We found our fathers doing it.'",
        quranUrdu: "وہ کہتے ہیں: ہم نے اپنے باپ دادا کو اسی پر پایا"
      }
    ]
  },
  {
    id: "alif-j-r",
    root: "أ ج ر",
    rootEnglish: "Reward / Wages / Recompense",
    rootUrdu: "اجر / اجرت / ثواب",
    examples: [
      {
        word: "أَجْرٌ",
        meaningEnglish: "A reward",
        meaningUrdu: "ایک اجر / بدلہ",
        quranText: "فَلَهُمْ أَجْرُهُمْ عِندَ رَبِّهِمْ",
        reference: "2:62",
        quranEnglish: "They will have their reward with their Lord.",
        quranUrdu: "تو ان کے لیے ان کا اجر ان کے رب کے پاس ہے"
      },
      {
        word: "أَجْرًا",
        meaningEnglish: "A reward / payment",
        meaningUrdu: "اجر / مزدوری",
        quranText: "قُل لَّا أَسْأَلُكُمْ عَلَيْهِ أَجْرًا",
        reference: "6:90",
        quranEnglish: "Say, 'I ask of you no reward for it.'",
        quranUrdu: "آپ فرما دیجیے: میں تم سے اس پر کوئی اجر نہیں مانگتا"
      },
      {
        word: "أُجُورَهُمْ",
        meaningEnglish: "Their rewards",
        meaningUrdu: "ان کے اجر",
        quranText: "فَيُوَفِّيهِمْ أُجُورَهُمْ",
        reference: "4:173",
        quranEnglish: "He will pay them their rewards in full.",
        quranUrdu: "پس وہ انہیں ان کے اجر پورے پورے دے گا"
      },
      {
        word: "تَأْجُرَنِي",
        meaningEnglish: "You serve / work for me",
        meaningUrdu: "تو میری ملازمت کرے",
        quranText: "عَلَىٰ أَن تَأْجُرَنِي ثَمَانِيَ حِجَجٍ",
        reference: "28:27",
        quranEnglish: "On condition that you serve me for eight years.",
        quranUrdu: "اس شرط پر کہ تو آٹھ سال میری ملازمت کرے"
      }
    ]
  },
  {
    id: "alif-x-dh",
    root: "أ خ ذ",
    rootEnglish: "To take / Seize / Catch",
    rootUrdu: "پکڑنا / لینا / گرفت کرنا",
    examples: [
      {
        word: "أَخَذْنَا",
        meaningEnglish: "We took / seized",
        meaningUrdu: "ہم نے پکڑا / لیا",
        quranText: "وَأَخَذْنَا الَّذِينَ ظَلَمُوا بِعَذَابٍ بَئِيسٍ",
        reference: "7:165",
        quranEnglish: "And We seized those who wronged with a wretched punishment.",
        quranUrdu: "اور ہم نے ظالموں کو سخت عذاب میں پکڑ لیا"
      },
      {
        word: "يَأْخُذُ",
        meaningEnglish: "He takes / accepts",
        meaningUrdu: "وہ لیتا ہے / قبول کرتا ہے",
        quranText: "وَيَأْخُذُ الصَّدَقَاتِ",
        reference: "9:104",
        quranEnglish: "And that He accepts charities.",
        quranUrdu: "اور وہ صدقات قبول فرماتا ہے"
      },
      {
        word: "اتَّخَذَ",
        meaningEnglish: "He took / adopted",
        meaningUrdu: "اس نے بنا لیا / اختیار کیا",
        quranText: "وَاتَّخَذَ اللَّهُ إِبْرَاهِيمَ خَلِيلًا",
        reference: "4:125",
        quranEnglish: "And Allah took Abraham as an intimate friend.",
        quranUrdu: "اور اللہ نے ابراہیم کو اپنا خلیل (دوست) بنا لیا"
      },
      {
        word: "أَخْذُ",
        meaningEnglish: "Seizure / Taking",
        meaningUrdu: "پکڑ / گرفت",
        quranText: "وَكَذَٰلِكَ أَخْذُ رَبِّكَ إِذَا أَخَذَ الْقُرَىٰ",
        reference: "11:102",
        quranEnglish: "And such is the seizure of your Lord when He seizes the cities.",
        quranUrdu: "اور تیرے رب کی گرفت ایسی ہی ہوتی ہے جب وہ بستیوں کو پکڑتا ہے"
      }
    ]
  },
  {
    id: "alif-x-w",
    root: "أ خ و",
    rootEnglish: "Brother / Brotherhood",
    rootUrdu: "بھائی / اخوت",
    examples: [
      {
        word: "أَخِي",
        meaningEnglish: "My brother",
        meaningUrdu: "میرا بھائی",
        quranText: "قَالَ رَبِّ اغْفِرْ لِي وَلِأَخِي",
        reference: "7:151",
        quranEnglish: "Moses said, 'My Lord, forgive me and my brother.'",
        quranUrdu: "موسیٰ نے کہا: اے میرے رب! مجھے اور میرے بھائی کو بخش دے"
      },
      {
        word: "إِخْوَةٌ",
        meaningEnglish: "Brothers",
        meaningUrdu: "بھائی (جمع)",
        quranText: "إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ",
        reference: "49:10",
        quranEnglish: "The believers are but brothers.",
        quranUrdu: "مومن تو آپس میں بھائی بھائی ہیں"
      },
      {
        word: "أَخَاهُمْ",
        meaningEnglish: "Their brother",
        meaningUrdu: "ان کا بھائی",
        quranText: "وَإِلَىٰ عَادٍ أَخَاهُمْ هُودًا",
        reference: "7:65",
        quranEnglish: "And to 'Aad [We sent] their brother Hud.",
        quranUrdu: "اور قوم عاد کی طرف ان کے بھائی ہود کو بھیجا"
      },
      {
        word: "أُخْتِي",
        meaningEnglish: "Sister",
        meaningUrdu: "بہن",
        quranText: "يَا أُخْتَ هَارُونَ مَا كَانَ أَبُوكِ امْرَأَ سَوْءٍ",
        reference: "19:28",
        quranEnglish: "O sister of Aaron, your father was not a man of evil.",
        quranUrdu: "اے ہارون کی بہن! تیرا باپ کوئی برا آدمی نہ تھا"
      }
    ]
  },
  {
    id: "alif-d-m",
    root: "أ د م",
    rootEnglish: "Adam / Mankind",
    rootUrdu: "آدم / انسان / نوع انسانی",
    examples: [
      {
        word: "آدَمُ",
        meaningEnglish: "Adam",
        meaningUrdu: "آدم (علیہ السلام)",
        quranText: "وَعَلَّمَ آدَمَ الْأَسْمَاءَ كُلَّهَا",
        reference: "2:31",
        quranEnglish: "And He taught Adam the names - all of them.",
        quranUrdu: "اور اس نے آدم کو تمام کے تمام نام سکھائے"
      },
      {
        word: "بَنِي آدَمَ",
        meaningEnglish: "Children of Adam",
        meaningUrdu: "بنی آدم / انسان",
        quranText: "وَلَقَدْ كَرَّمْنَا بَنِي آدَمَ",
        reference: "17:70",
        quranEnglish: "And We have certainly honored the children of Adam.",
        quranUrdu: "اور یقیناً ہم نے بنی آدم کو عزت دی"
      },
      {
        word: "لآدَمَ",
        meaningEnglish: "To Adam",
        meaningUrdu: "آدم کے لیے",
        quranText: "وَإِذْ قُلْنَا لِلْمَلَائِكَةِ اسْجُدُوا لآدَمَ",
        reference: "2:34",
        quranEnglish: "And when We said to the angels, 'Prostrate before Adam.'",
        quranUrdu: "اور جب ہم نے فرشتوں سے کہا کہ آدم کے آگے سجدہ کرو"
      },
      {
        word: "آدَمَ",
        meaningEnglish: "Adam (as an example)",
        meaningUrdu: "آدم کی مثال",
        quranText: "إِنَّ مَثَلَ عِيسَىٰ عِندَ اللَّهِ كَمَثَلِ آدَمَ",
        reference: "3:59",
        quranEnglish: "Indeed, the example of Jesus to Allah is like that of Adam.",
        quranUrdu: "بیشک عیسیٰ کی مثال اللہ کے نزدیک آدم کی سی ہے"
      }
    ]
  },
  {
    id: "alif-dh-n",
    root: "أ ذ ن",
    rootEnglish: "Permission / Ear / Announcement",
    rootUrdu: "اجازت / کان / اعلان",
    examples: [
      {
        word: "بِإِذْنِ",
        meaningEnglish: "By permission of",
        meaningUrdu: "کے حکم / اجازت سے",
        quranText: "مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ",
        reference: "2:255",
        quranEnglish: "Who is it that can intercede with Him except by His permission?",
        quranUrdu: "کون ہے جو اس کے پاس اس کی اجازت کے بغیر سفارش کر سکے؟"
      },
      {
        word: "أَذَانٌ",
        meaningEnglish: "An announcement",
        meaningUrdu: "ایک اعلان",
        quranText: "وَأَذَانٌ مِّنَ اللَّهِ وَرَسُولِهِ إِلَى النَّاسِ",
        reference: "9:3",
        quranEnglish: "And an announcement from Allah and His Messenger to the people.",
        quranUrdu: "اور اللہ اور اس کے رسول کی طرف سے لوگوں کے لیے ایک عام اعلان ہے"
      },
      {
        word: "آذَانِهِمْ",
        meaningEnglish: "Their ears",
        meaningUrdu: "ان کے کان",
        quranText: "يَجْعَلُونَ أَصَابِعَهُمْ فِي آذَانِهِم مِّنَ الصَّوَاعِقِ",
        reference: "2:19",
        quranEnglish: "They put their fingers in their ears against the thunderclaps.",
        quranUrdu: "وہ کڑک کے باعث اپنی انگلیاں اپنے کانوں میں ٹھونس لیتے ہیں"
      },
      {
        word: "أُذُنٌ",
        meaningEnglish: "An ear / Listener",
        meaningUrdu: "کان / سننے والا",
        quranText: "وَيَقُولُونَ هُوَ أُذُنٌ ۚ قُلْ أُذُنُ خَيْرٍ لَّكُمْ",
        reference: "9:61",
        quranEnglish: "And they say, 'He is an ear.' Say, 'An ear that listens to what is good for you.'",
        quranUrdu: "اور وہ کہتے ہیں: یہ تو کان ہی ہے، آپ کہہ دیجیے: وہ تمہاری بھلائی کا کان ہے"
      }
    ]
  },
  {
    id: "alif-r-d",
    root: "أ ر ض",
    rootEnglish: "Earth / Land / Ground",
    rootUrdu: "زمین / دھرتی / ملک",
    examples: [
      {
        word: "الْأَرْضِ",
        meaningEnglish: "The earth",
        meaningUrdu: "زمین",
        quranText: "وَاللَّهُ لَهُ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ",
        reference: "3:189",
        quranEnglish: "And to Allah belongs the dominion of the heavens and the earth.",
        quranUrdu: "اور آسمانوں اور زمین کی بادشاہی اللہ ہی کے لیے ہے"
      },
      {
        word: "أَرْضُ",
        meaningEnglish: "Land of",
        meaningUrdu: "زمین",
        quranText: "أَلَمْ تَكُنْ أَرْضُ اللَّهِ وَاسِعَةً",
        reference: "4:97",
        quranEnglish: "Was not the earth of Allah spacious?",
        quranUrdu: "کیا اللہ کی زمین وسیع نہ تھی؟"
      },
      {
        word: "أَرْضِكُمْ",
        meaningEnglish: "Your land",
        meaningUrdu: "تمہاری زمین",
        quranText: "يُرِيدُ أَن يُخْرِجَكُم مِّنْ أَرْضِكُمْ",
        reference: "7:110",
        quranEnglish: "He wants to drive you out of your land.",
        quranUrdu: "وہ چاہتا ہے کہ تمہیں تمہاری زمین سے نکال دے"
      },
      {
        word: "الْأَرْضَ",
        meaningEnglish: "The earth",
        meaningUrdu: "زمین کو",
        quranText: "الَّذِي جَعَلَ لَكُمُ الْأَرْضَ فِرَاشًا",
        reference: "2:22",
        quranEnglish: "Who made for you the earth a bed.",
        quranUrdu: "جس نے تمہارے لیے زمین کو بچھونا بنایا"
      }
    ]
  },
  {
    id: "alif-m-r",
    root: "أ م ر",
    rootEnglish: "Command / Matter / Affair",
    rootUrdu: "حکم / معاملہ / کام",
    examples: [
      {
        word: "أَمْرُ",
        meaningEnglish: "Command / Affair",
        meaningUrdu: "حکم / معاملہ",
        quranText: "أَتَىٰ أَمْرُ اللَّهِ فَلَا تَسْتَعْجِلُوهُ",
        reference: "16:1",
        quranEnglish: "The command of Allah has come, so be not impatient for it.",
        quranUrdu: "اللہ کا حکم آ پہنچا، پس تم اس کی جلدی نہ کرو"
      },
      {
        word: "يَأْمُرُكُمْ",
        meaningEnglish: "He commands you",
        meaningUrdu: "وہ تمہیں حکم دیتا ہے",
        quranText: "إِنَّ اللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا",
        reference: "4:58",
        quranEnglish: "Indeed, Allah commands you to render trusts to those to whom they are due.",
        quranUrdu: "بیشک اللہ تمہیں حکم دیتا ہے کہ امانتیں ان کے اہل کو پہنچا دیا کرو"
      },
      {
        word: "أُمِرْتُ",
        meaningEnglish: "I have been commanded",
        meaningUrdu: "مجھے حکم دیا گیا ہے",
        quranText: "قُلْ إِنِّي أُمِرْتُ أَنْ أَعْبُدَ اللَّهَ مُخْلِصًا لَّهُ الدِّينَ",
        reference: "39:11",
        quranEnglish: "Say, 'Indeed, I have been commanded to worship Allah, being sincere to Him in religion.'",
        quranUrdu: "آپ فرما دیجیے: مجھے حکم دیا گیا ہے کہ میں اللہ کی عبادت خالص اسی کے لیے کروں"
      },
      {
        word: "أَمْرًا",
        meaningEnglish: "A matter / decree",
        meaningUrdu: "ایک معاملہ / حکم",
        quranText: "إِذَا قَضَىٰ أَمْرًا فَإِنَّمَا يَقُولُ لَهُ كُن فَيَكُونُ",
        reference: "2:117",
        quranEnglish: "When He decrees a matter, He only says to it, 'Be,' and it is.",
        quranUrdu: "جب وہ کسی کام کا فیصلہ فرماتا ہے تو اس سے بس یہی فرماتا ہے کہ 'ہو جا' پس وہ ہو جاتا ہے"
      }
    ]
  },
  {
    id: "alif-m-n",
    root: "أ م ن",
    rootEnglish: "Faith / Security / Trust",
    rootUrdu: "ایمان / امن / امانت",
    examples: [
      {
        word: "آمَنُوا",
        meaningEnglish: "They believed",
        meaningUrdu: "وہ ایمان لائے",
        quranText: "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ",
        reference: "2:278",
        quranEnglish: "O you who have believed, fear Allah.",
        quranUrdu: "اے ایمان والو! اللہ سے ڈرو"
      },
      {
        word: "الْمُؤْمِنِينَ",
        meaningEnglish: "The believers",
        meaningUrdu: "ایمان والے",
        quranText: "وَكَانَ بِالْمُؤْمِنِينَ رَحِيمًا",
        reference: "33:43",
        quranEnglish: "And He is ever, to the believers, Merciful.",
        quranUrdu: "اور وہ مومنوں پر نہایت رحم فرمانے والا ہے"
      },
      {
        word: "آمِنًا",
        meaningEnglish: "Safe / Secure",
        meaningUrdu: "امن والا / باامان",
        quranText: "رَبِّ اجْعَلْ هَٰذَا بَلَدًا آمِنًا",
        reference: "2:126",
        quranEnglish: "My Lord, make this a secure city.",
        quranUrdu: "اے میرے رب! اس شہر کو امن والا بنا دے"
      },
      {
        word: "الْأَمَانَةَ",
        meaningEnglish: "The trust",
        meaningUrdu: "امانت",
        quranText: "إِنَّا عَرَضْنَا الْأَمَانَةَ عَلَى السَّمَاوَاتِ وَالْأَرْضِ",
        reference: "33:72",
        quranEnglish: "Indeed, We offered the Trust to the heavens and the earth.",
        quranUrdu: "بیشک ہم نے امانت کو آسمانوں اور زمین پر پیش کیا"
      }
    ]
  },
  {
    id: "alif-n-s",
    root: "أ ن س",
    rootEnglish: "Mankind / People / Familiarity",
    rootUrdu: "انسان / لوگ / انسیت",
    examples: [
      {
        word: "النَّاسِ",
        meaningEnglish: "Mankind / People",
        meaningUrdu: "لوگ / انسان",
        quranText: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
        reference: "114:1",
        quranEnglish: "Say, 'I seek refuge in the Lord of mankind.'",
        quranUrdu: "آپ فرما دیجیے: میں انسانوں کے رب کی پناہ مانگتا ہوں"
      },
      {
        word: "الْإِنسَانَ",
        meaningEnglish: "Man / Mankind",
        meaningUrdu: "انسان",
        quranText: "خَلَقَ الْإِنسَانَ مِنْ صَلْصَالٍ كَالْفَخَّارِ",
        reference: "55:14",
        quranEnglish: "He created man from clay like that of pottery.",
        quranUrdu: "اس نے انسان کو ٹھیکری کی طرح بجنے والی مٹی سے بنایا"
      },
      {
        word: "إِنسٌ",
        meaningEnglish: "Human / Mankind",
        meaningUrdu: "انسان",
        quranText: "وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ",
        reference: "51:56",
        quranEnglish: "And I did not create the jinn and mankind except to worship Me.",
        quranUrdu: "اور میں نے جنوں اور انسانوں کو صرف اپنی عبادت کے لیے پیدا کیا"
      },
      {
        word: "آنَسَ",
        meaningEnglish: "He perceived / noticed",
        meaningUrdu: "اس نے محسوس کیا / دیکھا",
        quranText: "إِنِّي آنَسْتُ نَارًا",
        reference: "20:10",
        quranEnglish: "Indeed, I have perceived a fire.",
        quranUrdu: "بیشک میں نے ایک آگ دیکھی ہے"
      }
    ]
  },
  {
    id: "alif-h-l",
    root: "أ هـ ل",
    rootEnglish: "Family / People / Worthy",
    rootUrdu: "اہل / گھر والے / مستحق",
    examples: [
      {
        word: "أَهْلَ",
        meaningEnglish: "People of",
        meaningUrdu: "اہل / والے",
        quranText: "قُلْ يَا أَهْلَ الْكِتَابِ تَعَالَوْا إِلَىٰ كَلِمَةٍ سَوَاءٍ",
        reference: "3:64",
        quranEnglish: "Say, 'O People of the Scripture, come to a word that is equitable between us and you.'",
        quranUrdu: "آپ فرما دیجیے: اے اہل کتاب! ایک ایسی بات کی طرف آؤ جو ہمارے اور تمہارے درمیان برابر ہے"
      },
      {
        word: "أَهْلِكَ",
        meaningEnglish: "Your family",
        meaningUrdu: "تیرے گھر والے",
        quranText: "فَأَسْرِ بِأَهْلِكَ بِقِطْعٍ مِّنَ اللَّيْلِ",
        reference: "11:81",
        quranEnglish: "So set out with your family during a portion of the night.",
        quranUrdu: "پس اپنے گھر والوں کو رات کے کسی حصے میں لے کر نکل جائیے"
      },
      {
        word: "أَهْلِهِ",
        meaningEnglish: "His family / Its people",
        meaningUrdu: "اس کے گھر والے / اس کے لوگ",
        quranText: "وَمَن قُتِلَ مُؤْمِنًا خَطَأً فَتَحْرِيرُ رَقَبَةٍ مُؤْمِنَةٍ وَدِيَةٌ مُسَلَّمَةٌ إِلَىٰ أَهْلِهِ",
        reference: "4:92",
        quranEnglish: "And whoever kills a believer by mistake - then the freeing of a believing slave and a compensation given to his family.",
        quranUrdu: "اور جو شخص کسی مومن کو غلطی سے قتل کر دے تو ایک مومن غلام آزاد کرنا اور اس کے گھر والوں کو خون بہا دینا ہے"
      },
      {
        word: "أَهْلُ",
        meaningEnglish: "Worthy of",
        meaningUrdu: "اہل / مستحق",
        quranText: "هُوَ أَهْلُ التَّقْوَىٰ وَأَهْلُ الْمَغْفِرَةِ",
        reference: "74:56",
        quranEnglish: "He is worthy to be feared and worthy to forgive.",
        quranUrdu: "وہی ڈرنے کے لائق اور وہی بخشش کا مالک ہے"
      }
    ]
  },
  {
    id: "alif-w-l",
    root: "أ و ل",
    rootEnglish: "First / Beginning / Interpretation",
    rootUrdu: "اول / پہلا / تعبیر",
    examples: [
      {
        word: "الْأَوَّلُ",
        meaningEnglish: "The First",
        meaningUrdu: "سب سے پہلا",
        quranText: "هُوَ الْأَوَّلُ وَالْآخِرُ وَالظَّاهِرُ وَالْبَاطِنُ",
        reference: "57:3",
        quranEnglish: "He is the First and the Last, the Ascendant and the Intimate.",
        quranUrdu: "وہی اول ہے اور وہی آخر ہے اور ظاہر ہے اور باطن ہے"
      },
      {
        word: "أَوَّلَ",
        meaningEnglish: "First (of something)",
        meaningUrdu: "پہلا",
        quranText: "وَلَا تَكُونُوا أَوَّلَ كَافِرٍ بِهِ",
        reference: "2:41",
        quranEnglish: "And do not be the first to disbelieve in it.",
        quranUrdu: "اور تم اس کا انکار کرنے والے سب سے پہلے نہ بنو"
      },
      {
        word: "تَأْوِيلَ",
        meaningEnglish: "Interpretation / Reality",
        meaningUrdu: "تعبیر / حقیقت / تاویل",
        quranText: "وَيُعَلِّمُكَ مِن تَأْوِيلِ الْأَحَادِيثِ",
        reference: "12:6",
        quranEnglish: "And teaches you the interpretation of events.",
        quranUrdu: "اور وہ تجھے باتوں کی تعبیر سکھائے گا"
      },
      {
        word: "الْأُولَىٰ",
        meaningEnglish: "The first (life/world)",
        meaningUrdu: "پہلی (دنیا)",
        quranText: "وَلَلْآخِرَةُ خَيْرٌ لَّكَ مِنَ الْأُولَىٰ",
        reference: "93:4",
        quranEnglish: "And the Hereafter is better for you than the first [life].",
        quranUrdu: "اور یقیناً آخرت تمہارے لیے دنیا سے بہتر ہے"
      }
    ]
  },
  {
    id: "alif-y-y",
    root: "أ ي ي",
    rootEnglish: "Sign / Verse / Evidence",
    rootUrdu: "آیت / نشانی / دلیل",
    examples: [
      {
        word: "آيَاتُ",
        meaningEnglish: "Signs / Verses",
        meaningUrdu: "آیات / نشانیاں",
        quranText: "تِلْكَ آيَاتُ اللَّهِ نَتْلُوهَا عَلَيْكَ بِالْحَقِّ",
        reference: "2:252",
        quranEnglish: "These are the verses of Allah which We recite to you in truth.",
        quranUrdu: "یہ اللہ کی آیات ہیں جنہیں ہم آپ پر حق کے ساتھ تلاوت کرتے ہیں"
      },
      {
        word: "آيَةً",
        meaningEnglish: "A sign / verse",
        meaningUrdu: "ایک نشانی / آیت",
        quranText: "إِنَّ فِي ذَٰلِكَ لَآيَةً لِّلْمُؤْمِنِينَ",
        reference: "15:77",
        quranEnglish: "Indeed in that is a sign for the believers.",
        quranUrdu: "بیشک اس میں ایمان والوں کے لیے بڑی نشانی ہے"
      },
      {
        word: "آيَاتِنَا",
        meaningEnglish: "Our signs / verses",
        meaningUrdu: "ہماری نشانیاں",
        quranText: "وَالَّذِينَ كَفَرُوا وَكَذَّبُوا بِآيَاتِنَا",
        reference: "2:39",
        quranEnglish: "And those who disbelieved and denied Our signs.",
        quranUrdu: "اور جن لوگوں نے کفر کیا اور ہماری آیات کو جھٹلایا"
      },
      {
        word: "آيَاتِهِ",
        meaningEnglish: "His signs",
        meaningUrdu: "اس کی نشانیاں",
        quranText: "وَمِنْ آيَاتِهِ خَلْقُ السَّمَاوَاتِ وَالْأَرْضِ",
        reference: "30:22",
        quranEnglish: "And of His signs is the creation of the heavens and the earth.",
        quranUrdu: "اور اس کی نشانیوں میں سے آسمانوں اور زمین کی پیدائش ہے"
      }
    ]
  },
  {
    id: "ba-d-alif",
    root: "ب د أ",
    rootEnglish: "To begin / Originate",
    rootUrdu: "ابتداء کرنا / شروع کرنا",
    examples: [
      {
        word: "يَبْدَأُ",
        meaningEnglish: "He originates / begins",
        meaningUrdu: "وہ ابتداء کرتا ہے",
        quranText: "قُلِ اللَّهُ يَبْدَأُ الْخَلْقَ ثُمَّ يُعِيدُهُ",
        reference: "10:34",
        quranEnglish: "Say, 'Allah originates creation and then repeats it.'",
        quranUrdu: "آپ فرمائیے: اللہ ہی پیدائش کی ابتداء کرتا ہے پھر وہی اسے لوٹائے گا"
      },
      {
        word: "بَدَأَ",
        meaningEnglish: "He began / originated",
        meaningUrdu: "اس نے ابتدا کی",
        quranText: "وَبَدَأَ خَلْقَ الْإِنسَانِ مِن طِينٍ",
        reference: "32:7",
        quranEnglish: "And He began the creation of man from clay.",
        quranUrdu: "اور اس نے انسان کی پیدائش کی ابتداء مٹی سے کی"
      },
      {
        word: "بَدَءُوكُمْ",
        meaningEnglish: "They initiated against you",
        meaningUrdu: "انہوں نے تم سے ابتدا کی",
        quranText: "وَهُم بَدَءُوكُمْ أَوَّلَ مَرَّةٍ",
        reference: "9:13",
        quranEnglish: "And they began [hostilities] against you the first time?",
        quranUrdu: "اور انہوں نے ہی تم سے پہلی بار پہل کی تھی"
      },
      {
        word: "يُبْدِئُ",
        meaningEnglish: "He originates",
        meaningUrdu: "وہ پہلی بار پیدا کرتا ہے",
        quranText: "إِنَّهُ هُوَ يُبْدِئُ وَيُعِيدُ",
        reference: "85:13",
        quranEnglish: "Indeed, it is He who originates and repeats.",
        quranUrdu: "بیشک وہی پہلی بار پیدا کرتا ہے اور وہی دوبارہ پیدا کرے گا"
      }
    ]
  },
  {
    id: "ba-d-l",
    root: "ب د ل",
    rootEnglish: "To change / Replace / Exchange",
    rootUrdu: "بدلنا / تبدیل کرنا / متبادل",
    examples: [
      {
        word: "بَدَّلَ",
        meaningEnglish: "He changed / altered",
        meaningUrdu: "اس نے بدل دیا",
        quranText: "فَبَدَّلَ الَّذِينَ ظَلَمُوا قَوْلًا غَيْرَ الَّذِي قِيلَ لَهُمْ",
        reference: "2:59",
        quranEnglish: "But those who wronged changed [the word] to a statement other than that which had been said to them.",
        quranUrdu: "تو ظالموں نے اس بات کو جو ان سے کہی گئی تھی دوسری بات سے بدل دیا"
      },
      {
        word: "نُبَدِّلَ",
        meaningEnglish: "We replace / substitute",
        meaningUrdu: "ہم بدل دیں",
        quranText: "عَلَىٰ أَن نُبَدِّلَ خَيْرًا مِّنْهُمْ",
        reference: "70:41",
        quranEnglish: "To replace them with better than them.",
        quranUrdu: "اس پر کہ ہم ان سے بہتر لوگ بدل کر لے آئیں"
      },
      {
        word: "بَدَلًا",
        meaningEnglish: "An exchange / substitute",
        meaningUrdu: "بدلہ / متبادل",
        quranText: "بِئْسَ لِلظَّالِمِينَ بَدَلًا",
        reference: "18:50",
        quranEnglish: "Wretched is the exchange for the wrongdoers.",
        quranUrdu: "ظالموں کے لیے کیا ہی برا بدلہ ہے"
      },
      {
        word: "تَبْدِيلًا",
        meaningEnglish: "Change / Alteration",
        meaningUrdu: "تبدیلی / تغیر",
        quranText: "وَلَن تَجِدَ لِسُنَّتِ اللَّهِ تَبْدِيلًا",
        reference: "33:62",
        quranEnglish: "And you will never find in the way of Allah any change.",
        quranUrdu: "اور آپ اللہ کے دستور میں ہرگز کوئی تبدیلی نہیں پائیں گے"
      }
    ]
  },
  {
    id: "ba-r-k",
    root: "ب ر ك",
    rootEnglish: "Blessing / To bless / Abundance",
    rootUrdu: "برکت / مبارک / خیر و برکت",
    examples: [
      {
        word: "مُبَارَكٌ",
        meaningEnglish: "Blessed",
        meaningUrdu: "مبارک / برکت والا",
        quranText: "وَهَٰذَا كِتَابٌ أَنزَلْنَاهُ مُبَارَكٌ",
        reference: "6:92",
        quranEnglish: "And this is a Book which We have sent down, blessed.",
        quranUrdu: "اور یہ ایک کتاب ہے جسے ہم نے نازل کیا ہے، برکت والی ہے"
      },
      {
        word: "بَارَكْنَا",
        meaningEnglish: "We blessed",
        meaningUrdu: "ہم نے برکت دی",
        quranText: "الَّذِي بَارَكْنَا حَوْلَهُ",
        reference: "17:1",
        quranEnglish: "Whose surroundings We have blessed.",
        quranUrdu: "جس کے ارد گرد ہم نے برکتیں رکھی ہیں"
      },
      {
        word: "تَبَارَكَ",
        meaningEnglish: "Blessed is He",
        meaningUrdu: "با برکت ہے وہ",
        quranText: "تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ",
        reference: "67:1",
        quranEnglish: "Blessed is He in whose hand is dominion.",
        quranUrdu: "بہت برکت والا ہے وہ ذات جس کے ہاتھ میں بادشاہی ہے"
      },
      {
        word: "بَرَكَاتٍ",
        meaningEnglish: "Blessings",
        meaningUrdu: "برکات / برکتیں",
        quranText: "لَفَتَحْنَا عَلَيْهِم بَرَكَاتٍ مِّنَ السَّمَاءِ وَالْأَرْضِ",
        reference: "7:96",
        quranEnglish: "We would have opened for them blessings from the heaven and the earth.",
        quranUrdu: "تو ہم ان پر آسمان اور زمین سے برکات کے دروازے کھول دیتے"
      }
    ]
  },
  {
    id: "ba-s-t",
    root: "ب س ط",
    rootEnglish: "To spread out / Extend / Stretch",
    rootUrdu: "پھیلانا / کشادہ کرنا / وسعت",
    examples: [
      {
        word: "يَبْسُطُ",
        meaningEnglish: "He extends / grants abundantly",
        meaningUrdu: "وہ کشادہ کرتا ہے",
        quranText: "اللَّهُ يَبْسُطُ الرِّزْقَ لِمَن يَشَاءُ",
        reference: "13:26",
        quranEnglish: "Allah extends provision for whom He wills.",
        quranUrdu: "اللہ جس کے لیے چاہتا ہے رزق کشادہ کر دیتا ہے"
      },
      {
        word: "بَسَطتَ",
        meaningEnglish: "You stretch out",
        meaningUrdu: "تو پھیلائے گا / بڑھائے گا",
        quranText: "لَئِن بَسَطتَ إِلَيَّ يَدَكَ لِتَقْتُلَنِي",
        reference: "5:28",
        quranEnglish: "If you should raise your hand against me to kill me...",
        quranUrdu: "اگر تو نے مجھے قتل کرنے کے لیے اپنا ہاتھ میری طرف بڑھایا"
      },
      {
        word: "بَسْطَةً",
        meaningEnglish: "Abundance / Extension",
        meaningUrdu: "کشادگی / وسعت",
        quranText: "وَزَادَهُ بَسْطَةً فِي الْعِلْمِ وَالْجِسْمِ",
        reference: "2:247",
        quranEnglish: "And has increased him abundantly in knowledge and stature.",
        quranUrdu: "اور اس نے اسے علم اور جسم میں وسعت زیادہ عطا فرمائی ہے"
      },
      {
        word: "بَاسِطٌ",
        meaningEnglish: "Stretching out",
        meaningUrdu: "پھیلانے والا",
        quranText: "وَكَلْبُهُم بَاسِطٌ ذِرَاعَيْهِ بِالْوَصِيدِ",
        reference: "18:18",
        quranEnglish: "While their dog stretched forth his two forelegs at the entrance.",
        quranUrdu: "اور ان کا کتا غار کی چوکھٹ پر اپنے دونوں ہاتھ پھیلائے ہوئے تھا"
      }
    ]
  },
  {
    id: "ba-s-r",
    root: "ب ص ر",
    rootEnglish: "Sight / Insight / Vision",
    rootUrdu: "بصارت / دیکھنا / بینائی",
    examples: [
      {
        word: "بَصِيرٌ",
        meaningEnglish: "All-Seeing",
        meaningUrdu: "خوب دیکھنے والا",
        quranText: "إِنَّ اللَّهَ بِمَا تَعْمَلُونَ بَصِيرٌ",
        reference: "2:110",
        quranEnglish: "Indeed Allah, of what you do, is Seeing.",
        quranUrdu: "بیشک اللہ تمہارے تمام اعمال کو خوب دیکھنے والا ہے"
      },
      {
        word: "الْأَبْصَارِ",
        meaningEnglish: "Sights / Eyes",
        meaningUrdu: "آنکھیں / بصارتیں",
        quranText: "فَاعْتَبِرُوا يَا أُولِي الْأَبْصَارِ",
        reference: "59:2",
        quranEnglish: "So take warning, O people of vision.",
        quranUrdu: "پس اے آنکھوں والو! عبرت حاصل کرو"
      },
      {
        word: "أَبْصِرْ",
        meaningEnglish: "How clearly He sees!",
        meaningUrdu: "وہ کیا ہی خوب دیکھنے والا ہے!",
        quranText: "أَبْصِرْ بِهِ وَأَسْمِعْ",
        reference: "18:26",
        quranEnglish: "How clearly He sees and hears!",
        quranUrdu: "وہ کیا ہی خوب دیکھنے والا اور سننے والا ہے!"
      },
      {
        word: "بَصَائِرُ",
        meaningEnglish: "Insights / Clear proofs",
        meaningUrdu: "بصیرت کے دلائل",
        quranText: "قَدْ جَاءَكُم بَصَائِرُ مِن رَّبِّكُمْ",
        reference: "6:104",
        quranEnglish: "There has come to you enlightenment from your Lord.",
        quranUrdu: "تمہارے پاس تمہارے رب کی طرف سے بصیرت کے دلائل آ چکے ہیں"
      }
    ]
  },
  {
    id: "ba-t-l",
    root: "ب ط ل",
    rootEnglish: "Falsehood / Vanity / Invalid",
    rootUrdu: "باطل / ضائع / بے بنیاد",
    examples: [
      {
        word: "الْبَاطِلُ",
        meaningEnglish: "Falsehood / Vanity",
        meaningUrdu: "باطل / ناہق",
        quranText: "جَاءَ الْحَقُّ وَزَهَقَ الْبَاطِلُ",
        reference: "17:81",
        quranEnglish: "Truth has come, and falsehood has departed.",
        quranUrdu: "حق آ گیا اور باطل مٹ گیا"
      },
      {
        word: "بَاطِلًا",
        meaningEnglish: "In vain / Without purpose",
        meaningUrdu: "بے مقصد / باطل",
        quranText: "رَبَّنَا مَا خَلَقْتَ هَٰذَا بَاطِلًا",
        reference: "3:191",
        quranEnglish: "Our Lord, You did not create this aimlessly.",
        quranUrdu: "اے ہمارے رب! تو نے یہ سب بے مقصد پیدا نہیں کیا"
      },
      {
        word: "تُبْطِلُوا",
        meaningEnglish: "Do not invalidate / render void",
        meaningUrdu: "تم ضائع مت کرو",
        quranText: "لَا تُبْطِلُوا صَدَقَاتِكُم بِالْمَنِّ وَالْأَذَىٰ",
        reference: "2:264",
        quranEnglish: "Do not invalidate your charities with reminders or injury.",
        quranUrdu: "اپنے صدقات کو احسان جتا کر اور تکلیف پہنچا کر ضائع نہ کرو"
      },
      {
        word: "بَاطِلٌ",
        meaningEnglish: "Worthless / Void",
        meaningUrdu: "باطل / ضائع",
        quranText: "وَبَاطِلٌ مَّا كَانُوا يَعْمَلُونَ",
        reference: "11:16",
        quranEnglish: "And worthless is what they used to do.",
        quranUrdu: "اور باطل ہو گیا جو کچھ وہ کرتے تھے"
      }
    ]
  },
  {
    id: "ba-q-y",
    root: "ب ق ي",
    rootEnglish: "To remain / Endure / Lasting",
    rootUrdu: "باقی رہنا / قائم / بقاء",
    examples: [
      {
        word: "يَبْقَىٰ",
        meaningEnglish: "Remains / Endures",
        meaningUrdu: "باقی رہے گا",
        quranText: "وَيَبْقَىٰ وَجْهُ رَبِّكَ ذُو الْجَلَالِ وَالْإِكْرَامِ",
        reference: "55:27",
        quranEnglish: "And there will remain the Face of your Lord, Owner of Majesty and Honor.",
        quranUrdu: "اور صرف تیرے رب کی عظمت اور عزت والی ذات ہی باقی رہے گی"
      },
      {
        word: "بَاقٍ",
        meaningEnglish: "Remaining / Everlasting",
        meaningUrdu: "باقی رہنے والا",
        quranText: "مَا عِندَكُمْ يَنفَدُ ۖ وَمَا عِندَ اللَّهِ بَاقٍ",
        reference: "16:96",
        quranEnglish: "Whatever you have will end, but whatever is with Allah is everlasting.",
        quranUrdu: "جو کچھ تمہارے پاس ہے وہ ختم ہو جائے گا اور جو اللہ کے پاس ہے وہ باقی رہنے والا ہے"
      },
      {
        word: "الْبَاقِيَاتُ",
        meaningEnglish: "The enduring / lasting things",
        meaningUrdu: "باقی رہنے والی (نیکیاں)",
        quranText: "وَالْبَاقِيَاتُ الصَّالِحَاتُ خَيْرٌ عِندَ رَبِّكَ",
        reference: "18:46",
        quranEnglish: "But the enduring good deeds are better with your Lord.",
        quranUrdu: "اور باقی رہنے والی نیکیاں تیرے رب کے نزدیک بہتر ہیں"
      },
      {
        word: "أَبْقَىٰ",
        meaningEnglish: "More lasting / Enduring",
        meaningUrdu: "زیادہ باقی رہنے والا",
        quranText: "وَالْآخِرَةُ خَيْرٌ وَأَبْقَىٰ",
        reference: "87:17",
        quranEnglish: "While the Hereafter is better and more enduring.",
        quranUrdu: "حالانکہ آخرت بہتر اور زیادہ باقی رہنے والی ہے"
      }
    ]
  }
];

if (typeof QURANIC_ROOTS_DATA !== 'undefined') {
  QURANIC_ROOTS_DATA.push(...BATCH_1_ROOTS);
}