import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import { AuthProvider } from '@contexts/auth';
import type PageWithLayoutType from '@interfaces/layout';
import { RtlProvider } from '@lib/rtl';
import theme from '@lib/theme';

type AppLayoutProps = {
  Component: PageWithLayoutType;
  pageProps: any;
};

const App = ({ Component, pageProps }: AppLayoutProps) => {
  const Layout = Component.layout || (children => children.children);

  return (
    <>
      <NextNProgress
        color="#f23d4f"
        options={{ showSpinner: false, rtl: true }}
      />

      <Head>
        <title>لورم - ایپسوم متن ساختگی</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
        />
      </Head>

      <ChakraProvider theme={theme}>
        <RtlProvider>
          <AuthProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AuthProvider>
        </RtlProvider>
      </ChakraProvider>
    </>
  );
};

export default App;
