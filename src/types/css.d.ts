import "react";

declare module "react" {
  // Framer's markup relies heavily on CSS custom properties set inline.
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined;
    cornerShape?: string;
  }
}
