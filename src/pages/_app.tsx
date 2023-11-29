import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="h-full">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
