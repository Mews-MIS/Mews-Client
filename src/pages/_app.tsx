import type { AppProps } from "next/app";
import GlobalStyles from "@styles/GlobalStyles";
import { ThemeProvider } from "@emotion/react";
import theme from "@styles/Theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}
