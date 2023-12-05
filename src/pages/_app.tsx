import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import useSWR from "swr";
import { fetcher } from "lib/fetcher";

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { locale } = router;
  const { data, error } = useSWR(
    `https://vox-imore.ra-devs.tech/api/settings?lang=${locale}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  return (
    <div className="h-full">
      <Header data={data} />
      <Component {...pageProps} />
      <Footer data={data} />
    </div>
  );
}
