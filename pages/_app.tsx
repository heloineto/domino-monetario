import 'tailwindcss/tailwind.css';

import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../lib/theme';
import createEmotionCache from '../lib/createEmotionCache';
import MainShell from '@components/appShells/MainShell';
import CustomSnackbarProvider from '@components/elements/feedback/CustomSnackbarProvider';
import { Head } from 'next/document';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <CustomSnackbarProvider>
          <MainShell>
            <Component {...pageProps} />
          </MainShell>
        </CustomSnackbarProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
