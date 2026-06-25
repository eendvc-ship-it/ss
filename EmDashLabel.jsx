// S&S Automations — EmDashLabel (foundation atom).
// Short rule + gap + spaced caps. Source: ss-brand SKILL.md §4c.
// Use SPARINGLY — Hero / Closer / major pivot only (2–3 per page max). Never section ornament.
// Assumes styles.css is loaded globally. The rule + tracking come from the .ss-label class.

export const SS_LABEL_EXAMPLES = ["S&S AUTOMATIONS", "THE OFFER", "CO-FOUNDER"];

export default function EmDashLabel({ children, onDark = false }) {
  // .ss-label draws the rule via ::before; .ss-on-dark flips it to off-white.
  return onDark ? (
    <span className="ss-on-dark ss-label" style={{ background: "transparent" }}>{children}</span>
  ) : (
    <span className="ss-label">{children}</span>
  );
}
