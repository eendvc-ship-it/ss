# Colors

The locked S&S monochrome palette. Use these CSS variables everywhere — never raw hex, never new colors.

## Tokens (CSS variables from `tokens/colors.css`)
- `--ss-black` `#0a0a0a` — Hero/Closer panels, body text on light
- `--ss-offwhite` `#f5f2ed` — primary background, text on dark (**never** `#ffffff`)
- `--ss-warmgray` `#e8e5e0` — strip dividers, business-card always-visible strip
- `--ss-mid-dark` `#1e1e1e` — rare secondary dark zones
- `--ss-ink` `#0a0a0a` — text on light
- `--ss-sub-ink` `#5a5a5a` — muted labels, build-ID badge, coming-soon tiles
- `--ss-muted-on-dark` `#a8a39e` — secondary text on black panels
- `--ss-hairline` `#d4d0ca` — rules on light

## Hard rules
- No pure white, no pure black, no accent colors (unless Lance approves a specific deliverable).
- No gradients, drop shadows, or glows. Flat fills only.

## Usage
```jsx
<div style={{ background: "var(--ss-black)", color: "var(--ss-offwhite)" }}>…</div>
```
