import '../styles/globals.css';
import React from 'react';

import {
  AppProvider,
  AuthProvider,
  LocalStorageProvider,
  ApiProvider,
  ErrorBoundaryProvider,
} from '@context';
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
          <ErrorBoundaryProvider>
            <AuthProvider>
              <AppProvider>
                <ApiProvider>
                  <Component {...pageProps} />
                </ApiProvider>
              </AppProvider>
            </AuthProvider>
          </ErrorBoundaryProvider>
        </LocalStorageProvider>
      </CacheProvider>
    </React.StrictMode>
  );
};

export default MyApp;
