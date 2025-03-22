import Head from "next/head";
import "../styles/globals.css"; // Se tiver CSS global

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>guilhermedonato.dev</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
