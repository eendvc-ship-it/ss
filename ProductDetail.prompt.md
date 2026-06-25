# ProductDetail

The S&S product detail page (WEB context, §5c), opened from a live storefront tile.
Product headline, build-ID badge, origin story, what it does, the customization menu,
price, and the Book-a-free-workflow-audit CTA.

## Context rule (WEB)
Flat off-white canvas (`#f5f2ed`), ~90/10 light/black. **No** Hero or Closer panels,
no warm gray strips, no alternating backgrounds. Black is reserved for the CTA button.
Sections separate through whitespace and a single `ss-hairline` before the CTA. Hard
edges, radius 0, everything left-aligned.

## Real classes
- Page: `ss-root ss-web`
- Head: `ss-cat-label`, `ss-hero` (period), `ss-build-id`
- Sections: `ss-cat-label` / `ss-section-headline` (period) + `ss-body`
- Lists: hyphen `-` bullets (not `•`), parallel phrasing
- Rule: `ss-hairline`
- CTA: `ss-btn` — title case, no period: "Book a free workflow audit"
- Footer: `ss-footer-line`

## Locked copy
- Headline ends with a period.
- Build ID `SS-GDR-003` (and all IDs) come from the Machinery Standard — never invent.
- Price format: `From $500 setup · $79/mo` (middle-dot `·`, whole dollars).

## Snippet
```jsx
<ProductDetail
  name="Google Drive auto-sorter."
  buildId="SS-GDR-003"
  origin="A client was losing an hour a day dragging files by hand…"
  does={["Watches your Drive for new files.", "Files each one into the right folder."]}
  customization={["Custom folder rules.", "Slack alerts for decisions."]}
  price="From $500 setup · $79/mo"
/>
```
