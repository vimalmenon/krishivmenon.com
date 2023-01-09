import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {AppLayout} from "../src/Layout/AppLayout"
import {ThemeProvider} from "@mui/material/styles";
import {theme} from "../src/Config/theme"


export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      </ThemeProvider>
    </AppLayout>
  )
}

