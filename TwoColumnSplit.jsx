// S&S Automations — TwoColumnSplit (Move 6).
// Hard 50/50 vertical split on light, with a vertical hairline divider between columns.
// Each column: em-dash label + headline + role + contact. Used for founder bio cards.
// Source: ss-brand SKILL.md §5 (Move 6), §1 (founder contacts).
// Assumes styles.css (tokens + brand.css) is loaded globally.

function Col({ label, name, role, contact }) {
  return (
    <div className="ss-col">
      {label && <span className="ss-label">{label}</span>}
      <h2 className="ss-section-headline">{name}</h2>
      {role && <p className="ss-body">{role}</p>}
      {contact && <p className="ss-body ss-muted">{contact}</p>}
    </div>
  );
}

export default function TwoColumnSplit({
  left = {
    label: "CO-FOUNDER",
    name: "Lance Stubbs Jr.",
    role: "Strategy & Client",
    contact: "lance@ss-automations.com · (323) 551-7475",
  },
  right = {
    label: "CO-FOUNDER",
    name: "Vince Sorboro.",
    role: "Audit & Build",
    contact: "vince@ss-automations.com · (330) 998-8934",
  },
}) {
  return (
    <div className="ss-two-col ss-root">
      <Col {...left} />
      <div className="ss-divider" />
      <Col {...right} />
    </div>
  );
}
