# HeroPanel (Move 1)

Full-bleed BLACK panel at the top of a print one-pager, business card, or deck cover. Sets the tone. Em-dash label top-left, one massive sentence-case headline, optional muted tag bottom-right.

## IMPORTANT — context
**PRINT / CARD ONLY.** Never use the Hero Panel on websites, landing pages, or any long-form/scrolling web document. On the web the brand opens on flat off-white with logo + headline on the page itself — no black panel (SKILL.md §5 Move 1, Anti-Pattern #13).

## Classes (from brand.css — never invent)
- `.ss-hero-panel` — the black full-bleed band (`--ss-black` bg, `--ss-offwhite` text, hard edges).
- `.ss-label` — em-dash rule + spaced caps, off-white on dark. Renders `— S&S AUTOMATIONS`.
- `.ss-hero` — heavy 800, tight leading, sentence case.
- `.ss-panel-tag` — optional muted metadata, bottom-right, `--ss-muted-on-dark`.

## Rules
- Headline is sentence case and **ends with a period** (e.g. "The meeting framework." / "Every business leaks.").
- Off-white is `--ss-offwhite` `#f5f2ed`, never `#fff`. Black is `--ss-black` `#0a0a0a`.
- Left-aligned. No gradients, shadows, glows, or rounded corners.
- One em-dash label per panel — labels are rare moments, not ornament.

## Snippet
```jsx
<HeroPanel label="S&S Automations" headline="Every business leaks." tag="BETA · SPIN" />
```
