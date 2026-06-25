// S&S Automations — BusinessCard.
// Composes a Hero-style front (em-dash "— S&S AUTOMATIONS" + tagline headline) with the
// warm-gray Always-Visible Strip at the bottom. This is the ONE place the warm-gray strip
// belongs (Move 5 — card-only device). Source: ss-brand SKILL.md §5 (Move 5), §9 (card template).
// Assumes styles.css (tokens + brand.css) is loaded globally.

export default function BusinessCard({
  headline = "Every business leaks.",
  stripText = "WORKFLOWS AND AUTOMATIONS",
}) {
  return (
    <div className="ss-root" style={{ display: "flex", flexDirection: "column", minHeight: "100%" }}>
      <div className="ss-hero-panel" style={{ flex: 1 }}>
        <span className="ss-label">S&amp;S AUTOMATIONS</span>
        <h1 className="ss-hero">{headline}</h1>
      </div>
      <div className="ss-warm-strip">{stripText}</div>
    </div>
  );
}
