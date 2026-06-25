# SectionBlock

Move 3 — a content section on the off-white body. Bold sentence-case headline (with period), optional italic muted sub-line, content as two-digit numbered items, optional bottom hairline rule.

## Classes
- `.ss-section-block` — the block wrapper (light, padded to the rail)
- `.ss-section-headline` — bold sentence-case headline; copy must end with a period
- `.ss-subline` — italic muted one-line context (omit unless needed)
- `.ss-num-item` / `.ss-num` — two-digit bold number (`01`, `02`) + offset content
- `.ss-hairline` — 1px `#d4d0ca` rule, only when separating from the next section

## Rules
- Em-dash label is NOT default here — only add one at a major section pivot. Most blocks carry on the headline alone.
- Numbered items are always two-digit and bold. Headlines always end with a period.
- No boxes, borders, rounded corners, shadows. Sections separate via the rule + whitespace.

## Usage
```jsx
<SectionBlock
  headline="Understand the operation."
  subline="Who runs it, how the work moves, where it stalls."
  items={["Map the current workflow.", "Find the costly steps.", "Quantify the phantom cost."]}
  showRule
/>
```
