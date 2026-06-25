// S&S Automations — WebSection (WEB §5b long-form section).
// Flat off-white. Spaced-caps category label, sentence-case headline WITH period,
// body paragraph, supporting list. NO black panel, NO warm strip, NO borders —
// whitespace separates sections. Assumes styles.css loaded globally.

export default function WebSection({
  category = "What We Look For",
  headline = "Every business leaks time and money.",
  body = "We sit with your operation, map how the work actually moves, and find the steps that quietly cost more than they should. Then we plug them.",
  items = [],
}) {
  return (
    <section className="ss-root ss-web ss-web-section">
      {category && <span className="ss-cat-label">{category}</span>}
      <h2 className="ss-section-headline">{headline}</h2>
      {body && <p className="ss-body">{body}</p>}
      {items.length > 0 && (
        <ul
          style={{ listStyle: "none", margin: "var(--ss-space-4) 0 0", padding: 0 }}
        >
          {items.map((item, i) => (
            <li
              key={i}
              style={{
                fontSize: "var(--ss-body-size)",
                lineHeight: "var(--ss-body-lh)",
                color: "var(--ss-ink)",
                marginTop: i === 0 ? 0 : "var(--ss-space-3)",
              }}
            >
              <span style={{ color: "var(--ss-sub-ink)", marginRight: 12 }}>—</span>
              {item}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
