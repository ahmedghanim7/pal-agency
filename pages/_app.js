import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { Layout } from "../Components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Musmiy</title>
      </Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
