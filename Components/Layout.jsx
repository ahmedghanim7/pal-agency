import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Real-estate app</title>
      </Head>
      <Box w={"95%"} margin="auto">
        <nav>
          <Navbar />
        </nav>
        <main style={{ minHeight: "85vh" }}>{children}</main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  );
};
