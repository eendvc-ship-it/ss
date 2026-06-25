// S&S Automations — CtaButtons (WEB §5b).
// Primary (solid black) over secondary (off-white, 1px black border). Hard edges, no shadow.
// Title-case labels, short, NO period. Assumes styles.css (tokens + brand.css) loaded globally.

export default function CtaButtons({
  primaryLabel = "Book a free workflow audit",
  secondaryLabel = "See how it works",
  stacked = true,
}) {
  return (
    <div className="ss-root ss-web">
      <div
        className="ss-btn-stack"
        style={stacked ? undefined : { flexDirection: "row" }}
      >
        <a className="ss-btn" href="#">{primaryLabel}</a>
        {secondaryLabel && (
          <a className="ss-btn-secondary" href="#">{secondaryLabel}</a>
        )}
      </div>
    </div>
  );
}
