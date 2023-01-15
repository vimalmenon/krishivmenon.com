import '../styles/globals.css';
import React from 'react';

import { AppContext, AuthProvider } from '@context';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { clientSideEmotionCache } from '@style';
import type { AppProps } from 'next/app';

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppProps & { emotionCache: EmotionCache }) {
  return (
    <React.StrictMode>
      <CacheProvider value={emotionCache}>
        <AuthProvider>
          <AppContext>
            <Component {...pageProps} />
          </AppContext>
        </AuthProvider>
      </CacheProvider>
    </React.StrictMode>
  );
}
