import "@emotion/react";
import { theme } from "@styles/Theme";

type ThemeType = typeof theme;

declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface theme extends ThemeType {}
}
