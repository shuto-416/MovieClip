import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from './Headers/Header'
import { ChakraProvider } from "@chakra-ui/react"
import theme from "../theme/theme"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
