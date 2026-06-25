# BusinessCard

A business-card front: a Hero-style black panel (em-dash `— S&S AUTOMATIONS` label + tagline headline with period) and the warm-gray Always-Visible Strip pinned to the bottom.

## Classes
- `.ss-hero-panel` — full-bleed black front panel
- `.ss-label` — em-dash label `S&S AUTOMATIONS` (renders the leading rule via `::before`); on dark it inverts to off-white
- `.ss-hero` — the tagline headline (off-white on the panel), e.g. "Every business leaks."
- `.ss-warm-strip` — warm-gray Always-Visible Strip, centered bold caps, reads "WORKFLOWS AND AUTOMATIONS"

## Rules
- The warm-gray strip is a CARD device only. Do NOT put it on one-pagers, proposals, invoices, or decks — those use a minimal muted contact line or nothing (SKILL.md §5 Move 5, Anti-Pattern #12).
- The strip text is the one sanctioned centered element; everything else stays left-aligned.
- Hard edges, no rounded corners, no shadows or gradients. Off-white text on black, never pure white.

## Usage
```jsx
<BusinessCard headline="Every business leaks." stripText="WORKFLOWS AND AUTOMATIONS" />
```
