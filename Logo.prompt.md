# Logo

The S&S circular badge: "AUTOMATIONS" arcs the top, interlocking S&S center, "EST. 2026" arcs the bottom. Source: ss-brand SKILL.md §10.

## Two files only (both transparent PNG)
- `variant="black"` → `../../../assets/ss_logo_black_transparent.png` — on light / off-white panels
- `variant="offwhite"` → `../../../assets/ss_logo_offwhite_transparent.png` — on black panels (Hero, Closer)

Always use one of these two. Never a logo file with a white background fill.

## Rules
- Clear space: at least **half the mark height** on all sides (the component reserves this when `clearSpace` is true).
- Minimum size: 50px on screen (0.5" print).
- Never distort, rotate, recolor, add shadows/effects, or place over busy imagery. Match the variant to the background — black on light, off-white on dark.
- One mark per document (decks excepted).

## Usage
```jsx
<Logo variant="offwhite" size={96} />   // on a black Hero panel
<Logo variant="black" />                // top-left of a light document
```
