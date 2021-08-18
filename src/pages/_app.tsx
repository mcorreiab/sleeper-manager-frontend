/* eslint-disable react/jsx-props-no-spreading */
import Head from "next/head";
import type { AppProps } from "next/app";
import "../../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Sleeper Manager</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
