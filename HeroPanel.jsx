// S&S Automations — Hero Panel (Move 1).
// Full-bleed black panel for the TOP of a print one-pager, card, or deck cover.
// PRINT / CARD ONLY — never on websites or long-form web docs (SKILL.md §5, Move 1).
// Em-dash label top-left, massive sentence-case bold headline (ends with a period),
// optional muted metadata tag bottom-right. Assumes styles.css is loaded globally.

export default function HeroPanel({
  label = "S&S Automations",
  headline = "The meeting framework.",
  tag,
}) {
  return (
    <section className="ss-hero-panel">
      <span className="ss-label">{label}</span>
      <h1 className="ss-hero">{headline}</h1>
      {tag && <span className="ss-panel-tag">{tag}</span>}
    </section>
  );
}
