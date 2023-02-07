import type { AppProps } from "next/app";
import GlobalStyles from "@styles/GlobalStyles";
import { ThemeProvider } from "@emotion/react";
import theme from "@styles/Theme";
import { SessionProvider } from "next-auth/react";
import Layout from "@components/Layout";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <SessionProvider session={pageProps.session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </ThemeProvider>
    </RecoilRoot>
  );
}
