# Storefront

The S&S marketplace storefront page (WEB context, §5c). Storefront hero on top, the
8-tile shelf below (two rows of four), and the persistent "bring it to us" tile.

## Context rule (WEB)
Flat off-white canvas (`#f5f2ed`), ~90/10 light/black. **No** Hero or Closer panels,
no warm gray strips, no alternating backgrounds. Black is reserved for CTA buttons only.
Sections separate through whitespace. Hard edges, radius 0, left-aligned.

## Real classes
- Page: `ss-root ss-web`
- Hero: `ss-cat-label`, `ss-hero` (ends with a period), `ss-subline`
- Shelf: `ss-shelf` (4-col grid) holding `ss-tile`
- Live tile: `ss-tile` + `ss-tile-name` + `ss-build-id` + `ss-tile-price` + `ss-tile-desc`
- Placeholder: `ss-tile ss-tile--soon` (muted name, no price)
- Bring-it tile: `ss-tile ss-tile--bring` with an `ss-btn` CTA
- Footer: `ss-footer-line`

## Locked copy
- Hero EXACTLY: `Turning your ideas for a better business into reality.`
- Price format: `From $500 setup · $79/mo` (middle-dot `·`, whole dollars, per business)
- Build IDs come from the Machinery Standard (`SS-[CLIENT]-[##]`) — never invent one.

## Snippet
```jsx
<Storefront
  heroHeadline="Turning your ideas for a better business into reality."
  tiles={[
    { name: "Google Drive auto-sorter.", buildId: "SS-GDR-003", price: "From $500 setup · $79/mo", desc: "Files land where they belong, automatically." },
    { name: "Inbox triage.", soon: true, desc: "Coming soon." },
    { name: "Don't see your idea? Bring it to us.", bring: true, cta: "Book a free workflow audit" },
  ]}
/>
```
