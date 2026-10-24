import { REVEAL_STYLE, TOKENS } from "@/components/sections/framer-shared";
import { BgDecoration } from "./BgDecoration";
import {
  BG_DECORATION_LARGE,
  BG_DECORATION_SMALL,
  BG_LARGE_ASPECT_RATIO,
  BG_SMALL_ASPECT_RATIO,
  decorationStyle,
} from "./resource-display";

const SMALL_SIZES =
  "(min-width: 1280px) 924.2003px, (max-width: 991.98px) calc(100vw - 40px), (min-width: 992px) and (max-width: 1279.98px) calc(100vw - 40px)";
const LARGE_SIZES =
  "(min-width: 1280px) 1096px, (max-width: 991.98px) calc(100vw - 40px), (min-width: 992px) and (max-width: 1279.98px) calc(100vw - 40px)";

export interface CategoryBannerProps {
  /** The category title (H1), e.g. "Community". */
  title: string;
}

/**
 * Framer's "Resource Category Banner Section" of /resource-category/<tag>
 * (section.framer-a1z2uc, e.g. hash 30548263cb for community, be4743acda for business; the
 * exports differ only in the H1): decoration images per breakpoint and the category title.
 */
export function CategoryBanner({ title }: CategoryBannerProps) {
  return (
    <section className="framer-a1z2uc" data-framer-name="Resource Category Banner Section">
      <div className="framer-101qfkv" data-framer-name="BG Wrapper">
        <BgDecoration
          wrapperClassName="ssr-variant hidden-6m94jk hidden-1h06v9m"
          className="framer-cccixa"
          style={decorationStyle("width", BG_SMALL_ASPECT_RATIO, true)}
          image={BG_DECORATION_SMALL}
          sizes={SMALL_SIZES}
        />
        <BgDecoration
          wrapperClassName="ssr-variant hidden-1h06v9m hidden-qf426o"
          className="framer-cccixa"
          style={decorationStyle("height", BG_SMALL_ASPECT_RATIO, true)}
          image={BG_DECORATION_SMALL}
          sizes={SMALL_SIZES}
        />
        <BgDecoration
          wrapperClassName="ssr-variant hidden-6m94jk hidden-qf426o"
          className="framer-cccixa"
          image={BG_DECORATION_SMALL}
          sizes={SMALL_SIZES}
        />
        <BgDecoration
          wrapperClassName="ssr-variant hidden-6m94jk hidden-1h06v9m"
          className="framer-1rszes2"
          style={decorationStyle("width", BG_LARGE_ASPECT_RATIO, true)}
          image={BG_DECORATION_LARGE}
          sizes={LARGE_SIZES}
        />
        <BgDecoration
          wrapperClassName="ssr-variant hidden-1h06v9m hidden-qf426o"
          className="framer-1rszes2"
          style={decorationStyle("height", BG_LARGE_ASPECT_RATIO, true)}
          image={BG_DECORATION_LARGE}
          sizes={LARGE_SIZES}
        />
        <BgDecoration
          wrapperClassName="ssr-variant hidden-6m94jk hidden-qf426o"
          className="framer-1rszes2"
          image={BG_DECORATION_LARGE}
          sizes={LARGE_SIZES}
        />
      </div>
      <div className="framer-c1q7g" data-framer-name="Base Container">
        <div
          className="framer-842uhj"
          data-framer-name="Heading"
          data-framer-component-type="RichTextContainer"
          style={REVEAL_STYLE}
        >
          <h1
            className="framer-text framer-styles-preset-lo4ujp"
            data-styles-preset="aeh2bjTr3"
            dir="auto"
            style={{
              "--framer-text-alignment": "center",
              "--framer-text-color": TOKENS.white,
            }}
          >
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
