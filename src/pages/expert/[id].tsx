import Head from "next/head";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "lib/fetcher";

import ExpertProfile from "components/Experts/ExpertProfile";

export default function ExpertPage({ baseURL, setting }) {
  const router = useRouter();
  const { locale, asPath } = router;

  const { data, isLoading, isValidating } = useSWR(
    `${baseURL}/api${asPath}?lang=${locale}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return (
    <>
      <Header data={setting} />
      <main className={styles.main}>
        <ExpertProfile data={data} baseURL={baseURL} />
      </main>
      <Footer data={setting} />
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `${process.env.baseURL}/api/pages?lang=${context.locale}`
  );
  const resSetting = await fetch(
    `${process.env.baseURL}/api/settings?lang=${context.locale}`
  );
  const metadata = await res.json();
  const setting = await resSetting.json();

  return {
    props: {
      metadata,
      baseURL: process.env.baseURL,
      setting,
    },
  };
}
