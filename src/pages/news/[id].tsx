import Head from "next/head";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import News from "components/News/News";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "lib/fetcher";

export default function NewsPage({ baseURL, setting }) {
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

  if (!isLoading && data.message == "Новини не існує") router.push("/404");
  if (data && data.message !== "Новини не існує") {
    return (
      <>
        <Header data={setting} />
        <main className={styles.mainAboutPage}>
          <News data={data} />
        </main>
        <Footer data={setting} />
      </>
    );
  }
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
