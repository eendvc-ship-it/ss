import type { ReactNode } from "react";

export interface EmDashLabelProps {
  /** The caps text, e.g. "S&S AUTOMATIONS". Author supplies uppercase copy. */
  children: ReactNode;
  /** Render for a black surface (off-white rule + text). Default false. */
  onDark?: boolean;
}

/** Canonical example labels from SKILL.md §4c. */
export const SS_LABEL_EXAMPLES: string[];
export default function EmDashLabel(props: EmDashLabelProps): JSX.Element;
