import Head from "next/head";
import styles from "@/styles/Home.module.css";
import useSWR from "swr";
import { fetcher } from "lib/fetcher";
import { useRouter } from "next/router";

export default function About() {
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
  // https://vox-imore.ra-devs.tech/api/pages?lang=ua
  const pageRender =
    data &&
    data.data.map((page, i) => {
      if (page.id == 1) {
        return (
          <div key={i}>
            <Head>
              <title>{page.meta.title}</title>
              <meta name="description" content={page.meta.description} />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="mb-4">
              <h1 className="mb-8">{page.title}</h1>
              <p dangerouslySetInnerHTML={{ __html: page.content }} />
            </div>
          </div>
        );
      }
    });
  return (
    <>
      <main className={styles.mainAboutPage}>{pageRender}</main>
    </>
  );
}
