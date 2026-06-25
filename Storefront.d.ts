// S&S Automations — Storefront (Web, §5c). Type surface.

export interface SSStorefrontTile {
  /** Tile name — top of the tile. Ends with a period. */
  name: string;
  /** Build-ID stamp (e.g. "SS-GDR-003"). Live tiles only; pulled from the Machinery Standard. */
  buildId?: string;
  /** Price line. Format LOCKED: "From $500 setup · $79/mo" (middle-dot, whole dollars). */
  price?: string;
  /** Bottom-anchored description. */
  desc?: string;
  /** Muted "coming soon" placeholder — no price, sub-ink name. */
  soon?: boolean;
  /** The persistent "bring it to us" tile that routes to the workflow audit. */
  bring?: boolean;
  /** CTA label for the bring-it-to-us tile. Default "Book a free workflow audit". */
  cta?: string;
  /** CTA href for the bring-it-to-us tile. */
  href?: string;
}

export interface StorefrontProps {
  /** Storefront hero. LOCKED default: "Turning your ideas for a better business into reality." */
  heroHeadline?: string;
  /** Tiles for the shelf — rendered two rows of four (eight total). */
  tiles?: SSStorefrontTile[];
}

export const SS_STOREFRONT_TILES: SSStorefrontTile[];
export default function Storefront(props: StorefrontProps): JSX.Element;
