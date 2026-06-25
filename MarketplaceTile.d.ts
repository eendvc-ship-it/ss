export type MarketplaceTileState = "live" | "soon" | "bring";

export interface MarketplaceTileProps {
  /** Product name — top of the tile. For "bring", the prompt copy, e.g. "Don't see your idea? Bring it to us." */
  name?: string;
  /** Price — middle. LOCKED format: "From $500 setup · $79/mo" (middle-dot, whole dollars). Live tiles only. */
  price?: string;
  /** Description — BOTTOM-ANCHORED. Short, declarative, period-ended. */
  description?: string;
  /** Build-ID badge, e.g. "SS-GDR-003". Pull the real ID from the Machinery Standard — never invent. Live tiles only. */
  buildId?: string;
  /** Tile state: "live" (off-white, priced), "soon" (muted, no price), "bring" (on-ramp, no price). Default "live". */
  state?: MarketplaceTileState;
}

export default function MarketplaceTile(props: MarketplaceTileProps): JSX.Element;
