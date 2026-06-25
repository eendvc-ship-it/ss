import type { ReactNode } from "react";

export interface WarmGrayStripProps {
  /** Strip text — rendered centered, bold, all-caps, wide tracking by .ss-warm-strip.
   *  Default "WORKFLOWS AND AUTOMATIONS". */
  children?: ReactNode;
}

/** Move 2 / Move 5 — warm-gray strip, centered bold caps. Card device / Hero-to-body punctuation. */
export default function WarmGrayStrip(props: WarmGrayStripProps): JSX.Element;
