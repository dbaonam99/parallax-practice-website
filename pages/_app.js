import { ParallaxProvider } from 'react-scroll-parallax';
import '../styles/root.scss';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return <ParallaxProvider>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    </Head>
    <Component {...pageProps} />
  </ParallaxProvider>
}

export default MyApp
