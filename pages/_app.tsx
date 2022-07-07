import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import {Toaster} from 'react-hot-toast';
import SearchAppBar from '../components/SearchAppBar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SearchAppBar />
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </>
  )
}

export default MyApp
