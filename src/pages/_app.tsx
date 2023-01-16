import type { AppProps } from "next/app";
import GlobalStyles from "@styles/GlobalStyles";
import { ThemeProvider } from "@emotion/react";
import theme from "@styles/Theme";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  );
}
