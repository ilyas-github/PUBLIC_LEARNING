# Quranic Arabic Roots — Top 100

A standalone, offline learning app for the 100 most frequent roots of the Holy Quran.

## How to run

1. Keep `index.html` and `data.js` together in the same folder.
2. Double-click `index.html` — it opens in any modern web browser. No server,
   no internet connection, and no installation are needed.

## What is inside

- **100 roots**, ranked by how often they occur in the Quran (from 2,851
  occurrences for the first root down to ~110 for the 100th).
- For every root: its basic meaning in **English and Urdu**.
- Up to **4 derived words** per root — always words actually used in the Quran
  (fewer than 4 where the Quran itself has fewer distinct derived words).
- For every derived word: the Arabic word as it appears in the Quran, its
  dictionary form and transliteration, English and Urdu meanings, how many
  times it occurs, and a **real example verse** with the word highlighted and
  the verse's Urdu translation (Fateh Muhammad Jalandhari).
- **Browse mode** with search (Arabic, transliteration, English or Urdu), and a
  **Flashcards mode** with shuffle and know/still-learning tracking (progress is
  saved in the browser).

## Why the dataset is a `.js` file, not `.json`

Browsers block a local HTML page from fetching a separate `.json` file from
disk (CORS rules for `file://` pages). A `.js` dataset loaded with a normal
script tag has no such restriction, so the app works by simply double-clicking
`index.html`. The data inside is plain JSON — it can be converted to `.json`,
CSV or SQLite at any time if the app later moves to a server or mobile shell.

## Sources — nothing is taken from unverified websites

| Data | Source |
|---|---|
| Quran Arabic text | Tanzil Project, Uthmani text (CC BY 3.0) |
| Root / lemma / word analysis | Quranic Arabic Corpus v0.4, University of Leeds (GPL) |
| Example verses | Located by Corpus annotation (surah : ayah : word) in the Tanzil text |
| Verse Urdu translation | Fateh Muhammad Jalandhari, via Tanzil |
| Word meanings (EN/UR) | Curated for this app; cross-checked against published word-by-word references (Shaikh & Khatri — English; Dr. Farhat Hashmi — Urdu) |

## Verification summary

- All **77,429 words** of the Quran were aligned between the Corpus and the
  Tanzil text and compared letter-by-letter: **77,423 (99.99%) identical**.
  The 6 differences are known tokenisation conventions (e.g. بَعْدَمَا written
  as one token vs two), documented in `VERIFICATION.md`.
- All **358 derived-word examples** shipped in this app are among the verified
  matches — no exceptions.
- Occurrence counts are computed directly from the Corpus data.
- Full details: see `VERIFICATION.md`.

## Extending the app

The same pipeline can produce the next 100 roots, all ~1,642 Quranic roots,
audio, or per-word grammar notes. Ask Muse to extend the dataset — the build
scripts and source files are kept with the project.
