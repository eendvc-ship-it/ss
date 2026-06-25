# MarketplaceTile

WEB §5c marketplace product tile. **The tile look is PROVISIONAL** — shape it on the canvas and update §5c once it's real; do not hard-code this treatment as gospel.

**These invariants are LOCKED, not provisional:** hard rectangular edges (`--ss-radius` = 0, no rounded corners); monochrome palette only, no accents; off-white `#f5f2ed` canvas, never pure white; no gradients / shadows / glows (no glass/frosted); everything left-aligned; description **bottom-anchored**; the price format is identical across every tile.

WEB context is ~90% off-white / ~10% black — black is for CTA buttons and small accents only, NEVER hero/closer/section-background panels. Default tile fill is off-white to hold the 90/10 proportion (`.ss-tile--dark` exists but eight dark tiles risks a dark-dominant page — Anti-Pattern #4).

## Tile anatomy
- **Name** — top
- **Price** — middle. LOCKED format: `From $500 setup · $79/mo` — middle-dot `·`, whole dollars (no decimals), per business
- **Description** — bottom-anchored (pinned to the bottom edge via `margin-top:auto`)
- **Build-ID badge** — `SS-GDR-003`: small, quiet, spaced label-caps, sub-ink `#5a5a5a`, NOT monospace. Pull the real ID from the Machinery Standard — never invent one.

## States
- `live` — off-white, name + price + build-ID + description
- `soon` — muted placeholder: name in sub-ink, NO price, "Coming soon" in place of the build-ID
- `bring` — the on-ramp tile, "Don't see your idea? Bring it to us." routing to **Book a free workflow audit** (the BETA call), no price

## Classes (from `brand.css`)
`.ss-shelf` `.ss-tile` `.ss-tile--soon` `.ss-tile--bring` `.ss-tile--dark` `.ss-tile-name` `.ss-tile-price` `.ss-tile-desc` `.ss-build-id`

## Usage
```jsx
<div className="ss-shelf">
  <MarketplaceTile state="live" name="Quote-to-invoice sync"
    price="From $500 setup · $79/mo" buildId="SS-GDR-003"
    description="Turns an approved quote into a sent invoice without retyping a thing." />
  <MarketplaceTile state="soon" name="Inbox triage"
    description="Sorts and routes incoming mail so the right person sees it first." />
  <MarketplaceTile state="bring" name="Don't see your idea? Bring it to us."
    description="Book a free workflow audit and we'll scope a build around it." />
</div>
```
