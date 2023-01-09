import "@emotion/react";
import { theme } from "@styles/Theme";

type ThemeType = typeof theme;

declare module "@emotion/react" {
  export interface theme extends ThemeType {}
}
