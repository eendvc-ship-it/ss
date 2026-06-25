// S&S Automations — Warm Gray Strip (Move 2 / Move 5).
// Horizontal warm-gray strip used as thematic punctuation between the Hero Panel
// and the content body, or as the always-visible strip on business cards.
// CENTERED bold caps with wide tracking — the one deliberately centered element
// in the brand (everything else is left-aligned). Assumes styles.css is loaded globally.
// Card device — do NOT add to non-card one-pagers, proposals, decks, or invoices.

export default function WarmGrayStrip({ children = "WORKFLOWS AND AUTOMATIONS" }) {
  return <div className="ss-warm-strip">{children}</div>;
}
