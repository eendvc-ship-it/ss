// S&S Automations — Colors (foundation reference).
// Renders the locked monochrome palette. Source: ss-brand SKILL.md §3.
// Assumes styles.css (tokens + brand.css) is loaded globally.

export const SS_COLORS = [
  { name: "Black", hex: "#0a0a0a", use: "Hero / Closer panels, body text on light" },
  { name: "Off-white", hex: "#f5f2ed", use: "Primary background, text on dark" },
  { name: "Warm gray", hex: "#e8e5e0", use: "Strip dividers, card always-visible strip" },
  { name: "Mid dark", hex: "#1e1e1e", use: "Subtle secondary dark zones (rare)" },
  { name: "Sub-ink", hex: "#5a5a5a", use: "Muted labels on light, build-ID badge" },
  { name: "Muted on dark", hex: "#a8a39e", use: "Secondary text on black panels" },
  { name: "Hairline", hex: "#d4d0ca", use: "Section rules on light" },
  { name: "Ink", hex: "#0a0a0a", use: "Text on light backgrounds" },
];

export default function Colors({ tokens = SS_COLORS, showUse = true }) {
  return (
    <div className="ss-root">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 1, background: "var(--ss-hairline)", padding: "var(--ss-rail)" }}>
        {tokens.map((t) => (
          <div key={t.name} style={{ display: "grid", gridTemplateColumns: "84px 1fr", background: "var(--ss-offwhite)" }}>
            <div style={{ height: 84, background: t.hex, boxShadow: t.hex === "#f5f2ed" ? "inset 0 0 0 1px #d4d0ca" : "none" }} />
            <div style={{ padding: "14px 16px" }}>
              <div style={{ fontWeight: 700, fontSize: 13, letterSpacing: ".14em", textTransform: "uppercase" }}>{t.name}</div>
              <div style={{ fontSize: 13, color: "var(--ss-sub-ink)", marginTop: 4 }}>{t.hex}</div>
              {showUse && <div style={{ fontSize: 12, color: "var(--ss-sub-ink)", marginTop: 6, lineHeight: 1.4 }}>{t.use}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
