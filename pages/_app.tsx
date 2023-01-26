import '../styles/globals.css';
import React from 'react';

import { AppProvider, AuthProvider, LocalStorageProvider, ApiProvider } from '@context';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { clientSideEmotionCache } from '@style';
import type { AppProps } from 'next/app';
import '@fontsource/public-sans';

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
              <ApiProvider>
                <Component {...pageProps} />
              </ApiProvider>
            </AppProvider>
          </AuthProvider>
        </LocalStorageProvider>
      </CacheProvider>
    </React.StrictMode>
  );
}
