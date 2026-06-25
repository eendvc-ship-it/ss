// S&S Automations — ProductDetail (Web, §5c). Type surface.

export interface ProductDetailProps {
  /** Product headline — ends with a period. Default "Google Drive auto-sorter." */
  name?: string;
  /** Build-ID stamp from the Machinery Standard (`SS-[CLIENT]-[##]`). Default "SS-GDR-003". */
  buildId?: string;
  /** Origin-story paragraph — why this product exists. */
  origin?: string;
  /** "What it does" — parallel hyphen-bullet list. */
  does?: string[];
  /** Customization menu — parallel hyphen-bullet list. */
  customization?: string[];
  /** Price line. Format LOCKED: "From $500 setup · $79/mo". */
  price?: string;
}

export default function ProductDetail(props: ProductDetailProps): JSX.Element;
