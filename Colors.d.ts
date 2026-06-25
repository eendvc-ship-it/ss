export interface SSColorToken {
  /** Human-readable token name, e.g. "Off-white". */
  name: string;
  /** Locked hex value from SKILL.md §3. Never pure #fff or #000. */
  hex: string;
  /** Where this token is allowed to be used. */
  use: string;
}

export interface ColorsProps {
  /** Palette to render. Defaults to the full locked S&S palette (SS_COLORS). */
  tokens?: SSColorToken[];
  /** Show the usage note under each swatch. Default true. */
  showUse?: boolean;
}

export const SS_COLORS: SSColorToken[];
export default function Colors(props: ColorsProps): JSX.Element;
