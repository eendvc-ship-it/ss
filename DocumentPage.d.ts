// S&S Automations — DocumentPage (Document Mode, §9b). Type surface.

export interface SSDocTable {
  /** Header row cells — rendered bold. */
  head: string[];
  /** Body rows; each row is an array of cells aligned to `head`. */
  rows: string[][];
}

export interface SSDocSection {
  /** Plain `#`-style H1 heading. Ends with a period. No em-dash label. */
  heading: string;
  /** Optional body prose paragraph. */
  body?: string;
  /** Optional hyphen-bullet list (parallel phrasing). */
  bullets?: string[];
  /** Optional clean 2-col terms table (bold header row, light rules). */
  table?: SSDocTable;
  /** Optional italic aside / clarifying note. */
  aside?: string;
}

export interface DocumentPageProps {
  /** Bold document title — sentence/title case, ends with a period. */
  title?: string;
  /** Italic muted subtitle — entity, date, version. */
  subtitle?: string;
  /** Ordered content sections. */
  sections?: SSDocSection[];
}

export const SS_DOCUMENT_SECTIONS: SSDocSection[];
export default function DocumentPage(props: DocumentPageProps): JSX.Element;
