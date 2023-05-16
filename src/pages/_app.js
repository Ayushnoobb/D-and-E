import { SessionProvider } from "next-auth/react";
import React from "react";
import "@/styles/globals.css";
import Head from "next/head";
import Navbar from "@/component/navbar/Navbar";
import Footer from "@/component/footer/Footer";
import { Provider } from "react-redux";
import { store } from "@/store/store";

import "@/styles/globals.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      {/* <Provider store={store}> */}
        <Head>
          <meta name="author" content="Ayush" />
          <meta name="description" content="D and E online shop" />
          <meta
            name="keywords"
            content="D&E DandE oneline shop oneline store"
          />
          <script src="https://cdn.tailwindcss.com"></script>
        </Head>
        <Navbar />
        <Layout Component={Component} pageProps={pageProps} />
        <Footer />
      {/* </Provider> */}
    </SessionProvider>
  );
}

const Layout = ({ Component, pageProps }) => {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  } else {
    return <Component {...pageProps} />;
  }
};
