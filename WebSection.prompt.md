# WebSection

WEB §5b long-form content section. Sits on the single flat off-white canvas. Opens with the compact section rhythm: small spaced-caps category label, large sentence-case headline **with a period**, a body paragraph, then a supporting list.

NO black panel, NO warm gray strip, NO borders, NO background change. Sections separate through **vertical whitespace alone** — that is the whole layout discipline here.

WEB context is ~90% off-white / ~10% black — black only for CTA buttons and small accents, NEVER hero/closer/section-background panels. This section contributes zero black; whitespace and headlines do the work.

## Classes (from `brand.css`)
- `.ss-web-section` — the off-white section block (padding + max-width + child spacing)
- `.ss-cat-label` — spaced-caps category label in sub-ink
- `.ss-section-headline` — heavy sentence-case headline (author supplies the period)
- `.ss-body` — body paragraph

## Props
- `category`, `headline`, `body`, `items`

## Usage
```jsx
<WebSection
  category="What We Look For"
  headline="Every business leaks time and money."
  body="We map how the work moves, find the steps that cost more than they should, and plug them."
  items={["Repeated manual data entry between tools.", "Status updates that live in someone's head."]}
/>
```
