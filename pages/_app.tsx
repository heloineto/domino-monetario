import 'tailwindcss/tailwind.css';

import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../lib/theme';
import createEmotionCache from '../lib/createEmotionCache';
import CustomSnackbarProvider from '@components/elements/feedback/CustomSnackbarProvider';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      {/* <NoAutoCompleteBackground /> */}
      {/* <CustomScrollBar /> */}
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <CustomSnackbarProvider>
          <Component {...pageProps} />
        </CustomSnackbarProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
