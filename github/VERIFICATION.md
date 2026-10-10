VERIFICATION REPORT — Quranic Arabic Roots (Top 100)
Generated: 2026-10-09

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
- Distinct roots found in the Quran: 1,642. The top 100 roots account for
  30,227 root-tagged word occurrences.
- One spurious Corpus lemma ('ma' tagged under root b-'-d in 'ba'dama') was excluded.

SHIPPED DATA VERIFICATION
- Roots shipped: 100. Derived words shipped: 358 (up to 4 most frequent distinct
  derived words per root; fewer where the Quran itself has fewer).
- Every shipped example word (358/358) is a verified Corpus<->Tanzil match, and its
  verse reference (surah:ayah:word) comes directly from the Corpus annotation.
- Every example word was machine-located inside its printed ayah text: 358/358.
- Occurrence counts are computed from the Corpus, not copied from secondary sources.

GLOSS VERIFICATION (English/Urdu word meanings)
- Meanings were curated from the Corpus lemma data and classical usage, then compared
  against the published word-by-word references above at each example occurrence.
- Automated stemmed-token agreement for English glosses: 281/358 (78.5%).
- All remaining cases were individually reviewed: every one is a contextual/inflected
  rendering in the reference (e.g. reference 'He said' vs dictionary gloss 'to say'),
  a pronoun/particle difference, or a context-specific sense of a word whose core
  meaning shipped here is the standard dictionary one. No gloss errors were found.

KNOWN LIMITATIONS
- Glosses give the core dictionary meaning of each derived word; a word's exact shade
  in a specific verse can be narrower — the full verse and its Urdu translation are
  shown with every word so learners can see it in context.
- Root 'basic meanings' are concise summaries of each root's Quranic usage.
