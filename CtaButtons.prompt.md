# CtaButtons

WEB §5b call-to-action pair. Primary is solid black `#0a0a0a` with off-white `#f5f2ed` text; secondary is off-white with a 1px black border and black text. Hard rectangular edges (`--ss-radius` = 0), no shadow, no gradient. Labels are title case, short (2–5 words), and carry **no period**.

WEB context is ~90% off-white / ~10% black — black is reserved for CTA buttons and small accents, NEVER hero/closer/section-background panels. These buttons are where the black 10% lives.

`"Book a free workflow audit"` is the BETA-call CTA — the canonical primary label.

## Classes (from `brand.css`)
- `.ss-btn` — primary, solid black, off-white text
- `.ss-btn-secondary` — off-white bg, 1px black border, black text
- `.ss-btn-stack` — column layout, primary over secondary (the brand default)

## Props
- `primaryLabel`, `secondaryLabel` — title-case, no period
- `stacked` — primary over secondary (default true) vs. side-by-side

## Usage
```jsx
<CtaButtons primaryLabel="Book a free workflow audit" secondaryLabel="See how it works" stacked />
```
