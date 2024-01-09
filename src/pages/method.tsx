import Head from "next/head";
import styles from "@/styles/Home.module.css";
import useSWR from "swr";
import { fetcher } from "lib/fetcher";
import { useRouter } from "next/router";

export default function Method() {
  const router = useRouter();
  const { locale } = router;
  const { data, error } = useSWR(
    `https://vox-imore.ra-devs.tech/api/pages?lang=${locale}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  const pageRender =
    data &&
    data.data.map((page, i) => {
      if (page.id == 2) {
        return (
          <div key={i} className="mb-4">
            <h1 className="mb-8">{page.title}</h1>
            <p dangerouslySetInnerHTML={{ __html: page.content }} />
          </div>
        );
      }
    });
  return (
    <>
      <Head>
        <title>Методологія | Індекс реформ</title>
        <meta
          name="description"
          content="Індекс реформ — проєкт, що відстежує всі економічні реформи та антиреформи з 2015 року"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainAboutPage}>{pageRender}</main>
    </>
  );
}
