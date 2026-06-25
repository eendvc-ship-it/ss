// S&S Automations — Typography (foundation reference).
// Renders the full heavy neo-grotesque type scale. Source: ss-brand SKILL.md §4.
// Assumes styles.css (tokens + brand.css) is loaded globally. Uses brand classes only.

export const SS_TYPE_SCALE = [
  { key: "hero", className: "ss-hero", sample: "Every business leaks.", spec: "Hero headline · ss-hero · 48px / 800 · top of doc, Hero Panel · ends with period" },
  { key: "section", className: "ss-section-headline", sample: "Quantify and expand the pain.", spec: "Section headline · ss-section-headline · 24px / 800 · top of each section · ends with period" },
  { key: "label", className: "ss-label", sample: "THE OFFER", spec: "Em-dash label · ss-label · 12px / 700 · 0.18em tracking · rule + gap + spaced caps · use sparingly" },
  { key: "subline", className: "ss-subline", sample: "BETA embedded — Who · How · Why surface here.", spec: "Sub-line · ss-subline · 15px / 400 italic · muted · one line of context under a headline" },
  { key: "body", className: "ss-body", sample: "We find where your business leaks time and money — then we plug it.", spec: "Body · ss-body · 16px / 500 · ink on light, off-white on dark · always left-aligned" },
  { key: "footer", className: "ss-warm-strip", sample: "WORKFLOWS AND AUTOMATIONS · SS-AUTOMATIONS.COM", spec: "Footer strip · ss-warm-strip · 13px / 700 caps · 0.16em tracking · centered" },
];

const specStyle = { fontSize: 12, color: "var(--ss-sub-ink)", letterSpacing: ".04em", textTransform: "uppercase", margin: "10px 0 0" };
const rowStyle = { padding: "var(--ss-space-5) 0", borderTop: "var(--ss-hairline-w) solid var(--ss-hairline)" };

export default function Typography({ scale = SS_TYPE_SCALE, showSpecs = true }) {
  return (
    <div className="ss-root">
      <header style={{ padding: "var(--ss-rail) var(--ss-rail) 0" }}>
        <span className="ss-label">S&amp;S Automations · Type</span>
        <h1 className="ss-section-headline" style={{ marginTop: 14 }}>The type scale.</h1>
        <p className="ss-subline">Heavy neo-grotesque only. Left-aligned. Every headline ends with a period.</p>
      </header>

      <div style={{ padding: "var(--ss-space-6) var(--ss-rail) var(--ss-rail)" }}>
        {scale.map((row, i) => (
          <div key={row.key} style={i === 0 ? { ...rowStyle, borderTop: 0 } : rowStyle}>
            {row.key === "footer" ? (
              <div className="ss-warm-strip">{row.sample}</div>
            ) : row.key === "subline" ? (
              <>
                <h3 className="ss-section-headline">Understand the operation.</h3>
                <p className="ss-subline">{row.sample}</p>
              </>
            ) : row.key === "label" ? (
              <span className="ss-label">{row.sample}</span>
            ) : row.key === "body" ? (
              <>
                <p className="ss-body">{row.sample}</p>
                <div className="ss-num-item" style={{ marginTop: 16 }}><span className="ss-num">01</span><span className="ss-body">Numbered item — two-digit bold number at the rail.</span></div>
                <div className="ss-num-item"><span className="ss-num">02</span><span className="ss-body">Content offset right; items stay parallel.</span></div>
              </>
            ) : (
              <p className={row.className} style={{ margin: 0 }}>{row.sample}</p>
            )}
            {showSpecs && <p style={specStyle}>{row.spec}</p>}
          </div>
        ))}
      </div>

      <div className="ss-on-dark" style={{ padding: "var(--ss-space-5) var(--ss-rail)" }}>
        <span className="ss-label">S&amp;S AUTOMATIONS</span>
        <h2 className="ss-hero" style={{ marginTop: 14 }}>25% of what we save you.</h2>
        <p className="ss-body ss-muted" style={{ marginTop: 14 }}>Hero + label + body on black — off-white text, muted secondary.</p>
      </div>
    </div>
  );
}
