export interface BusinessCardProps {
  /** Hero tagline headline on the black front — sentence case, ends with a period. Default "Every business leaks." */
  headline?: string;
  /** Warm-gray Always-Visible Strip text — bold spaced caps. Default "WORKFLOWS AND AUTOMATIONS". */
  stripText?: string;
}

export default function BusinessCard(props: BusinessCardProps): JSX.Element;
