// S&S Automations — DocumentPage (Document Mode, §9b).
// Clean business document: small top-left logo, bold title, italic muted subtitle,
// plain `#`-style H1 headings, body prose, hyphen bullets, a clean 2-col terms table,
// an italic aside, and a two-column signature block. 100% off-white — NO black panels,
// NO warm strip, NO em-dash labels above headings. styles.css assumed global.

const LOGO_SRC = "../../../assets/ss_logo_black_transparent.png";

export const SS_DOCUMENT_SECTIONS = [
  { heading: "Overview.", body: "This document sets the scope, terms, and acceptance criteria for the Google Drive auto-sorter build. It is the working agreement between S&S Automations LLC and the client named below. Plain terms, no surprises." },
  { heading: "What we deliver.", bullets: [
    "A live sorter watching the client's Drive for new files.",
    "Folder rules mapped to the client's existing structure.",
    "Alerts for any file the sorter cannot place with confidence.",
    "A short handoff walkthrough and a one-page run-book.",
  ] },
  { heading: "Terms.", table: {
    head: ["Item", "Terms"],
    rows: [
      ["Setup", "$500 one-time, due at kickoff"],
      ["Subscription", "$79/mo, billed monthly per business"],
      ["Build window", "Two weeks from signed scope"],
      ["Support", "Included while the subscription is active"],
    ],
  }, aside: "If the sorter saves you less time than promised in the first month, the monthly fee pauses until it does." },
];

function Section({ section }) {
  return (
    <section>
      <h1 style={{ fontWeight: "var(--ss-w-heavy)", fontSize: 20, letterSpacing: "-0.005em", margin: "var(--ss-space-6) 0 0" }}>
        {section.heading}
      </h1>

      {section.body && (
        <p style={{ fontWeight: "var(--ss-w-medium)", fontSize: 16, lineHeight: 1.55, margin: "12px 0 0" }}>{section.body}</p>
      )}

      {section.bullets && (
        <ul style={{ listStyle: "none", margin: "12px 0 0", padding: 0 }}>
          {section.bullets.map((b, i) => (
            <li key={i} style={{ paddingLeft: 18, position: "relative", fontSize: 16, lineHeight: 1.55, fontWeight: "var(--ss-w-medium)", marginTop: i === 0 ? 0 : 8 }}>
              <span style={{ position: "absolute", left: 0, color: "var(--ss-sub-ink)" }}>-</span>{b}
            </li>
          ))}
        </ul>
      )}

      {section.table && (
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 16 }}>
          <thead>
            <tr>
              {section.table.head.map((h, i) => (
                <th key={i} style={{ textAlign: "left", padding: "10px 12px", fontSize: 15, fontWeight: "var(--ss-w-bold)", borderBottom: "1px solid var(--ss-ink)" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {section.table.rows.map((row, r) => (
              <tr key={r}>
                {row.map((cell, c) => (
                  <td key={c} style={{ textAlign: "left", padding: "10px 12px", fontSize: 15, fontWeight: "var(--ss-w-medium)", borderBottom: "1px solid var(--ss-hairline)" }}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {section.aside && (
        <p style={{ fontStyle: "italic", color: "var(--ss-sub-ink)", fontSize: 15, lineHeight: 1.5, marginTop: 16 }}>{section.aside}</p>
      )}
    </section>
  );
}

export default function DocumentPage({
  title = "Scope of Work — Drive Auto-Sorter.",
  subtitle = "S&S Automations LLC · June 2026 · v1.0",
  sections = SS_DOCUMENT_SECTIONS,
}) {
  return (
    <div className="ss-root">
      <main style={{ maxWidth: 720, padding: "var(--ss-space-7) var(--ss-rail) var(--ss-space-8)" }}>
        <img src={LOGO_SRC} alt="S&S Automations" style={{ width: 64, height: "auto", display: "block" }} />

        <h1 style={{ fontWeight: "var(--ss-w-heavy)", fontSize: 30, lineHeight: 1.1, letterSpacing: "-0.01em", margin: "24px 0 0" }}>{title}</h1>
        <p style={{ fontStyle: "italic", fontSize: 15, color: "var(--ss-sub-ink)", margin: "8px 0 0" }}>{subtitle}</p>

        {sections.map((s, i) => <Section section={s} key={i} />)}

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--ss-space-6)", marginTop: "var(--ss-space-7)" }}>
          <div style={{ borderTop: "1px solid var(--ss-ink)", paddingTop: 8, fontSize: 13, color: "var(--ss-sub-ink)" }}>
            <span style={{ fontWeight: "var(--ss-w-bold)", color: "var(--ss-ink)", fontSize: 14 }}>S&S Automations LLC</span><br />Signature · Date
          </div>
          <div style={{ borderTop: "1px solid var(--ss-ink)", paddingTop: 8, fontSize: 13, color: "var(--ss-sub-ink)" }}>
            <span style={{ fontWeight: "var(--ss-w-bold)", color: "var(--ss-ink)", fontSize: 14 }}>Client</span><br />Signature · Date
          </div>
        </div>

        <div className="ss-footer-line" style={{ paddingLeft: 0 }}>S&S Automations LLC · Ohio · ss-automations.com</div>
      </main>
    </div>
  );
}
