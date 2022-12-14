import React from "react";
import type { AppProps } from "next/app";
import "../app/styles/globals.css";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
    <Component {...pageProps} />
);

export default App;
