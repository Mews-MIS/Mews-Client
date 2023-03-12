import type { AppProps } from "next/app";
import GlobalStyles from "@styles/GlobalStyles";
import { ThemeProvider } from "@emotion/react";
import theme from "@styles/Theme";
import { SessionProvider } from "next-auth/react";
import Layout from "@components/Layout";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </RecoilRoot>
      </QueryClientProvider>
    </SessionProvider>
  );
}
