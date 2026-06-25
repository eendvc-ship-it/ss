export interface CloserPanelProps {
  /** Em-dash label, top-left, off-white. Spaced caps via .ss-label. Default "The offer". */
  label?: string;
  /** Closing punchline / offer headline. Sentence case, ALWAYS ends with a period. Default "25% of what we save you." */
  headline?: string;
  /** Optional muted supporting line under the headline (e.g. "No savings, no monthly fee."). Omit to hide. */
  support?: string;
}

/** Move 4 — full-bleed black Closer Panel. PRINT / CARD ONLY (never web/long-form). */
export default function CloserPanel(props: CloserPanelProps): JSX.Element;
