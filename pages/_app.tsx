import '../styles/globals.css';
import { AppContext } from '@common';
import { AppLayout } from '@layout';
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';

import { theme } from '../src/Config/styles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContext>
      <AppLayout>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </AppLayout>
    </AppContext>
  );
}
