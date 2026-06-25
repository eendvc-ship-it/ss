# EmDashLabel

The em-dash label atom: short horizontal rule, gap, then spaced caps. Source: ss-brand SKILL.md §4c.

## Class
`.ss-label` — 12px / 700 · 0.18em tracking · uppercase. The rule (22px × 1px) and gap render via `::before`, so you only supply the caps text. On a black surface, wrap with `.ss-on-dark` (the `onDark` prop) and the rule + text flip to off-white.

## Rules
- **Use sparingly.** Only at major moments — Hero Panel intro, Closer Panel intro, occasionally a major section divider, or above a founder name. More than 2–3 on a page = overuse, cut.
- NOT a default per-section ornament. Most sections have no label — the bold headline carries them.
- Author supplies uppercase copy (e.g. `S&S AUTOMATIONS`, `THE OFFER`, `CO-FOUNDER`). Never add a period.
- In DOCUMENT MODE, do not use as a standalone label rule (plain `#` headings instead).

## Usage
```jsx
<EmDashLabel>S&amp;S AUTOMATIONS</EmDashLabel>        // on light
<EmDashLabel onDark>THE OFFER</EmDashLabel>          // on a black Hero/Closer panel
```
