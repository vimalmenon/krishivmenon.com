import '../styles/globals.css';
import { AppContext } from '@common';
import createCache from '@emotion/cache';
import { CacheProvider, EmotionCache } from '@emotion/react';
import type { AppProps } from 'next/app';

const clientSideEmotionCache = createCache({
  key: 'css',
});

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppProps & { emotionCache: EmotionCache }) {
  return (
    <AppContext>
      <CacheProvider value={emotionCache}>
        <Component {...pageProps} />
      </CacheProvider>
    </AppContext>
  );
}
