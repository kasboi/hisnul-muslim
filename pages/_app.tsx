import "@fontsource/noto-naskh-arabic"
import "@fontsource/quicksand"
import "@fontsource/open-sans"

import theme from "../theme/theme"

import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from "../components/Nav"

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ChakraProvider theme={theme}>
    <Navbar>
      <Component {...pageProps} />
    </Navbar>
  </ChakraProvider>
  )
}

export default MyApp
