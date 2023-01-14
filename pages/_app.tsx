import '../styles/globals.css';
import { AppContext } from '@common';
import { CacheProvider, EmotionCache } from '@emotion/react';
import type { AppProps } from 'next/app';

import { clientSideEmotionCache } from '../src/Config/styles';

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
