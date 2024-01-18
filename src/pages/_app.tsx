import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import useSWR, { preload } from "swr";
import { fetcher } from "lib/fetcher";

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

preload(`https://api-reforms.voxukraine.org/api/pages?lang=ua`, fetcher);

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { locale } = router;
  const { data: dataSettings } = useSWR(
    `https://api-reforms.voxukraine.org/api/settings?lang=${locale}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const { data, error } = useSWR(
    `https://api-reforms.voxukraine.org/api/pages?lang=${locale}`,
    fetcher
  );

  return (
    <div className="h-full">
      <Header data={dataSettings} />

      <Component {...pageProps} data={data} dataSettings={dataSettings} />
      <Footer data={dataSettings} />
    </div>
  );
}
