VERIFICATION REPORT — Quranic Arabic Roots (Top 1642)
Generated: 2026-10-09; corrected 2026-10-14 and 2026-10-15 (see the CORRECTIONS sections below)

SOURCES (all primary, no AI-generated source data)
1. Quranic Arabic Corpus, morphology v0.4 (Kais Dukes, University of Leeds, GPL)
   - provides: root, lemma, part of speech for every word of the Quran.
   - file integrity: header/copyright block intact; 128,219 segment records parsed.
2. Tanzil Quran text (Uthmani script, CC BY 3.0) — the Arabic text shown in the app.
3. Tanzil Urdu translation — Fateh Muhammad Jalandhari (ayah-level, shown under each verse).
4. Word-by-word references used ONLY to cross-check the curated glosses:
   English — Dr. Shehnaz Shaikh & Ms. Kausar Khatri; Urdu — Dr. Farhat Hashmi (via QuranWBW).

STRUCTURAL VERIFICATION (automated, full Quran)
- Words parsed from the Corpus: 77,429 — matches the documented Corpus size exactly.
- Ayahs: 6,236 across 114 surahs — matches Tanzil metadata.
- Every Corpus word was aligned to the Tanzil text word-by-word and the consonant
  skeletons compared: 77,423 of 77,429 words identical (99.99%).
- The 6 residual differences are documented tokenisation/orthography conventions,
  not errors: 'ba'da-ma' written as one token in the Corpus vs two in Tanzil (3 cases),
  a dagger-alif placement variant in 12:39 and 12:41 (2 cases), and 'Il-Yasin' spacing
  in 37:130 (1 case).
- Distinct roots found in the Quran: 1,642. All 1642 roots account for
  49,968 root-tagged word occurrences.
