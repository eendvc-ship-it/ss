export interface SectionBlockProps {
  /** Section headline — sentence case, bold, ALWAYS ends with a period (SKILL.md §4b). */
  headline?: string;
  /** Optional italic muted sub-line. Only add when context genuinely needs it (§4d). */
  subline?: string;
  /** Content rendered as two-digit bold numbered items (01, 02, 03 …) (§4f). */
  items?: string[];
  /** Render the bottom hairline rule that separates this block from the next. Default true. */
  showRule?: boolean;
}

export default function SectionBlock(props: SectionBlockProps): JSX.Element;
