# S&S Automations — building with this design system

Build every S&S surface from the classes and tokens below. Never invent colors, fonts, or class names — the palette is locked and monochrome. The truth lives in `styles.css` (which `@import`s `tokens/*.css` and `brand.css`); read those and the per-component `<Name>.prompt.md` before styling.

## Wrap everything in `.ss-root`
`.ss-root` sets the font, ink color, and the off-white canvas. Without it, components render unstyled.
- Web pages: add `.ss-web` → `<div class="ss-root ss-web">`.
- Any black zone (Hero/Closer panels, dark sections): the panel classes already invert text; for an ad-hoc dark zone use `.ss-on-dark`.

## Pick the context first — it changes the layout discipline
| Context | Proportion | Hero/Closer panels | Warm-gray strip |
|---|---|---|---|
| Print / card | ~70% off-white · 25% black · 5% warm gray | **Yes** | Business cards only |
| Web / long-form | ~90% off-white · 10% black (black = CTAs only) | **No** | No |
| Document | ~100% off-white | **No** | No |

The "black hero on top, black closer at the bottom" reflex is right in print, wrong on the web.

## Class vocabulary (all defined in `brand.css`)
**Type:** `.ss-hero` · `.ss-section-headline` · `.ss-subline` (italic, muted) · `.ss-body` · `.ss-label` (em-dash label — use sparingly) · `.ss-cat-label` (web category caps) · `.ss-num-item` + `.ss-num` (two-digit numbered list) · `.ss-muted`

**Print / card surfaces:** `.ss-hero-panel` · `.ss-closer-panel` · `.ss-panel-tag` · `.ss-warm-strip` · `.ss-section-block` · `.ss-two-col` + `.ss-col` + `.ss-divider` · `.ss-hairline` · `.ss-footer-line` · `.ss-on-dark`

**Web:** `.ss-web` · `.ss-web-section` · `.ss-btn` (primary, solid black) · `.ss-btn-secondary` (outline) · `.ss-btn-stack` · `.ss-shelf` · `.ss-tile` (+ `.ss-tile--dark` / `.ss-tile--soon` / `.ss-tile--bring`) · `.ss-tile-name` · `.ss-tile-price` · `.ss-tile-desc` (bottom-anchored) · `.ss-build-id`

**Tokens (`tokens/colors.css`, `typography.css`, `spacing.css`):** `--ss-black #0a0a0a` · `--ss-offwhite #f5f2ed` · `--ss-warmgray #e8e5e0` · `--ss-sub-ink #5a5a5a` · `--ss-muted-on-dark #a8a39e` · `--ss-hairline #d4d0ca` · `--ss-font` · `--ss-rail`.

## Locked invariants (a violation is a bug, not a style choice)
- Colors only from the palette. Never `#ffffff` (use `--ss-offwhite`), never `#000000` (use `--ss-black`). No accent colors.
- No gradients, drop shadows, glows, or rounded corners — `--ss-radius` is `0` everywhere. Flat fills, hard rectangular edges.
- Left-align everything. The ONLY centered element is `.ss-warm-strip`.
- Every headline ends with a period. Heavy neo-grotesque type only — never serif/script/condensed-display.
- Prices read identically everywhere: `From $500 setup · $79/mo` (middle-dot, whole dollars, per business).
- Build IDs come from the Machinery Standard (`SS-[CLIENT]-[##]`) — never invent one; style them with `.ss-build-id`.

## One idiomatic build (a web CTA section)
```jsx
<div className="ss-root ss-web">
  <section className="ss-web-section">
    <span className="ss-cat-label">Call to action</span>
    <h2 className="ss-section-headline">Stop negotiating with yourself.</h2>
    <p className="ss-body">We find where your business leaks time and money — then we plug it.</p>
    <div className="ss-btn-stack">
      <a className="ss-btn" href="#">Book a free workflow audit</a>
      <a className="ss-btn-secondary" href="#">See how it works</a>
    </div>
  </section>
</div>
```
