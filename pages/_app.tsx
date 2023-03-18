import '../styles/globals.css';
import React from 'react';

import { CacheProvider, EmotionCache } from '@emotion/react';
import type { AppProps } from 'next/app';

import { ErrorBoundary } from '@common';
import { AppProvider, AuthProvider, ApiProvider } from '@context';
import { clientSideEmotionCache } from '@style';

import '@fontsource/public-sans';

const MyApp: React.FC<AppProps & { emotionCache: EmotionCache }> = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) => {
  return (
    <React.StrictMode>
      <CacheProvider value={emotionCache}>
        <ErrorBoundary>
          <AppProvider>
            <AuthProvider>
              <ApiProvider>
                <Component {...pageProps} />
              </ApiProvider>
            </AuthProvider>
          </AppProvider>
        </ErrorBoundary>
      </CacheProvider>
    </React.StrictMode>
  );
};

export default MyApp;
