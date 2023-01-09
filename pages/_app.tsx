import '../styles/globals.css';
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';

import { theme } from '../src/Config/theme';
import { AppLayout } from '../src/Layout/AppLayout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppLayout>
  );
}
