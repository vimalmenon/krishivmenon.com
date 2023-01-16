import '../styles/globals.css';
import React from 'react';

import { AppProvider, AuthProvider, LocalStorageProvider } from '@context';
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
        <LocalStorageProvider>
          <AuthProvider>
            <AppProvider>
              <Component {...pageProps} />
            </AppProvider>
          </AuthProvider>
        </LocalStorageProvider>
      </CacheProvider>
    </React.StrictMode>
  );
}
