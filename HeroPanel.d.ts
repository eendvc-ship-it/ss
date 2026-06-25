export interface HeroPanelProps {
  /** Em-dash label, top-left, off-white. Spaced caps via .ss-label. Default "S&S Automations". */
  label?: string;
  /** Massive sentence-case bold headline. ALWAYS ends with a period. Default "The meeting framework." */
  headline?: string;
  /** Optional muted metadata tag, bottom-right (e.g. "BETA · SPIN"). Omit to hide. */
  tag?: string;
}

/** Move 1 — full-bleed black Hero Panel. PRINT / CARD ONLY (never web/long-form). */
export default function HeroPanel(props: HeroPanelProps): JSX.Element;
