// S&S Automations — ProductDetail (Web, §5c product detail page).
// Opened from a live tile: product headline, build-ID badge, origin story, what it
// does, customization menu, price, and the Book-a-free-workflow-audit CTA.
// WEB discipline: flat off-white, black only for the CTA. styles.css global.

const LIST_STYLE = { listStyle: "none", margin: 0, padding: 0 };
const ITEM_STYLE = { paddingLeft: 18, position: "relative" };

function HyphenList({ items }) {
  return (
    <ul className="ss-body" style={{ ...LIST_STYLE, marginTop: 14 }}>
      {items.map((item, i) => (
        <li key={i} style={{ ...ITEM_STYLE, marginTop: i === 0 ? 0 : 10 }}>
          <span style={{ position: "absolute", left: 0, color: "var(--ss-sub-ink)" }}>-</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ProductDetail({
  name = "Google Drive auto-sorter.",
  buildId = "SS-GDR-003",
  origin = "A client was losing an hour a day dragging files into the right folders by hand. We watched it happen for a week, then built the thing that does it for them. It has run quietly ever since — so we put it on the shelf.",
  does = [
    "Watches your Drive for new files as they land.",
    "Reads name, type, and content to decide where each one belongs.",
    "Files it into the right folder — no dragging, no guessing.",
    "Flags anything it isn't sure about for a quick human look.",
  ],
  customization = [
    "Custom folder rules mapped to how your team already works.",
    "Naming conventions enforced on the way in.",
    "Slack or email alerts when something needs a decision.",
    "Connect the sorter to your CRM or project tool.",
  ],
  price = "From $500 setup · $79/mo",
}) {
  return (
    <div className="ss-root ss-web">
      <main style={{ maxWidth: 760, padding: "var(--ss-space-8) var(--ss-rail)" }}>
        <div>
          <span className="ss-cat-label">S&amp;S Automations · Product</span>
          <h1 className="ss-hero" style={{ marginTop: 14 }}>{name}</h1>
          <div className="ss-build-id" style={{ marginTop: 14 }}>{buildId}</div>
        </div>

        <section style={{ marginTop: "var(--ss-space-6)" }}>
          <span className="ss-cat-label">Origin</span>
          <p className="ss-body" style={{ marginTop: 12 }}>{origin}</p>
        </section>

        <section style={{ marginTop: "var(--ss-space-6)" }}>
          <h2 className="ss-section-headline">What it does.</h2>
          <HyphenList items={does} />
        </section>

        <section style={{ marginTop: "var(--ss-space-6)" }}>
          <h2 className="ss-section-headline">Make it yours.</h2>
          <HyphenList items={customization} />
        </section>

        <section style={{ marginTop: "var(--ss-space-6)" }}>
          <span className="ss-cat-label">Price</span>
          <p style={{ fontWeight: "var(--ss-w-heavy)", fontSize: 20, marginTop: 10 }}>{price}</p>
        </section>

        <hr className="ss-hairline" />

        <a className="ss-btn" href="#audit">Book a free workflow audit</a>
      </main>

      <div className="ss-footer-line">WORKFLOWS AND AUTOMATIONS · SS-AUTOMATIONS.COM</div>
    </div>
  );
}
