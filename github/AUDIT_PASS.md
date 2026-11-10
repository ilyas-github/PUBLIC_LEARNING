# Independent-Style Audit Pass — Blind Re-derivation of the Meanings Layer

Date: 2026-10-10 · Dataset: Top 500 roots (1,696 derived words)

## Why

Every structural fact in this dataset (roots, lemmas, verse references, word
positions, occurrence counts) is machine-verified against the Quranic Arabic
Corpus v0.4 and the Tanzil text (see VERIFICATION.md). The English/Urdu
**meanings**, however, were curated by the dataset's author. This pass re-checked
that layer by re-deriving it without looking at the shipped answers.

## Method

1. **Sample.** A stratified random sample (seed 20261010) of 100 derived words:
   20 from each batch of 100 roots (ranks 1–100, 101–200, …, 401–500).
2. **Sealing.** The shipped gloss of every sampled entry was copied to a sealed
   file before any re-derivation began.
3. **Blind re-derivation.** Each sampled word was glossed afresh (English and
   Urdu) using only the primary sources: the Corpus lemma and part of speech,
   and the published word-by-word English/Urdu renderings (QuranWBW) at the
   word's representative verse. The shipped dataset was not consulted.
4. **Comparison and adjudication.** Blind and shipped glosses were compared
   (automated token-overlap plus manual reading of every pair). The basic
   meanings of all 90 roots represented in the sample were re-derived and
   compared the same way.

## Results

- **Derived-word English glosses:** 95/100 agreed with the shipped gloss under
  the automated overlap test. The 5 flagged pairs were adjudicated by hand —
  all 5 were wording variants of the same meaning (e.g. "to fly" vs "(that)
  flies"; "remaining, staying" vs "those who remain"). **Zero meaning errors.**
- **Derived-word Urdu glosses:** all 100 agreed in substance.
- **Root basic meanings (90 sampled roots):** all agreed in substance.

## Changes made as a result

No gloss was found wrong. The pass surfaced two places where a shipped entry
was *narrower* than the Quran's own usage; both were enriched, and they are
the **only** differences between this dataset and the Top 400 dataset in the
earlier roots (enforced by an explicit whitelist in the build's regression
check):

1. **Root ʿ-l-m (rank 6):** basic meaning "to know; knowledge" → adds
   "world (ʿālam)", because ʿālamīn ("the worlds", 135 occurrences) is one of
   the root's own derived words in the Quran.
2. **Lemma akhlada (root kh-l-d, rank 128):** gloss "to make immortal/lasting"
   → adds "to cling (to the earth)", its sense at 7:176 (*akhlada ilā al-arḍ*).

## Honest limits

This was a blind self-audit: the re-derivation was done by the same author
(an AI) that curated the data, working from the sources with the shipped
answers sealed. It removes copying and anchoring errors, and it caught the two
coverage gaps above — but it is not a substitute for review by a qualified
human Arabic scholar, which remains the strongest remaining check on the
meanings layer. The structural layer does not have this limitation; it is
machine-verified end to end.

---

# Blind Audit Supplement — Batch 6 (Roots 501–600)

Date: 2026-10-12 · Dataset: Top 600 roots, batch 6 only (274 derived words)

## Why

The 2026-10-10 blind re-audit (AUDIT_PASS.md) sampled 100 derived words
from ranks 1–500 only. Batch 6 (ranks 501–600, 274 words) never had the
blind treatment, and REVIEW_GUIDE.md discloses that gap to the reviewer.
This supplement closes it with the same method, before the Top 1000
reviewer package is sent out.

## Method (same as the original pass)

1. **Sample.** 20 derived words drawn at random (seed 20261011) from the
   274 batch-6 words — prepared 2026-10-11 in stage_audit_b6_prep.py.
2. **Sealing.** Shipped glosses were copied to audit_sealed_b6.json at
   prep time, before any re-derivation.
3. **Blind re-derivation.** Each sampled word was glossed afresh (English
   and Urdu) using only the primary sources in audit_sample_b6.json: the
   Corpus lemma and part of speech, and the published QuranWBW
   word-by-word English/Urdu rendering at the word's representative
   verse. Blind glosses are in audit_blind_b6.json. The basic meanings
   of the 17 distinct sampled roots were re-derived the same way.
4. **Comparison.** Automated content-token overlap (the stage_c*.py
   metric: stopwords removed, tokens >2 chars, threshold 0.34) computed
   by stage_audit_b6_compare.py; every flagged pair adjudicated by hand.
   Full pairs are in audit_b6_results.json.

## Results

- **Derived-word English glosses:** 16/20 agreed under the automated
  test. The 4 flagged pairs are all wording variants of the same
  meaning — in each case the blind gloss was simply longer than the
  shipped one:
  - #1 ḥallāf (501): "habitual swearer, one who swears oaths repeatedly"
    vs shipped "habitual swearer" (Urdu identical verbatim).
  - #7 aknān (524): "shelters, places of refuge" vs "shelters"
    (Urdu blind text contains the shipped phrase verbatim).
  - #8 safīh (542): "foolish one, fool" vs "foolish (person)"
    (Urdu agrees: نادان).
  - #13 yattakiʾ (564): "to recline, lean back" vs "to recline"
    (Urdu agrees: تکیہ لگانا).
  **Zero meaning errors.**
- **Derived-word Urdu glosses:** all 20 agreed in substance.
- **Root basic meanings (17 sampled roots):** 15/17 agreed under the
  automated test. Both flags adjudicate in the shipped dataset's
  favour — the shipped meaning is *broader* than what a single sampled
  word can show, and both extra senses are genuinely Quranic:
  - gh-m-m (545): blind "cloud; covering" vs shipped "grief; clouds".
    The token metric also misses cloud/clouds. Shipped is correct —
    ghamm "grief" is a major Quranic sense of this root.
  - sh-f-q (567): blind "apprehensive fear; tender concern" vs shipped
    "compassion; fear; twilight". Compassion ≈ tender concern, fear
    matches, and shafaq "twilight" (84:16) is a real derived sense.
  **Zero meaning errors, and no coverage enrichments needed** — unlike
  the batches 1–5 pass, nothing shipped was found narrower than the
  Quran's own usage.

## Honest limits

Same as the original pass: this is a blind self-audit by the same author
(an AI) that curated the data, with the shipped answers sealed before
re-derivation. It removes copying/anchoring errors but is not a
substitute for the planned review by a qualified human scholar.
