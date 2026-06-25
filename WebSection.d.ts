export interface WebSectionProps {
  /** Small spaced-caps category label, e.g. "What We Look For". Omit to hide. */
  category?: string;
  /** Large sentence-case headline. ALWAYS ends with a period. */
  headline?: string;
  /** Body paragraph. Plain English, declarative, period-ended. */
  body?: string;
  /** Supporting list items. Each a short, period-ended line. Default []. */
  items?: string[];
}

export default function WebSection(props: WebSectionProps): JSX.Element;
