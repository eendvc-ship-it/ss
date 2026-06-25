export interface SSTypeRow {
  /** Stable key for the scale row, e.g. "hero". */
  key: string;
  /** Brand class that carries the style, e.g. "ss-hero". */
  className: string;
  /** Sample text rendered in that style. */
  sample: string;
  /** Spec caption: name · class · size/weight · use. */
  spec: string;
}

export interface TypographyProps {
  /** Type rows to render. Defaults to the full S&S scale (SS_TYPE_SCALE). */
  scale?: SSTypeRow[];
  /** Show the spec caption under each style. Default true. */
  showSpecs?: boolean;
}

export const SS_TYPE_SCALE: SSTypeRow[];
export default function Typography(props: TypographyProps): JSX.Element;
