# Quranic Arabic Roots — Top 1642

A standalone, offline learning app for all 1642 roots of the Holy Quran.

## How to run

1. Keep `index.html` and `data.js` together in the same folder.
2. Double-click `index.html` — it opens in any modern web browser. No server,
   no internet connection, and no installation are needed.

## What is inside

- **1642 roots**, ranked by how often they occur in the Quran (from 2,851
  occurrences for the first root down to ~1 for the 1642nd).
- For every root: its basic meaning in **English and Urdu**.
- Up to **4 derived words** per root — the four most frequent distinct forms
  actually used in the Quran (fewer than 4 where the Quran itself has fewer).
  Rarer forms are omitted by design, so the counts of the displayed forms can
  add up to less than the root's total occurrences.
- For every derived word: the Arabic word as it appears in the Quran, its
  lemma (the Corpus's citation form) and transliteration, English and Urdu meanings, how many
  times it occurs, and a **real example verse** with the word highlighted and
  the verse's Urdu translation (Fateh Muhammad Jalandhari).
- **Browse mode** with search (Arabic, transliteration, English or Urdu), a
  **Flashcards mode** with shuffle and know/still-learning tracking (progress is
  saved in the browser), and four **colour themes** — two light (Classic Light,
  Parchment) and two dark (Classic Dark, Midnight) — picked from the toolbar
  swatches; your choice is remembered and the app defaults to your system setting.
- **Voice search** (added Oct 25, 2026; `index.html` only, dataset untouched):
  tap 🎤 Voice search, speak one word, and it is put into the search box —
  Arabic (default) or English, chosen beside the button. Spoken Arabic
  arrives without diacritics, which the search already handles, and a
  dagger-alif fix in the search normalisation means a spoken word like
  كتاب now finds its root where it previously found nothing. Voice search
  uses the browser's speech service, so it needs Google Chrome and an
  internet connection; typed search stays fully offline, and on any other
  browser the button is disabled with an explanation. This is speech
  *input* only — it does not re-add the pronunciation audio buttons
  removed in October 2026.

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
- All **3622 derived-word examples** shipped in this app are verified:
  3621 are direct verified Corpus↔Tanzil matches and 1 (at 12:39) is a
  manually adjudicated spelling (rasm) variant, documented in `VERIFICATION.md`.
- Occurrence counts are computed directly from the Corpus data. Root totals
  follow the Corpus convention: a token is counted under every root it
  contains (exactly one fused token in the Quran, at 20:94, contains two
  roots — see `VERIFICATION.md`). Roots are ranked by total; ties keep the
  order of first occurrence in the Quran.
- Full details: see `VERIFICATION.md`.

## Extending the app

The same pipeline can produce all ~1,642 Quranic roots, audio, or per-word
grammar notes. Ask Muse to extend the dataset — the build scripts and source
files are kept with the project.
