# TwoColumnSplit

Move 6 — a hard 50/50 split on light with a vertical hairline divider between the two columns. Each column carries an em-dash label + headline + body. Built for founder bio cards and side-by-side comparisons.

## Classes
- `.ss-two-col` — the 1fr / 1px / 1fr grid on off-white
- `.ss-col` — each half, padded to the rail
- `.ss-divider` — the vertical `#d4d0ca` hairline between columns
- `.ss-label` — em-dash label (renders the leading rule via `::before`)
- `.ss-section-headline` — column headline (ends with a period)
- `.ss-body` / `.ss-muted` — role and muted contact line

## Rules
- Hard 50/50 only. Both columns share the same label + headline structure.
- Em-dash labels here are sanctioned (founder cards): `— CO-FOUNDER` above each name.
- Left-aligned, hard edges, no boxes or shadows.

## Usage
```jsx
<TwoColumnSplit
  left={{ label: "CO-FOUNDER", name: "Lance Stubbs Jr.", role: "Strategy & Client", contact: "lance@ss-automations.com · (323) 551-7475" }}
  right={{ label: "CO-FOUNDER", name: "Vince Sorboro.", role: "Audit & Build", contact: "vince@ss-automations.com · (330) 998-8934" }}
/>
```
