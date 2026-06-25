export interface LogoProps {
  /** Which logo file. "black" on light/off-white, "offwhite" on black panels. Default "black". */
  variant?: "black" | "offwhite";
  /** Rendered mark size in px (square). Min 50px on screen. Default 128. */
  size?: number;
  /** Reserve clear space (= half the mark height) around the mark. Default true. */
  clearSpace?: boolean;
  /** Accessible alt text. Defaults to "S&S Automations logo". */
  alt?: string;
}

/** Asset paths keyed by variant (relative to the component dir). */
export const SS_LOGO_FILES: { black: string; offwhite: string };
export default function Logo(props: LogoProps): JSX.Element;
