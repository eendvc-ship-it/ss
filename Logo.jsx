// S&S Automations — Logo (foundation reference).
// Circular badge mark, two transparent PNGs. Source: ss-brand SKILL.md §10.
// Assumes styles.css is loaded globally. Clear space = half the mark height on all sides.

export const SS_LOGO_FILES = {
  black: "../../../assets/ss_logo_black_transparent.png",    // place on light / off-white
  offwhite: "../../../assets/ss_logo_offwhite_transparent.png", // place on black panels
};

export default function Logo({ variant = "black", size = 128, clearSpace = true, alt }) {
  const onDark = variant === "offwhite";
  const pad = clearSpace ? size / 2 : 0; // §10: clear space ≥ half the mark height
  return (
    <div
      className="ss-root"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: onDark ? "var(--ss-black)" : "var(--ss-offwhite)",
        padding: pad,
      }}
    >
      <img
        src={SS_LOGO_FILES[variant]}
        alt={alt || "S&S Automations logo"}
        width={size}
        height={size}
        style={{ display: "block" }}
      />
    </div>
  );
}
