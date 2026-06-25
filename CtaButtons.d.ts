export interface CtaButtonsProps {
  /** Primary (solid black) button label. Title case, short, NO period. Default: "Book a free workflow audit". */
  primaryLabel?: string;
  /** Secondary (off-white, 1px black border) button label. Title case, short, NO period. Omit/empty to hide. */
  secondaryLabel?: string;
  /** Stack primary over secondary (true) vs. side-by-side (false). Default true — the brand default. */
  stacked?: boolean;
}

export default function CtaButtons(props: CtaButtonsProps): JSX.Element;
