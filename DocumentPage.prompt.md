# DocumentPage

A clean S&S business document (DOCUMENT MODE, §9b): term sheets, scopes of work, role
specs, SOPs, agreements. Small logo top-left, bold title, italic muted subtitle, plain
`#` H1 headings, body prose, hyphen bullets, a clean 2-col terms table, an italic aside,
and a two-column signature block.

## Context rule (DOCUMENT)
Essentially 100% off-white (`#f5f2ed`). **NO** black Hero/Closer panels, **NO** warm gray
strip, **NO** em-dash labels above headings (use plain `#` headings), **NO** 48pt hero
headlines. Logo small (~64px) and top-left, one per document. Hard edges, radius 0,
left-aligned. Voice still applies — short, declarative, periods on headlines.

## Real classes / structure
- Page: `ss-root` (NOT `ss-web` — this is Document Mode)
- Logo: `../../../assets/ss_logo_black_transparent.png`, ~64px, top-left
- Headings: plain `#` prefix, bold — never an `ss-label` em-dash rule
- Bullets: hyphen `-`, never `•`
- Table: bold header row, light `--ss-hairline` rules only (no heavy borders)
- Aside: italic, `--ss-sub-ink`
- Signature: two columns, `--ss-ink` top rule, bold name over "Signature · Date"
- Footer: `ss-footer-line` — minimal muted contact line, NOT a warm strip

## Identity
S&S Automations LLC · Ohio · ss-automations.com · founded 2026.

## Snippet
```jsx
<DocumentPage
  title="Scope of Work — Drive Auto-Sorter."
  subtitle="S&S Automations LLC · June 2026 · v1.0"
  sections={[
    { heading: "Overview.", body: "This document sets the scope and terms…" },
    { heading: "What we deliver.", bullets: ["A live sorter watching the client's Drive."] },
    { heading: "Terms.", table: { head: ["Item", "Terms"], rows: [["Setup", "$500 one-time"]] },
      aside: "If it saves you less than promised, the fee pauses." },
  ]}
/>
```
