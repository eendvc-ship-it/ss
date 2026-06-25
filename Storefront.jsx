// S&S Automations — Storefront (Web, §5c marketplace page).
// Storefront hero + 8-tile shelf on flat off-white. WEB discipline: no black
// panels, off-white canvas, black only for the CTA. Assumes styles.css loaded globally.

export const SS_STOREFRONT_TILES = [
  { name: "Google Drive auto-sorter.", buildId: "SS-GDR-003", price: "From $500 setup · $79/mo", desc: "Files land where they belong, automatically." },
  { name: "Inbox triage.", soon: true, desc: "Coming soon." },
  { name: "Invoice chaser.", soon: true, desc: "Coming soon." },
  { name: "Lead router.", soon: true, desc: "Coming soon." },
  { name: "Report builder.", soon: true, desc: "Coming soon." },
  { name: "Scheduling sync.", soon: true, desc: "Coming soon." },
  { name: "Onboarding flow.", soon: true, desc: "Coming soon." },
  { name: "Don't see your idea? Bring it to us.", bring: true, cta: "Book a free workflow audit", href: "#audit" },
];

function Tile({ tile }) {
  if (tile.bring) {
    return (
      <div className="ss-tile ss-tile--bring">
        <div className="ss-tile-name">{tile.name}</div>
        <div className="ss-tile-desc" style={{ marginTop: "auto" }}>
          <a className="ss-btn" href={tile.href || "#audit"}>{tile.cta || "Book a free workflow audit"}</a>
        </div>
      </div>
    );
  }
  if (tile.soon) {
    return (
      <div className="ss-tile ss-tile--soon">
        <div className="ss-tile-name">{tile.name}</div>
        <div className="ss-tile-desc">{tile.desc || "Coming soon."}</div>
      </div>
    );
  }
  return (
    <div className="ss-tile">
      <div className="ss-tile-name">{tile.name}</div>
      {tile.buildId && <div className="ss-build-id">{tile.buildId}</div>}
      {tile.price && <div className="ss-tile-price">{tile.price}</div>}
      {tile.desc && <div className="ss-tile-desc">{tile.desc}</div>}
    </div>
  );
}

export default function Storefront({
  heroHeadline = "Turning your ideas for a better business into reality.",
  tiles = SS_STOREFRONT_TILES,
}) {
  const rows = [tiles.slice(0, 4), tiles.slice(4, 8)];
  return (
    <div className="ss-root ss-web">
      <header style={{ padding: "var(--ss-space-8) var(--ss-rail) var(--ss-space-6)", maxWidth: 920 }}>
        <span className="ss-cat-label">S&amp;S Automations · Marketplace</span>
        <h1 className="ss-hero" style={{ marginTop: 16, maxWidth: "20ch" }}>{heroHeadline}</h1>
        <p className="ss-subline">Browse what we build. The first one is live — the rest are on the way.</p>
      </header>

      <section style={{ padding: "0 var(--ss-rail) var(--ss-space-8)" }}>
        {rows.map((row, i) => (
          <div className="ss-shelf" key={i} style={{ marginTop: i === 0 ? 0 : 16 }}>
            {row.map((tile, j) => <Tile tile={tile} key={j} />)}
          </div>
        ))}
      </section>

      <div className="ss-footer-line">WORKFLOWS AND AUTOMATIONS · SS-AUTOMATIONS.COM</div>
    </div>
  );
}
