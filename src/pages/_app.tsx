import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import NavMenu from '@/components/navBar';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NavMenu />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
