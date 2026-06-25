# CloserPanel (Move 4)

Full-bleed BLACK panel near the bottom of a print one-pager, card, or deck. Same construction as the Hero Panel — it lands the offer, key takeaway, or call-to-action. This is the closing punchline; make it count.

## IMPORTANT — context
**PRINT / CARD ONLY.** Never use the Closer Panel on websites or long-form web documents. On the web the closing section sits on the same flat off-white as everything else and the CTA is delivered by a black button, not a black panel (SKILL.md §5 Move 4, Anti-Pattern #13).

## Classes (from brand.css — never invent)
- `.ss-closer-panel` — the black full-bleed band (`--ss-black` bg, `--ss-offwhite` text, hard edges).
- `.ss-label` — em-dash rule + spaced caps, off-white on dark. Renders `— THE OFFER`.
- `.ss-hero` — heavy 800, tight leading, sentence case.
- `.ss-body.ss-muted` — supporting line in `--ss-muted-on-dark`.

## Rules
- Headline is sentence case and **ends with a period** (e.g. "25% of what we save you." / "We find them. We close them.").
- Off-white is `--ss-offwhite` `#f5f2ed`, never `#fff`. Black is `--ss-black` `#0a0a0a`.
- Left-aligned. No gradients, shadows, glows, or rounded corners.
- One em-dash label per panel.

## Snippet
```jsx
<CloserPanel label="The offer" headline="25% of what we save you." support="No savings, no monthly fee." />
```
