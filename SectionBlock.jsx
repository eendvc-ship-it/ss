// S&S Automations — SectionBlock (Move 3, print/card light section).
// Section headline (sentence case, bold, period) + optional italic muted sub-line
// + two-digit numbered items + optional bottom hairline rule. Source: ss-brand SKILL.md §5 (Move 3), §4f.
// Em-dash label is NOT default here — the bold headline carries the section.
// Assumes styles.css (tokens + brand.css) is loaded globally.

export default function SectionBlock({
  headline = "Understand the operation.",
  subline,
  items = [],
  showRule = true,
}) {
  return (
    <section className="ss-section-block ss-root">
      <h2 className="ss-section-headline">{headline}</h2>
      {subline && <p className="ss-subline">{subline}</p>}
      {items.map((item, i) => (
        <div className="ss-num-item" key={i}>
          <span className="ss-num">{String(i + 1).padStart(2, "0")}</span>
          <p className="ss-body">{item}</p>
        </div>
      ))}
      {showRule && <hr className="ss-hairline" />}
    </section>
  );
}
