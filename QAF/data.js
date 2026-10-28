/**
 * Qur'anic Arabic Root & Morphology Database
 * Authenticated against Mushaf al-Madinah & Classical Lexicographical Corpora
 */

window.quranDatabase = [
  // ==========================================
  // SURAH 1: AL-FATIHAH (1:1-7)
  // ==========================================
  {
    surahNumber: 1,
    surahNameArabic: "الفاتحة",
    surahNameEnglish: "Al-Fatihah (The Opening)",
    ayahRange: "1-7",
    allRoots: [
      "س م و", "أ ل ه", "ر ح م", "ح م د", "ر ب ب", 
      "ع ل م", "م ل ك", "ي و م", "د ي ن", "ع ب د", 
      "ع و ن", "ه د ي", "ص ر ط", "ق و م", "ن ع م", 
      "غ ي ر", "غ ض ب", "ض ل ل"
    ],
    rootsDictionary: {
      "س م و": { root: "س م و", urdu: "بلندی، اونچائی، علامت و نشان بنانا", english: "Height, loftiness, to mark or distinguish", type: "معتل ناقص واوی" },
      "أ ل ه": { root: "أ ل ه", urdu: "عبادت کرنا، حیرت زدہ ہو کر پناہ لینا", english: "To worship, to be awestruck, to seek refuge", type: "مہموز الفاء" },
      "ر ح م": { root: "ر ح م", urdu: "نرمی، شفقت، ماں کی کوکھ (جائے حفاظت و پرورش)", english: "Tenderness, womb, protective encompassing compassion", type: "صحیح سالم" },
      "ح م د": { root: "ح م د", urdu: "احسان و کمال پر اختیاری ستائش و شکر کرنا", english: "To praise with love, reverence, and gratitude for virtue", type: "صحیح سالم" },
      "ر ب ب": { root: "ر ب ب", urdu: "کسی چیز کو تدریجاً کمال تک پہنچانا، پالنا، مالک ہونا", english: "To nurture step-by-step toward perfection, lordship", type: "مضاعف ثلاثی" },
      "ع ل م": { root: "ع ل م", urdu: "علامت، نشان، جاننا، حقیقت کا ادراک کرنا", english: "Mark, sign, knowing, perceiving reality", type: "صحیح سالم" },
      "م ل ك": { root: "م ل ك", urdu: "کسی شے پر مکمل قبضہ، اختیار و تصرف رکھنا", english: "To possess, hold dominion, command, and authority", type: "صحیح سالم" },
      "ي و م": { root: "ي و م", urdu: "وقت کا دورانیہ، ایک دن، ظہور کا وقت", english: "Period of time, daytime, epoch, moment of occurrence", type: "مثال یائی معتل اجوف واوی" },
      "د ي ن": { root: "د ي ن", urdu: "جزا و سزا، حساب کتاب، اطاعت، بدلہ، قرض", english: "Recompense, judgment, obedience, law, debt", type: "معتل اجوف یائی" },
      "ع ب د": { root: "ع ب د", urdu: "انتہائی عاجزی و اطاعت، راستہ ہموار کرنا", english: "Subservience, ultimate humility, to pave a path", type: "صحیح سالم" },
      "ع و ن": { root: "ع و ن", urdu: "مدد کرنا، سہارا دینا، طاقت پہنچانا", english: "To aid, assist, support, relieve in hardship", type: "معتل اجوف واوی" },
      "ه د ي": { root: "ه د ي", urdu: "نرمی سے راہنمائی کرنا، منزل کا راستہ دکھانا، تحفہ دینا", english: "To guide gently, direct to destination, grant a gift", type: "معتل ناقص یائی" },
      "ص ر ط": { root: "ص ر ط", urdu: "نگلنا؛ کشادہ و واضح شاہراہ", english: "To swallow; a wide, clear highway that draws one in", type: "صحیح سالم" },
      "ق و م": { root: "ق و م", urdu: "سیدھا کھڑا ہونا، درست و مضبوط ہونا", english: "To stand upright, be firm, direct, and straight", type: "معتل اجوف واوی" },
      "ن ع م": { root: "ن ع م", urdu: "نرمی، آسودگی، خوشحالی، احسان و فضل", english: "Softness, ease, comfort, blessing, delight", type: "صحیح سالم" },
      "غ ي ر": { root: "غ ي ر", urdu: "بدلنا، جدا ہونا، سوائے، دوری", english: "To alter, differ, other than, distinct", type: "معتل اجوف یائی" },
      "غ ض ب": { root: "غ ض ب", urdu: "شدت، غصہ، ناگواری، سخت چٹان", english: "Hard rock, severe displeasure, boiling anger, wrath", type: "صحیح سالم" },
      "ض ل ل": { root: "ض ل ل", urdu: "سیدھے راستے سے بھٹک جانا، ضائع ہو جانا", english: "To lose the right way, stray, perish, deviate", type: "مضاعف ثلاثی" },
      "ك ت ب": { root: "ك ت ب", urdu: "سلائی کرنا، جوڑنا، لکھنا، فرض و لازم کرنا", english: "To stitch together, bind, write, ordain or decree", type: "صحیح سالم" },
      "ر ي ب": { root: "ر ي ب", urdu: "اضطراب، دل کی بے چینی، گہرا شک، تہمت", english: "Uneasiness, internal agitation, deep unsettling doubt, suspicion", type: "معتل اجوف یائی" },
      "و ق ي": { root: "و ق ي", urdu: "بچاؤ کرنا، ڈھال بنانا، ضرر سے حفاظت کرنا", english: "To protect, shield, safeguard from harm, preserve", type: "لفیف مفروق" }
    },
    ayahs: [
      {
        ayahNumber: 1,
        ayahKey: "1:1",
        arabicText: "بِسْمِ اللهِ الرَّحْمَٰنِ الرَّحِيمِ",
        urduTranslation: "اللہ کے نام سے جو نہایت مہربان، رحم فرمانے والا ہے۔",
        englishTranslation: "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
        words: [
          {
            word: "بِسْمِ",
            root: "س م و",
            wazn: "اِفْع (أصله سِمْو)",
            pos: "مرکب جار و مجرور",
            grammarUrdu: "جار و مجرور (بِـ + اسْم)، متعلق بمحذوف تقديره أبتدئ",
            grammarEnglish: "Preposition + Genitive Noun (Bi + Ism)",
            contextualUrdu: "کے نام سے",
            contextualEnglish: "In the name of",
            derivatives: [
              { word: "بِسْمِ", ayah: "1:1", contextPhrase: "بِسْمِ اللهِ الرَّحْمَٰنِ الرَّحِيمِ", meaningUr: "اللہ کے نام سے", meaningEn: "In the name of Allah" },
              { word: "السَّمَاءِ", ayah: "2:22", contextPhrase: "وَأَنزَلَ مِنَ السَّمَاءِ مَاءً", meaningUr: "اور آسمان سے پانی اتارا", meaningEn: "And sent down rain from the sky" },
              { word: "سَمَّيْتُمُوهَا", ayah: "12:40", contextPhrase: "أَسْمَاءً سَمَّيْتُمُوهَا أَنتُمْ وَآبَاؤُكُم", meaningUr: "چند نام ہیں جو تم نے اور تمہارے باپ دادا نے رکھ لیے", meaningEn: "Names which you have named, you and your fathers" },
              { word: "سَمِيًّا", ayah: "19:65", contextPhrase: "هَلْ تَعْلَمُ لَهُ سَمِيًّا", meaningUr: "کیا تیرے علم میں اس کا کوئی ہم نام ہے؟", meaningEn: "Do you know of any namesake unto Him?" }
            ]
          },
          {
            word: "اللهِ",
            root: "أ ل ه",
            wazn: "عَلَم (جامد / أصله الإِلَاه)",
            pos: "اسم ذات (علم)",
            grammarUrdu: "مضاف الیہ، مجرور بالکسرہ",
            grammarEnglish: "Proper Divine Noun, Genitive",
            contextualUrdu: "معبودِ برحق",
            contextualEnglish: "The One True God",
            derivatives: [
              { word: "اللهِ", ayah: "1:1", contextPhrase: "بِسْمِ اللهِ الرَّحْمَٰنِ الرَّحِيمِ", meaningUr: "اللہ (معبودِ برحق)", meaningEn: "Allah (The True God)" },
              { word: "إِلَٰهٌ", ayah: "2:163", contextPhrase: "وَإِلَٰهُكُمْ إِلَٰهٌ وَاحِدٌ", meaningUr: "اور تمہارا معبود ایک ہی معبود ہے", meaningEn: "And your deity is one Deity" },
              { word: "بِآلِهَتِنَا", ayah: "21:59", contextPhrase: "مَن فَعَلَ هَٰذَا بِآلِهَتِنَا", meaningUr: "ہمارے معبودوں کے ساتھ یہ کس نے کیا؟", meaningEn: "Who has done this to our gods?" }
            ]
          },
          {
            word: "الرَّحْمَٰنِ",
            root: "ر ح م",
            wazn: "فَعْلَان",
            pos: "صفت مشبہ",
            grammarUrdu: "نعت أولى لاسم الجلالة، مجرور بالکسرہ",
            grammarEnglish: "First Divine Attribute, Genitive",
            contextualUrdu: "بے حد وسیع رحمت والا",
            contextualEnglish: "The Entirely Merciful",
            derivatives: [
              { word: "الرَّحْمَٰنِ", ayah: "1:1", contextPhrase: "الرَّحْمَٰنِ الرَّحِيمِ", meaningUr: "بے پایاں رحمت والا", meaningEn: "The Boundlessly Merciful" },
              { word: "سَيَرْحَمُهُمُ", ayah: "9:71", contextPhrase: "أُولَٰئِكَ سَيَرْحَمُهُمُ اللهُ", meaningUr: "اللہ ضرور ان پر رحم فرمائے گا", meaningEn: "Allah will have mercy upon them" },
              { word: "الْأَرْحَامَ", ayah: "4:1", contextPhrase: "وَاتَّقُوا اللهَ الَّذِي تَسَاءَلُونَ بِهِ وَالْأَرْحَامَ", meaningUr: "اور رشتوں ناطوں کا پاس رکھو", meaningEn: "And fear Allah and respect the wombs/ties of kinship" },
              { word: "رَحْمَتَ", ayah: "2:218", contextPhrase: "أُولَٰئِكَ يَرْجُونَ رَحْمَتَ اللهِ", meaningUr: "وہ اللہ کی رحمت کے امیدوار ہیں", meaningEn: "They hope for the mercy of Allah" }
            ]
          },
          {
            word: "الرَّحِيمِ",
            root: "ر ح م",
            wazn: "فَعِيل",
            pos: "صفت مشبہ",
            grammarUrdu: "نعت ثانية لاسم الجلالة، مجرور بالکسرہ",
            grammarEnglish: "Second Divine Attribute, Genitive",
            contextualUrdu: "مسلسل رحم فرمانے والا",
            contextualEnglish: "The Especially Merciful",
            derivatives: [
              { word: "الرَّحِيمِ", ayah: "1:1", contextPhrase: "بِسْمِ اللهِ الرَّحْمَٰنِ الرَّحِيمِ", meaningUr: "ہمیشہ رحم کرنے والا", meaningEn: "The Constantly Merciful" },
              { word: "رَحِيمٌ", ayah: "2:218", contextPhrase: "وَاللهُ غَفُورٌ رَّحِيمٌ", meaningUr: "اور اللہ بخشنے والا رحم فرمانے والا ہے", meaningEn: "And Allah is Forgiving and Merciful" },
              { word: "ارْحَمْنَا", ayah: "2:286", contextPhrase: "وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا", meaningUr: "اور ہم سے درگزر فرما اور ہم پر رحم کر", meaningEn: "And pardon us; and forgive us; and have mercy upon us" }
            ]
          }
        ]
      },
      {
        ayahNumber: 2,
        ayahKey: "1:2",
        arabicText: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
        urduTranslation: "تمام تعریفیں اللہ ہی کے لیے ہیں جو تمام جہانوں کا پالنے والا ہے۔",
        englishTranslation: "All praise is due to Allah, Lord of all the worlds.",
        words: [
          {
            word: "الْحَمْدُ",
            root: "ح م د",
            wazn: "فَعْل",
            pos: "مصدر معرف باللام",
            grammarUrdu: "مبتدا، مرفوع بالضمہ",
            grammarEnglish: "Subject (Mubtada), Nominative",
            contextualUrdu: "تمام تعریفیں و شکر",
            contextualEnglish: "All praise and gratitude",
            derivatives: [
              { word: "الْحَمْدُ", ayah: "1:2", contextPhrase: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", meaningUr: "تمام تعریفیں اللہ کے لیے ہیں", meaningEn: "All praise belongs to Allah" },
              { word: "مَّحْمُودًا", ayah: "17:79", contextPhrase: "عَسَىٰ أَن يَبْعَثَكَ رَبُّكَ مَقَامًا مَّحْمُودًا", meaningUr: "کہ آپ کا رب آپ کو مقامِ محمود پر فائز کرے گا", meaningEn: "That your Lord will raise you to a praised station" },
              { word: "مُحَمَّدٌ", ayah: "3:144", contextPhrase: "وَمَا مُحَمَّدٌ إِلَّا رَسُولٌ", meaningUr: "اور محمد ﷺ تو بس ایک رسول ہیں", meaningEn: "Muhammad is not but a messenger" },
              { word: "الْحَامِدُونَ", ayah: "9:112", contextPhrase: "التَّائِبُونَ الْعَابِدُونَ الْحَامِدُونَ", meaningUr: "توبہ کرنے والے، بندگی کرنے والے، تعریف کرنے والے", meaningEn: "The repentant, the worshipers, the praisers" }
            ]
          },
          {
            word: "لِلَّهِ",
            root: "أ ل ه",
            wazn: "عَلَم (جامد)",
            pos: "مرکب جار و مجرور",
            grammarUrdu: "جار و مجرور (اللام + الله)، متعلق بمحذوف خبر",
            grammarEnglish: "Preposition + Proper Divine Noun, Semi-sentence as Predicate",
            contextualUrdu: "اللہ ہی کے لیے",
            contextualEnglish: "Belongs to Allah",
            derivatives: [
              { word: "لِلَّهِ", ayah: "1:2", contextPhrase: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", meaningUr: "اللہ ہی کے لیے", meaningEn: "Due to Allah" }
            ]
          },
          {
            word: "رَبِّ",
            root: "ر ب ب",
            wazn: "فَعْل",
            pos: "اسم / صفت مشبہ",
            grammarUrdu: "نعت لاسم الجلالة أو بدل، مجرور بالکسرہ",
            grammarEnglish: "Attribute/Apposition to Allah, Genitive",
            contextualUrdu: "پالنے والا، مربی",
            contextualEnglish: "Lord / Sustainer",
            derivatives: [
              { word: "رَبِّ", ayah: "1:2", contextPhrase: "رَبِّ الْعَالَمِينَ", meaningUr: "تمام جہانوں کا پالنے والا", meaningEn: "Lord of the worlds" },
              { word: "رَبَّانِيِّينَ", ayah: "3:79", contextPhrase: "كُونُوا رَبَّانِيِّينَ بِمَا كُنتُمْ تُعَلِّمُونَ الْكِتَابَ", meaningUr: "تم رب والے بن جاؤ اس لیے کہ تم کتاب سکھاتے ہو", meaningEn: "Be devout servants of the Lord because of what you teach" },
              { word: "رَبَائِبُكُمُ", ayah: "4:23", contextPhrase: "وَرَبَائِبُكُمُ اللَّاتِي فِي حُجُورِكُم", meaningUr: "اور تمہاری پرورش کردہ سوتیلی بیٹیاں جو تمہاری گود میں ہیں", meaningEn: "And your stepdaughters under your guardianship" },
              { word: "أَرْبَابًا", ayah: "9:31", contextPhrase: "اتَّخَذُوا أَحْبَارَهُمْ وَرُهْبَانَهُمْ أَرْبَابًا مِّن دُونِ اللهِ", meaningUr: "انہوں نے اپنے علماء اور درویشوں کو رب بنا لیا", meaningEn: "They took their rabbis and monks as lords besides Allah" }
            ]
          },
          {
            word: "الْعَالَمِينَ",
            root: "ع ل م",
            wazn: "فَاعَل + جمع مذكر سالم",
            pos: "اسم جمع (ملحق بجمع المذكر السالم)",
            grammarUrdu: "مضاف الیہ، مجرور بالیاء",
            grammarEnglish: "Possessive Noun (Mudaf Ilayh), Genitive by Ya",
            contextualUrdu: "تمام جہان",
            contextualEnglish: "All the worlds / realms",
            derivatives: [
              { word: "الْعَالَمِينَ", ayah: "1:2", contextPhrase: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", meaningUr: "تمام جہانوں کا پروردگار", meaningEn: "Lord of all realms" },
              { word: "عَلَّمَ", ayah: "2:31", contextPhrase: "وَعَلَّمَ آدَمَ الْأَسْمَاءَ كُلَّهَا", meaningUr: "اور اس نے آدم کو تمام نام سکھائے", meaningEn: "And He taught Adam the names - all of them" },
              { word: "عَلِيمٌ", ayah: "2:29", contextPhrase: "وَهُوَ بِكُلِّ شَيْءٍ عَلِيمٌ", meaningUr: "اور وہ ہر چیز کا خوب جاننے والا ہے", meaningEn: "And He is Knowing of all things" },
              { word: "يَعْلَمُونَ", ayah: "2:13", contextPhrase: "أَلَا إِنَّهُمْ هُمُ السُّفَهَاءُ وَلَٰكِن لَّا يَعْلَمُونَ", meaningUr: "خبردار! وہی بے وقوف ہیں لیکن وہ جانتے نہیں", meaningEn: "Unquestionably, it is they who are the foolish, but they know not" }
            ]
          }
        ]
      },
      {
        ayahNumber: 3,
        ayahKey: "1:3",
        arabicText: "الرَّحْمَٰنِ الرَّحِيمِ",
        urduTranslation: "نہایت مہربان، رحم فرمانے والا ہے۔",
        englishTranslation: "The Entirely Merciful, the Especially Merciful.",
        words: [
          {
            word: "الرَّحْمَٰنِ",
            root: "ر ح م",
            wazn: "فَعْلَان",
            pos: "صفت مشبہ",
            grammarUrdu: "نعت مجرورة بالکسرہ",
            grammarEnglish: "Attribute, Genitive",
            contextualUrdu: "بے حد وسیع رحمت والا",
            contextualEnglish: "The Entirely Merciful",
            derivatives: []
          },
          {
            word: "الرَّحِيمِ",
            root: "ر ح م",
            wazn: "فَعِيل",
            pos: "صفت مشبہ",
            grammarUrdu: "نعت مجرورة بالکسرہ",
            grammarEnglish: "Attribute, Genitive",
            contextualUrdu: "مسلسل رحم فرمانے والا",
            contextualEnglish: "The Especially Merciful",
            derivatives: []
          }
        ]
      },
      {
        ayahNumber: 4,
        ayahKey: "1:4",
        arabicText: "مَالِكِ يَوْمِ الدِّينِ",
        urduTranslation: "بدلے کے دن کا مالک ہے۔",
        englishTranslation: "Sovereign of the Day of Recompense.",
        words: [
          {
            word: "مَالِكِ",
            root: "م ل ك",
            wazn: "فَاعِل",
            pos: "اسم فاعل",
            grammarUrdu: "نعت لاسم الجلالة، مجرور بالکسرہ",
            grammarEnglish: "Active Participle / Attribute, Genitive",
            contextualUrdu: "مالک و حاکم",
            contextualEnglish: "Master / Sovereign",
            derivatives: [
              { word: "مَالِكِ", ayah: "1:4", contextPhrase: "مَالِكِ يَوْمِ الدِّينِ", meaningUr: "روزِ جزا کا مالک", meaningEn: "Sovereign of the Day of Recompense" },
              { word: "مُلْكُ", ayah: "2:107", contextPhrase: "أَلَمْ تَعْلَمْ أَنَّ اللهَ لَهُ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ", meaningUr: "آسمانوں اور زمین کی بادشاہت اللہ ہی کے لیے ہے", meaningEn: "To Allah belongs the dominion of the heavens and earth" },
              { word: "مَلِكًا", ayah: "2:246", contextPhrase: "ابْعَثْ لَنَا مَلِكًا نُّقَاتِلْ فِي سَبِيلِ اللهِ", meaningUr: "ہمارے لیے ایک بادشاہ مقرر کر دیں", meaningEn: "Appoint for us a king and we will fight" },
              { word: "تَمْلِكُ", ayah: "82:19", contextPhrase: "يَوْمَ لَا تَمْلِكُ نَفْسٌ لِّنَفْسٍ شَيْئًا", meaningUr: "جس دن کوئی جان کسی جان کے لیے کسی چیز کا اختیار نہ رکھے گی", meaningEn: "A Day when no soul will possess for another soul power to do anything" }
            ]
          },
          {
            word: "يَوْمِ",
            root: "ي و م",
            wazn: "فَعْل",
            pos: "اسم ظرف / مضاف",
            grammarUrdu: "مضاف الیہ برائے مالک، مجرور بالکسرہ",
            grammarEnglish: "Genitive Noun (Mudaf Ilayh)",
            contextualUrdu: "دن / دورانیہ",
            contextualEnglish: "Day / Period",
            derivatives: [
              { word: "يَوْمِ", ayah: "1:4", contextPhrase: "مَالِكِ يَوْمِ الدِّينِ", meaningUr: "جزا کا دن", meaningEn: "The Day of Recompense" },
              { word: "أَيَّامًا", ayah: "2:184", contextPhrase: "أَيَّامًا مَّعْدُودَاتٍ", meaningUr: "گنتی کے چند دن", meaningEn: "A limited number of days" },
              { word: "يَوْمَئِذٍ", ayah: "75:10", contextPhrase: "يَقُولُ الْإِنسَانُ يَوْمَئِذٍ أَيْنَ الْمَفَرُّ", meaningUr: "انسان اس دن کہے گا کہ بھاگنے کی جگہ کہاں ہے؟", meaningEn: "Man will say on that Day, 'Where is the escape?'" },
              { word: "الْيَوْمَ", ayah: "5:3", contextPhrase: "الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ", meaningUr: "آج میں نے تمہارے لیے تمہارا دین مکمل کر دیا", meaningEn: "This day I have perfected for you your religion" }
            ]
          },
          {
            word: "الدِّينِ",
            root: "د ي ن",
            wazn: "فِعْل",
            pos: "مصدر / اسم",
            grammarUrdu: "مضاف الیہ برائے یوم، مجرور بالکسرہ",
            grammarEnglish: "Genitive Noun (Mudaf Ilayh)",
            contextualUrdu: "جزا و سزا، بدلہ، حساب",
            contextualEnglish: "Recompense / Judgment",
            derivatives: [
              { word: "الدِّينِ", ayah: "1:4", contextPhrase: "مَالِكِ يَوْمِ الدِّينِ", meaningUr: "بدلہ اور حساب", meaningEn: "The Final Judgment" },
              { word: "الدِّينَ", ayah: "3:19", contextPhrase: "إِنَّ الدِّينَ عِندَ اللهِ الْإِسْلَامُ", meaningUr: "بیشک اللہ کے نزدیک دین اسلام ہی ہے", meaningEn: "Indeed, the religion in the sight of Allah is Islam" },
              { word: "لَمَدِينُونَ", ayah: "37:53", contextPhrase: "أَإِنَّا لَمَدِينُونَ", meaningUr: "کیا واقعی ہمیں جزا و سزا دی جائے گی؟", meaningEn: "Are we indeed to be judged and recompensed?" },
              { word: "تَدَايَنتُم", ayah: "2:282", contextPhrase: "إِذَا تَدَايَنتُم بِدَيْنٍ إِلَىٰ أَجَلٍ مُّسَمًّى فَاكْتُبُوهُ", meaningUr: "جب تم آپس میں قرض کا لین دین کرو تو اسے لکھ لیا کرو", meaningEn: "When you contract a debt for a specified term, write it down" }
            ]
          }
        ]
      },
      {
        ayahNumber: 5,
        ayahKey: "1:5",
        arabicText: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
        urduTranslation: "ہم تیری ہی بندگی کرتے ہیں اور تجھ ہی سے مدد مانگتے ہیں۔",
        englishTranslation: "It is You we worship and You we ask for help.",
        words: [
          {
            word: "نَعْبُدُ",
            root: "ع ب د",
            wazn: "نَفْعُلُ (باب نصر)",
            pos: "فعل مضارع",
            grammarUrdu: "فعل مضارع مرفوع، والفاعل ضمير مستتر تقديره نحن",
            grammarEnglish: "Present Verb, 1st Plural Subject implied",
            contextualUrdu: "ہم بندگی کرتے ہیں",
            contextualEnglish: "We worship exclusively",
            derivatives: [
              { word: "نَعْبُدُ", ayah: "1:5", contextPhrase: "إِيَّاكَ نَعْبُدُ", meaningUr: "ہم تیری ہی بندگی کرتے ہیں", meaningEn: "It is You we worship" },
              { word: "عَبْدِنَا", ayah: "2:23", contextPhrase: "وَإِن كُنتُمْ فِي رَيْبٍ مِّمَّا نَزَّلْنَا عَلَىٰ عَبْدِنَا", meaningUr: "جو کچھ ہم نے اپنے بندے پر اتارا", meaningEn: "What We have sent down upon Our servant" },
              { word: "عِبَادِي", ayah: "2:186", contextPhrase: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ", meaningUr: "اور جب میرے بندے آپ سے میرے متعلق پوچھیں", meaningEn: "And when My servants ask you concerning Me" },
              { word: "عَابِدُونَ", ayah: "2:138", contextPhrase: "وَنَحْنُ لَهُ عَابِدُونَ", meaningUr: "اور ہم اسی کی بندگی کرنے والے ہیں", meaningEn: "And we are worshippers of Him alone" }
            ]
          },
          {
            word: "نَسْتَعِينُ",
            root: "ع و ن",
            wazn: "نَسْتَفْعِلُ (باب استفعال)",
            pos: "فعل مضارع (Form X)",
            grammarUrdu: "فعل مضارع مرفوع، والفاعل ضمير مستتر تقديره نحن",
            grammarEnglish: "Present Verb (Form X: seeking aid), 1st Plural",
            contextualUrdu: "ہم مدد مانگتے ہیں",
            contextualEnglish: "We ask for help",
            derivatives: [
              { word: "نَسْتَعِينُ", ayah: "1:5", contextPhrase: "وَإِيَّاكَ نَسْتَعِينُ", meaningUr: "اور تجھ ہی سے مدد مانگتے ہیں", meaningEn: "And You alone we ask for help" },
              { word: "اسْتَعِينُوا", ayah: "2:45", contextPhrase: "وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ", meaningUr: "اور صبر اور نماز کے ذریعے مدد طلب کرو", meaningEn: "And seek help through patience and prayer" },
              { word: "تَعَاوَنُوا", ayah: "5:2", contextPhrase: "وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ", meaningUr: "اور نیکی اور پرہیزگاری پر باہم ایک دوسرے کی مدد کرو", meaningEn: "And cooperate in righteousness and piety" },
              { word: "الْمُسْتَعَانُ", ayah: "12:18", contextPhrase: "وَاللهُ الْمُسْتَعَانُ عَلَىٰ مَا تَصِفُونَ", meaningUr: "اور تم جو بیان کرتے ہو اس پر اللہ ہی سے مدد مانگی جا سکتی ہے", meaningEn: "And Allah is the One sought for help against what you describe" }
            ]
          }
        ]
      },
      {
        ayahNumber: 6,
        ayahKey: "1:6",
        arabicText: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
        urduTranslation: "ہمیں سیدھے راستے کی ہدایت فرما۔",
        englishTranslation: "Guide us to the straight path.",
        words: [
          {
            word: "اهْدِنَا",
            root: "ه د ي",
            wazn: "اِفْعِلْ (باب ضرب)",
            pos: "فعل امر (دعا) + ضمير مفعول",
            grammarUrdu: "فعل دعاء مبني على حذف حرف العلة، و(نا) مفعول به أول",
            grammarEnglish: "Imperative Verb (Prayer) + 1st Plural Direct Object",
            contextualUrdu: "ہمیں ہدایت فرما",
            contextualEnglish: "Guide us",
            derivatives: [
              { word: "اهْدِنَا", ayah: "1:6", contextPhrase: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ", meaningUr: "ہمیں سیدھا راستہ دکھا", meaningEn: "Guide us to the straight path" },
              { word: "هُدًى", ayah: "2:2", contextPhrase: "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ", meaningUr: "پرہیزگاروں کے لیے ہدایت ہے", meaningEn: "A guidance for the conscious of Allah" },
              { word: "الْمُهْتَدُونَ", ayah: "2:157", contextPhrase: "وَأُولَٰئِكَ هُمُ الْمُهْتَدُونَ", meaningUr: "اور یہی ہدایت یافتہ ہیں", meaningEn: "And it is they who are the rightly guided" },
              { word: "بِهَدِيَّةٍ", ayah: "27:35", contextPhrase: "وَإِنِّي مُرْسِلَةٌ إِلَيْهِم بِهَدِيَّةٍ", meaningUr: "اور میں ان کی طرف ایک تحفہ بھیجتی ہوں", meaningEn: "And indeed, I will send to them a gift" }
            ]
          },
          {
            word: "الصِّرَاطَ",
            root: "ص ر ط",
            wazn: "فِعَال",
            pos: "اسم",
            grammarUrdu: "مفعول به ثانٍ، منصوب بالفتحہ",
            grammarEnglish: "Second Direct Object, Accusative",
            contextualUrdu: "سیدھا اور کشادہ راستہ",
            contextualEnglish: "The Path",
            derivatives: [
              { word: "الصِّرَاطَ", ayah: "1:6", contextPhrase: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ", meaningUr: "سیدھا اور کشادہ راستہ", meaningEn: "The Straight Path" },
              { word: "صِرَاطِي", ayah: "6:153", contextPhrase: "وَأَنَّ هَٰذَا صِرَاطِي مُسْتَقِيمًا فَاتَّبِعُوهُ", meaningUr: "اور یہ کہ یہ میرا سیدھا راستہ ہے لہٰذا اس کی پیروی کرو", meaningEn: "And this is My path, which is straight, so follow it" },
              { word: "صِرَاطَكَ", ayah: "7:16", contextPhrase: "لَأَقْعُدَنَّ لَهُمْ صِرَاطَكَ الْمُسْتَقِيمَ", meaningUr: "میں ضرور ان کے لیے تیری سیدھی راہ پر بیٹھوں گا", meaningEn: "I will surely sit in wait for them on Your straight path" }
            ]
          },
          {
            word: "الْمُسْتَقِيمَ",
            root: "ق و م",
            wazn: "مُسْتَفْعِل (باب استفعال)",
            pos: "اسم فاعل / صفت",
            grammarUrdu: "نعت للصراط، منصوب بالفتحہ",
            grammarEnglish: "Adjective (Active Participle Form X), Accusative",
            contextualUrdu: "بالکل سیدھا",
            contextualEnglish: "The Straight / Upright",
            derivatives: [
              { word: "الْمُسْتَقِيمَ", ayah: "1:6", contextPhrase: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ", meaningUr: "سیدھا اور مضبوط راستہ", meaningEn: "The Straight / Upright Path" },
              { word: "يُقِيمُونَ", ayah: "2:3", contextPhrase: "الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ", meaningUr: "جو غیب پر ایمان لاتے ہیں اور نماز قائم کرتے ہیں", meaningEn: "Who believe in the unseen, establish prayer" },
              { word: "الْقَيُّومُ", ayah: "2:255", contextPhrase: "اللهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ", meaningUr: "وہ زندہ ہے سب کا تھامنے والا", meaningEn: "The Ever-Living, the Sustainer of all existence" },
              { word: "الْقِيَامَةِ", ayah: "2:85", contextPhrase: "وَيَوْمَ الْقِيَامَةِ يُرَدُّونَ إِلَىٰ أَشَدِّ الْعَذَابِ", meaningUr: "اور قیامت کے دن وہ سخت ترین عذاب کی طرف لوٹائے جائیں گے", meaningEn: "And on the Day of Resurrection they will be sent back to the severest punishment" }
            ]
          }
        ]
      },
      {
        ayahNumber: 7,
        ayahKey: "1:7",
        arabicText: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
        urduTranslation: "ان لوگوں کا راستہ جن پر تو نے انعام فرمایا، نہ کہ ان کا جن پر غضب ہوا اور نہ ہی گمراہوں کا۔",
        englishTranslation: "The path of those upon whom You have bestowed favor, not of those who have evoked anger or of those who are astray.",
        words: [
          {
            word: "صِرَاطَ",
            root: "ص ر ط",
            wazn: "فِعَال",
            pos: "اسم",
            grammarUrdu: "بدل من الصراط الأول، منصوب بالفتحہ",
            grammarEnglish: "Apposition (Badal), Accusative",
            contextualUrdu: "راستہ",
            contextualEnglish: "The path of",
            derivatives: []
          },
          {
            word: "أَنْعَمْتَ",
            root: "ن ع م",
            wazn: "أَفْعَلْتَ (باب افعال)",
            pos: "فعل ماضی (Form IV)",
            grammarUrdu: "فعل ماضی مبني على السكون، والتاء فاعل",
            grammarEnglish: "Past Verb (Form IV), 2nd Masc. Singular Subject",
            contextualUrdu: "تو نے انعام فرمایا",
            contextualEnglish: "You bestowed favor",
            derivatives: [
              { word: "أَنْعَمْتَ", ayah: "1:7", contextPhrase: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ", meaningUr: "جن پر تو نے انعام فرمایا", meaningEn: "Those upon whom You bestowed favor" },
              { word: "نِعْمَتِيَ", ayah: "2:40", contextPhrase: "يَا بَنِي إِسْرَائِيلَ اذْكُرُوا نِعْمَتِيَ الَّتِي أَنْعَمْتُ عَلَيْكُمْ", meaningUr: "اے بنی اسرائیل! میری اس نعمت کو یاد کرو", meaningEn: "O Children of Israel, remember My favor" },
              { word: "نَعِيمٍ", ayah: "56:89", contextPhrase: "فَرَوْحٌ وَرَيْحَانٌ وَجَنَّتُ نَعِيمٍ", meaningUr: "تو اس کے لیے راحت، خوشبو اور نعمتوں والی جنت ہے", meaningEn: "Then for him is rest and satisfaction and a garden of pleasure" },
              { word: "الْأَنْعَامِ", ayah: "6:142", contextPhrase: "وَمِنَ الْأَنْعَامِ حَمُولَةً وَفَرْشًا", meaningUr: "اور مویشیوں میں سے بوجھ اٹھانے والے جانور پیدا کیے", meaningEn: "And of the cattle are some for burden and some for meat" }
            ]
          },
          {
            word: "غَيْرِ",
            root: "غ ي ر",
            wazn: "فَعْل",
            pos: "اسم مغايرة (بدل / نعت)",
            grammarUrdu: "بدل من (الَّذِينَ) أو نعت له، مجرور بالکسرہ",
            grammarEnglish: "Apposition or Attribute to (alladhina), Genitive",
            contextualUrdu: "نہ کہ / سوائے",
            contextualEnglish: "Not of / other than",
            derivatives: [
              { word: "غَيْرِ", ayah: "1:7", contextPhrase: "غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ", meaningUr: "نہ کہ ان کا جن پر غضب ہوا", meaningEn: "Not of those who evoked anger" },
              { word: "يُغَيِّرُوا", ayah: "13:11", contextPhrase: "حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ", meaningUr: "جب تک کہ وہ خود اپنی حالت نہ بدل لیں", meaningEn: "Until they change what is in themselves" }
            ]
          },
          {
            word: "الْمَغْضُوبِ",
            root: "غ ض ب",
            wazn: "مَفْعُول",
            pos: "اسم مفعول",
            grammarUrdu: "مضاف الیہ برائے غیر، مجرور بالکسرہ",
            grammarEnglish: "Passive Participle, Genitive",
            contextualUrdu: "جن پر غضب ہوا",
            contextualEnglish: "Those who incurred wrath",
            derivatives: [
              { word: "الْمَغْضُوبِ", ayah: "1:7", contextPhrase: "غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ", meaningUr: "جن پر غضب نازل ہوا", meaningEn: "Those who earned wrath" },
              { word: "غَضِبَ", ayah: "4:93", contextPhrase: "وَغَضِبَ اللهُ عَلَيْهِ وَلَعَنَهُ", meaningUr: "اور اللہ اس پر غضبناک ہوا اور اس پر لعنت کی", meaningEn: "And Allah has become angry with him and has cursed him" },
              { word: "بِغَضَبٍ", ayah: "2:61", contextPhrase: "وَبَاءُوا بِغَضَبٍ مِّنَ اللهِ", meaningUr: "اور وہ اللہ کا غضب لے کر لوٹے", meaningEn: "And they drew on themselves wrath from Allah" },
              { word: "غَضْبَانَ", ayah: "7:150", contextPhrase: "وَلَمَّا رَجَعَ مُوسَىٰ إِلَىٰ قَوْمِهِ غَضْبَانَ أَسِفًا", meaningUr: "اور جب موسیٰ اپنی قوم کی طرف غصے اور افسوس میں بھرے ہوئے لوٹے", meaningEn: "And when Moses returned to his people, angry and grieved" }
            ]
          },
          {
            word: "الضَّالِّينَ",
            root: "ض ل ل",
            wazn: "فَاعِلِين",
            pos: "اسم فاعل (جمع مذکر سالم)",
            grammarUrdu: "معطوف على المغضوب، مجرور بالیاء",
            grammarEnglish: "Active Participle Plural, Genitive by Ya",
            contextualUrdu: "بھٹک جانے والے",
            contextualEnglish: "Those who are astray",
            derivatives: [
              { word: "الضَّالِّينَ", ayah: "1:7", contextPhrase: "وَلَا الضَّالِّينَ", meaningUr: "اور نہ ہی گمراہوں کا راستہ", meaningEn: "Nor of those who are astray" },
              { word: "ضَلَّ", ayah: "2:108", contextPhrase: "فَقَدْ ضَلَّ سَوَاءَ السَّبِيلِ", meaningUr: "تو وہ یقیناً سیدھی راہ سے بھٹک گیا", meaningEn: "He has certainly strayed from the right path" },
              { word: "أَضَلَّ", ayah: "4:88", contextPhrase: "أَتُرِيدُونَ أَن تَهْدُوا مَنْ أَضَلَّ اللهُ", meaningUr: "کیا تم اسے ہدایت دینا چاہتے ہو جسے اللہ نے گمراہ کر دیا؟", meaningEn: "Do you wish to guide him whom Allah has sent astray?" },
              { word: "ضَلَالٍ", ayah: "3:164", contextPhrase: "وَإِن كَانُوا مِن قَبْلُ لَفِي ضَلَالٍ مُّبِينٍ", meaningUr: "اگرچہ وہ اس سے پہلے کھلی گمراہی میں تھے", meaningEn: "Although they were before in manifest error" }
            ]
          }
        ]
      }
    ]
  },

  // ==========================================
  // SURAH 2: AL-BAQARAH (2:1-2)
  // ==========================================
  {
    surahNumber: 2,
    surahNameArabic: "البقرة",
    surahNameEnglish: "Al-Baqarah (The Cow)",
    ayahRange: "1-2",
    allRoots: [
      "ك ت ب", "ر ي ب", "ه د ي", "و ق ي"
    ],
    rootsDictionary: {}, // Handled by master roots dictionary
    ayahs: [
      {
        ayahNumber: 1,
        ayahKey: "2:1",
        arabicText: "الٓمٓ",
        urduTranslation: "الف، لام، میم (حروفِ مقطعات)۔",
        englishTranslation: "Alif, Lam, Meem.",
        words: [
          {
            word: "الٓمٓ",
            root: "—",
            wazn: "—",
            pos: "حروف مقطعة",
            grammarUrdu: "حروف مقطعة لا محل لها من الإعراب مبنية على السكون",
            grammarEnglish: "Disconnected Letters, Indeclinable with no grammatical place",
            contextualUrdu: "الف، لام، میم",
            contextualEnglish: "Alif, Lam, Meem",
            derivatives: []
          }
        ]
      },
      {
        ayahNumber: 2,
        ayahKey: "2:2",
        arabicText: "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ",
        urduTranslation: "یہ وہ کتاب ہے جس میں کوئی شک نہیں، پرہیزگاروں کے لیے ہدایت ہے۔",
        englishTranslation: "This is the Book about which there is no doubt, a guidance for those conscious of Allah.",
        words: [
          {
            word: "الْكِتَابُ",
            root: "ك ت ب",
            wazn: "فِعَال",
            pos: "اسم / مصدر بمعنی مفعول",
            grammarUrdu: "بدل من اسم الإشارة (ذَٰلِكَ) أو خبره، مرفوع بالضمہ",
            grammarEnglish: "Apposition or Predicate, Nominative",
            contextualUrdu: "وہ عظیم کتاب (قرآن)",
            contextualEnglish: "The Book (The Qur'an)",
            derivatives: [
              { word: "الْكِتَابُ", ayah: "2:2", contextPhrase: "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ", meaningUr: "یہ وہ عظیم کتاب ہے", meaningEn: "This is the Book" },
              { word: "كُتِبَ", ayah: "2:183", contextPhrase: "كُتِبَ عَلَيْكُمُ الصِّيَامُ", meaningUr: "تم پر روزے فرض کیے گئے", meaningEn: "Fasting has been prescribed for you" },
              { word: "فَاكْتُبُوهُ", ayah: "2:282", contextPhrase: "إِذَا تَدَايَنتُم بِدَيْنٍ إِلَىٰ أَجَلٍ مُّسَمًّى فَاكْتُبُوهُ", meaningUr: "تو اسے لکھ لیا کرو", meaningEn: "Then write it down" },
              { word: "كَاتِبٌ", ayah: "2:282", contextPhrase: "وَلْيَكْتُب بَّيْنَكُمْ كَاتِبٌ بِالْعَدْلِ", meaningUr: "اور چاہیے کہ کوئی لکھنے والا تمہارے درمیان انصاف سے لکھے", meaningEn: "And let a scribe write between you in justice" }
            ]
          },
          {
            word: "رَيْبَ",
            root: "ر ي ب",
            wazn: "فَعْل",
            pos: "اسم نكرة",
            grammarUrdu: "اسم (لَا) النافية للجنس، مبني على الفتح في محل نصب",
            grammarEnglish: "Noun of Absolute Negation (La), indeclinable with Fatha",
            contextualUrdu: "کوئی شک و شبہ",
            contextualEnglish: "Any doubt or suspicion",
            derivatives: [
              { word: "رَيْبَ", ayah: "2:2", contextPhrase: "لَا رَيْبَ ۛ فِيهِ", meaningUr: "اس میں کسی شک کی گنجائش نہیں", meaningEn: "There is no doubt in it" },
              { word: "رَيْبٍ", ayah: "2:23", contextPhrase: "وَإِن كُنتُمْ فِي رَيْبٍ مِّمَّا نَزَّلْنَا عَلَىٰ عَبْدِنَا", meaningUr: "اور اگر تم اس کلام میں شک رکھتے ہو جو ہم نے اتارا", meaningEn: "And if you are in doubt about what We have sent down" },
              { word: "ارْتَابُوا", ayah: "24:50", contextPhrase: "أَفِي قُلُوبِهِم مَّرَضٌ أَمِ ارْتَابُوا", meaningUr: "کیا ان کے دلوں میں بیماری ہے یا وہ شک میں پڑ گئے؟", meaningEn: "Is there disease in their hearts or have they doubted?" },
              { word: "مُرِيبٍ", ayah: "11:62", contextPhrase: "وَإِنَّنَا لَفِي شَكٍّ مِّمَّا تَدْعُونَا إِلَيْهِ مُرِيبٍ", meaningUr: "اور جس کی طرف تم ہمیں بلاتے ہو ہم اس سے سخت بے چین کن شک میں ہیں", meaningEn: "And indeed we are in disquieting doubt about that to which you invite us" }
            ]
          },
          {
            word: "هُدًى",
            root: "ه د ي",
            wazn: "فُعَل",
            pos: "مصدر / اسم",
            grammarUrdu: "خبر ثانٍ للمبتدأ (أو حال)، مرفوع بضمة مقدرة",
            grammarEnglish: "Predicate (or Circumstantial Hal), Nominative with implied Dammah",
            contextualUrdu: "سرتاپا ہدایت و رہنمائی",
            contextualEnglish: "Pure guidance",
            derivatives: [
              { word: "هُدًى", ayah: "2:2", contextPhrase: "هُدًى لِّلْمُتَّقِينَ", meaningUr: "پرہیزگاروں کے لیے ہدایت ہے", meaningEn: "A guidance for the conscious of Allah" },
              { word: "اهْدِنَا", ayah: "1:6", contextPhrase: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ", meaningUr: "ہمیں سیدھا راستہ دکھا", meaningEn: "Guide us to the straight path" },
              { word: "يَهْدِي", ayah: "2:142", contextPhrase: "يَهْدِي مَن يَشَاءُ إِلَىٰ صِرَاطٍ مُّسْتَقِيمٍ", meaningUr: "وہ جسے چاہتا ہے سیدھے راستے کی ہدایت دیتا ہے", meaningEn: "He guides whom He wills to a straight path" },
              { word: "الْهُدَىٰ", ayah: "2:185", contextPhrase: "هُدًى لِّلنَّاسِ وَبَيِّنَاتٍ مِّنَ الْهُدَىٰ وَالْفُرْقَانِ", meaningUr: "لوگوں کے لیے رہنمائی اور واضح دلائل", meaningEn: "Guidance for the people and clear proofs of guidance" }
            ]
          },
          {
            word: "لِّلْمُتَّقِينَ",
            root: "و ق ي",
            wazn: "مُفْتَعِلِين (باب افتعال)",
            pos: "اسم فاعل (جمع مذکر سالم)",
            grammarUrdu: "جار و مجرور (اللام + المتَّقِين)، مجرور بالیاء",
            grammarEnglish: "Preposition + Active Participle Plural (Form VIII), Genitive by Ya",
            contextualUrdu: "تقویٰ اختیار کرنے والے / پرہیزگار",
            contextualEnglish: "Those conscious of Allah / The Righteous",
            derivatives: [
              { word: "لِّلْمُتَّقِينَ", ayah: "2:2", contextPhrase: "هُدًى لِّلْمُتَّقِينَ", meaningUr: "پرہیزگاروں کے لیے ہدایت", meaningEn: "A guidance for the god-fearing" },
              { word: "تَتَّقُونَ", ayah: "2:21", contextPhrase: "اعْبُدُوا رَبَّكُمُ الَّذِي خَلَقَكُمْ وَالَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ", meaningUr: "اپنے رب کی بندگی کرو تاکہ تم پرہیزگار بن جاؤ", meaningEn: "Worship your Lord that you may become righteous" },
              { word: "التَّقْوَىٰ", ayah: "2:197", contextPhrase: "وَتَزَوَّدُوا فَإِنَّ خَيْرَ الزَّادِ التَّقْوَىٰ", meaningUr: "اور زادِ راہ لے لو، اور بہترین زادِ راہ تقویٰ ہے", meaningEn: "And take provisions, but indeed, the best provision is Taqwa" },
              { word: "وَقِنَا", ayah: "2:201", contextPhrase: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ", meaningUr: "اور ہمیں آگ کے عذاب سے بچا لے", meaningEn: "And protect us from the punishment of the Fire" }
            ]
          }
        ]
      }
    ]
  }
];
