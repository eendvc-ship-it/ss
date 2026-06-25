export interface TwoColumnSplitColumn {
  /** Em-dash label, spaced caps (e.g. "CO-FOUNDER"). Rendered with the leading rule. */
  label?: string;
  /** Column headline — bold sentence case, ends with a period (§4b). */
  name: string;
  /** Role line under the name (e.g. "Strategy & Client"). */
  role?: string;
  /** Contact line, muted (email · phone). */
  contact?: string;
}

export interface TwoColumnSplitProps {
  /** Left column. Defaults to Lance Stubbs Jr. — Strategy & Client. */
  left?: TwoColumnSplitColumn;
  /** Right column. Defaults to Vince Sorboro — Audit & Build. */
  right?: TwoColumnSplitColumn;
}

export default function TwoColumnSplit(props: TwoColumnSplitProps): JSX.Element;
