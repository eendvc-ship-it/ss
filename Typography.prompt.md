# Typography

The S&S type scale. Heavy neo-grotesque (`var(--ss-font)`) only — never serif, script, or condensed display (no Bebas/Anton). Everything left-aligned. Source: ss-brand SKILL.md §4.

## The styles (brand classes — never invent your own)
- `.ss-hero` — Hero headline · 48px / 800 (print 44–52pt) · tight 1.05 leading · top of doc / Hero Panel
- `.ss-section-headline` — Section headline · 24px / 800 (print 20–26pt) · top of each section
- `.ss-label` — Em-dash label · 12px / 700 · 0.18em tracking · renders rule + gap + spaced caps via `::before`. Use sparingly (Hero / Closer / major pivot only).
- `.ss-subline` — Sub-line · 15px / 400 italic · muted · one line of context under a headline
- `.ss-body` — Body · 16px / 500 · ink on light, off-white on dark
- `.ss-num-item` + `.ss-num` — Numbered item · two-digit bold `01`/`02` at the rail, content offset 28px
- `.ss-warm-strip` — Footer strip · 13px / 700 caps · 0.16em tracking · centered (the one centered element; card device)

## Rules
- Every headline (`.ss-hero`, `.ss-section-headline`) ends with a period — enforced by the author, not CSS.
- On dark, wrap in `.ss-on-dark`; secondary text gets `.ss-muted` (resolves to `--ss-muted-on-dark`).
- No size/weight overrides — the tokens own the scale.

## Usage
```jsx
<div className="ss-root">
  <span className="ss-label">S&amp;S AUTOMATIONS</span>
  <h1 className="ss-hero">Every business leaks.</h1>
  <p className="ss-subline">We find where your business leaks time and money.</p>
</div>
```
