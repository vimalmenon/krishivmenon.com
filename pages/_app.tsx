import '../styles/globals.css';
import { AppContext } from '@common';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';

import { theme } from '../src/Config/styles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContext>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </AppContext>
  );
}
