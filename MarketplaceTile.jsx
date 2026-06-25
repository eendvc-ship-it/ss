// S&S Automations — MarketplaceTile (WEB §5c, PROVISIONAL look).
// Hard-edged tile: name top, price middle, description BOTTOM-ANCHORED, quiet
// build-ID badge in spaced label-caps (sub-ink, NOT monospace).
// Price format is LOCKED: "From $500 setup · $79/mo" (middle-dot, whole dollars).
// state: "live" (off-white, priced) | "soon" (muted, no price) | "bring" (on-ramp tile).
// Assumes styles.css (tokens + brand.css) loaded globally.

export default function MarketplaceTile({
  name = "Quote-to-invoice sync",
  price = "From $500 setup · $79/mo",
  description = "Turns an approved quote into a sent invoice without retyping a thing.",
  buildId = "SS-GDR-003",
  state = "live",
}) {
  const cls =
    "ss-tile" +
    (state === "soon" ? " ss-tile--soon" : "") +
    (state === "bring" ? " ss-tile--bring" : "");

  return (
    <article className={`ss-root ss-web ${cls}`}>
      <div className="ss-tile-name">{name}</div>

      {/* Price: middle, live tiles only. soon = no price; bring = no price. */}
      {state === "live" && price && <div className="ss-tile-price">{price}</div>}

      <div className="ss-tile-desc">
        {/* Build-ID badge — quiet stamp above the bottom-anchored description.
            soon shows "Coming soon"; bring carries no badge. */}
        {state === "live" && buildId && (
          <div className="ss-build-id" style={{ marginBottom: 8 }}>{buildId}</div>
        )}
        {state === "soon" && (
          <div className="ss-build-id" style={{ marginBottom: 8 }}>Coming soon</div>
        )}
        {description}
      </div>
    </article>
  );
}
