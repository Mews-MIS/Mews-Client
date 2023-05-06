import type { AppProps } from "next/app";
import GlobalStyles from "@styles/GlobalStyles";
import { ThemeProvider } from "@emotion/react";
import theme from "@styles/Theme";
import { SessionProvider } from "next-auth/react";
import Layout from "@components/Layout";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <RecoilRoot>
            <ThemeProvider theme={theme}>
              <GlobalStyles />
              <Layout>
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <Component {...pageProps} />
              </Layout>
            </ThemeProvider>
          </RecoilRoot>
        </Hydrate>
      </QueryClientProvider>
    </SessionProvider>
  );
}
