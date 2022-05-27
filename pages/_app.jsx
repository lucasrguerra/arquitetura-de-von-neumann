"use strict";

import ContextProvider from "../components/Context";
import "tailwindcss/tailwind.css";
import Head from "next/head";

function App({ Component, pageProps: { ...pageProps } }) {
  return (
    <ContextProvider>
      <Head>
        <title>Arquitetura de Von Neumann</title>
      </Head>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default App;
