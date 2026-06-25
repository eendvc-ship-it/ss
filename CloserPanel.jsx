// S&S Automations — Closer Panel (Move 4).
// Full-bleed black panel near the BOTTOM of a print one-pager, card, or deck.
// Same construction as the Hero Panel; lands the offer / CTA / closing punchline.
// PRINT / CARD ONLY — never on websites or long-form web docs (SKILL.md §5, Move 4).
// Assumes styles.css is loaded globally.

export default function CloserPanel({
  label = "The offer",
  headline = "25% of what we save you.",
  support,
}) {
  return (
    <section className="ss-closer-panel">
      <span className="ss-label">{label}</span>
      <h1 className="ss-hero">{headline}</h1>
      {support && <p className="ss-body ss-muted">{support}</p>}
    </section>
  );
}
