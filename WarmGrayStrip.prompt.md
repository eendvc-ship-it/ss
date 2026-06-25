# WarmGrayStrip (Move 2 / Move 5)

Horizontal warm-gray strip with CENTERED bold caps, wide-tracking text. Two uses: thematic punctuation directly under a Hero Panel (Move 2), and the "always-visible" strip on folded business cards (Move 5).

## Context
Card / print device. Do NOT add this strip to non-card documents — one-pagers, proposals, decks, and invoices use a minimal muted footer line instead, not a warm gray strip (SKILL.md §5 Move 5, Anti-Pattern #12). Never appears on long-form web pages.

## The one centered exception
This strip is the **only** centered element in the brand. Everything else is left-aligned (Anti-Pattern #5).

## Classes (from brand.css — never invent)
- `.ss-warm-strip` — `--ss-warmgray` `#e8e5e0` bg, `--ss-ink` text, bold all-caps, wide tracking (`--ss-footer-tracking`), centered, hard edges.

## Rules
- Text is all-caps and wide-tracked (handled by the class — pass plain caps text).
- No period (this is a strip label, not a headline).
- Warm gray is `--ss-warmgray` `#e8e5e0`. No gradients, shadows, glows, or rounded corners.

## Snippet
```jsx
<WarmGrayStrip>BETA EMBEDDED IN SITUATION</WarmGrayStrip>
```