- Counting convention: root totals count a token under every root it contains,
  matching the Corpus's published root dictionary. Exactly one token in the
  Quran carries two roots: (20:94:2) 'ya-bna-umma' (O son of my mother),
  which fuses ibn (root b-n-y) with umm (root '-m-m). An independent audit of
  the Top 100 file (2026-10-09) found that a single-root-per-word count had
  reported b-n-y as 183 instead of the Corpus's 184; this has been corrected,
  and all 1,642 root totals were re-checked under the Corpus convention —
  b-n-y was the only affected root. With b-n-y and h-y-y both at 184, the
  stated tie-break (order of first occurrence) puts b-n-y first (2:22, before
  h-y-y at 2:26); ranks 53 and 54 were corrected on 2026-10-14. An earlier
  version of this note said 'no rankings changed' — that was incorrect for
  this tied pair.
- Spurious Corpus function-word lemmas excluded (they are not derived words of
  any root): 'ma' tagged under root b-'-d inside 'ba'dama', and the same 'ma'
  tagged under root b-'-s inside 'bi'sama'.

SHIPPED DATA VERIFICATION
- Roots shipped: 1642. Derived words shipped: 3622 (up to 4 most frequent distinct
  derived words per root; fewer where the Quran itself has fewer).
- 3621 of the 3622 shipped example words are verified Corpus<->Tanzil matches,
  and every verse reference (surah:ayah:word) comes directly from the Corpus annotation.
- One shipped example was manually adjudicated: the dual word 'ya sahibay' at 12:39
  (root s-H-b). The Corpus transcribes the alif of 'sahib' with a maddah-letter that
  its skeleton comparison counts differently, while Tanzil writes the same word with
  a dagger alif. The displayed word, its reference and its meaning are the standard
  ones; only the automated letter comparison flagged the spelling convention.
- Every example word was machine-located inside its printed ayah text: 3622/3622.
- Occurrence counts are computed from the Corpus, not copied from secondary sources.
- Regression check: apart from the corrections itemised under CORRECTIONS
  (2026-10-14) below, every root and derived word is identical in content to
  the previously shipped complete 1642-root dataset (which itself preserved
  the earlier batches unchanged apart from the documented b-n-y correction
  and the two blind-audit enrichments documented in AUDIT_PASS.md). The
  regression comparison classifies each change by category and reports no
  unexplained differences.

CORRECTIONS (2026-10-14) — following an independent audit of the Top 1000 dataset
- Every audit finding was re-checked against the Corpus and Tanzil files
  before any change was made. The audit's confirmations matched this
  project's own records: all root totals, all derived-word occurrence
  counts, all example locations, and all verse texts and Urdu verse
  translations are correct as shipped.
- Ranks 53/54 swapped (b-n-y before h-y-y) — see the counting note above.
- Lemma display: 12 lemma forms carried Corpus lemma-string conventions
  into the display: a homograph digit (e.g. the '2' in Sa`liH2) in 10, and
  two annotation marks written as ASCII punctuation in 2. The digits are
  stripped and the marks are now shown in Arabic (U+06E5, U+06E6).
- Root display: a root radical is never a plain alif; hamza radicals are
  now written consistently with hamza (74 roots, e.g. '-s-l is now shown
  with hamza on the first radical).
- Derived-word selection: lemmas are now ranked by their total frequency
  across all parts of speech, as the stated rule requires (the earlier
  ranking used per-part-of-speech counts, which could displace a lemma
  whose occurrences are split across two parts of speech). 18 roots
  gained a more frequent word — 16 replacing a rarer one and 2 gaining a
  fourth word (b-'-d and b-'-s) — and in 36 further roots the words were
  re-ordered to match lemma frequency. No other root's words changed.
- Seven gloss corrections: 'haSirat' (h-s-r) now covers both of its
  Quranic senses (constricted, of the chest, 4:90; besiege, 9:5) and its
  transliteration is corrected; 'yalo' (l-w-y) and 'yafojura' (f-j-r)
  likewise cover both of their senses; 'kawa'ib' (k-'-b) is corrected to
  'full-breasted maidens' (the earlier gloss was the meaning of 'atrab',
  the next word in 78:33); three Urdu glosses corrected (jamil: the word
  for 'grateful' removed; farash: 'locusts' removed — farash are moths;
  zafir: a stray space removed).
- Surah 111 is now named as in Tanzil's metadata: Al-Masad, 'The Palm
  Fibre' (Al-Lahab is the alternate name).
- Lemma citation forms: some Corpus lemma strings are cited in a
  shortened stem form (16 derived words, e.g. the lemma shown for
  'laqiya' is the Corpus's own shortened citation). lemma_ar reproduces
  the Corpus citation form exactly; the wording 'dictionary form' has
  been replaced by 'Corpus citation form' in the README and data header.
- App fixes shipped with this correction: the per-word count is labelled
  'lemma occurs Nx'; Arabic search normalises hamza forms and strips
  diacritics; the example word is highlighted by its Corpus word position
  (previously by letter match, which could also highlight a second word
  with the same letters — 28 examples); saved settings are read with
  error guards so a browser that blocks storage still shows the roots;
  the browse list renders incrementally (100 roots at a time).

CORRECTIONS (2026-10-15) — following an independent audit of roots 1001-1642
- The audit confirmed this range correct: all root totals, all 758
  derived-word counts, all example locations, ayah texts and Urdu verse
  translations match the Corpus and Tanzil. Its items were re-checked
  against the sources before any change was made.
- Lemma display (taa marbuta): the Corpus cites 22 feminine nouns with a
  final 't' — the spelling the word takes in construct state — where the
  dictionary citation form ends in taa marbuta. lemma_ar now shows the
  taa-marbuta form for these 22 (4 in roots 1001-1642, 18 in the first
  1000). The audit listed 20; a full-dataset scan found 2 more of the same
  class ('umniyyah', rank 390, and 'fi'ah', rank 552). Feminine sound
  plurals in -'at and words genuinely ending in 't' (mawt 'death', bayt
  'house', 'ukht 'sister', waqt 'time') are unchanged.
- One gloss corrected: 'yusjaru' (s-j-r, 40:72) now reads 'to be set
  ablaze, burned' (it previously said 'to be thrust into the Fire',
  which describes the fate, not the verb).
- Five lemmas (ranks 1042, 1171, 1199, 1258, 1324) write the hamza with a
  tatweel + hamza spelling; the audit confirms this is an equivalent
  spelling of the same words. No change.
- The audit's integration note (loading two data files side by side)
  does not apply to the shipped app: the app has always contained all
  1,642 roots in a single data.js. The roots 1001-1642 file was a
  verification extract only.

GLOSS VERIFICATION (English/Urdu word meanings)
- Meanings were curated from the Corpus lemma data and classical usage, then compared
  against the published word-by-word references above at each example occurrence.
- Automated agreement (exact content-token match: at least one-third of the shipped
  gloss's content words also appear in the reference's rendering at that occurrence):
  2251/3622 overall (2225/3580 for the first 1600 roots, 26/42 for roots 1601-1642).
  This automated test is deliberately strict: it scores inflected renderings as
  disagreements (e.g. reference 'and counted them' vs dictionary gloss 'to count').
- Every case below that threshold was individually reviewed by hand: each one is a
  contextual/inflected rendering in the reference, a pronoun/particle difference, or
  a context-specific sense of a word whose core meaning shipped here is the standard
  dictionary one. No gloss errors were found.
- Note: an earlier summary of this audit quoted a higher automated percentage from a
  variant script that was not preserved; the figures above are the reproducible ones,
  computed by build/stage_c18.py and stored in build/audit_rows1642.json.

KNOWN LIMITATIONS
- Glosses give the core dictionary meaning of each derived word; a word's exact shade
  in a specific verse can be narrower — the full verse and its Urdu translation are
  shown with every word so learners can see it in context.
- Root 'basic meanings' are concise summaries of each root's Quranic usage.
