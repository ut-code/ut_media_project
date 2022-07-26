import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <SearchAppBar /> */}
      {/* <Navbar /> */}
      <Component {...pageProps} />
      <Toaster />
    </>
  )
}

export default MyApp
