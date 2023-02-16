import '../styles/globals.css';
import React from 'react';

import { ErrorBoundary } from '@common';
import { AppProvider, AuthProvider, LocalStorageProvider, ApiProvider } from '@context';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { clientSideEmotionCache } from '@style';
import type { AppProps } from 'next/app';
import '@fontsource/public-sans';

const MyApp: React.FC<AppProps & { emotionCache: EmotionCache }> = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) => {
  return (
    <React.StrictMode>
      <CacheProvider value={emotionCache}>
        <LocalStorageProvider>
          <ErrorBoundary>
            <AppProvider>
              <AuthProvider>
                <ApiProvider>
                  <Component {...pageProps} />
                </ApiProvider>
              </AuthProvider>
            </AppProvider>
          </ErrorBoundary>
        </LocalStorageProvider>
      </CacheProvider>
    </React.StrictMode>
  );
};

export default MyApp;
