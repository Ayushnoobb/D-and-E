import { SessionProvider } from "next-auth/react";
import React from "react";
import "@/styles/globals.css";
// import Layout from "./layout";
import Head from "next/head";
import Navbar from "@/component/navbar/Navbar";
import Footer from "@/component/footer/Footer";

import "@/styles/globals.css"


export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
        <Head>
          <meta name="author" content="Ayush"/>
          <meta name="description" content="D and E online shop"/>
          <meta name="keywords" content="D&E DandE oneline shop oneline store"/>
        </Head>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
    </SessionProvider>
  );
}

