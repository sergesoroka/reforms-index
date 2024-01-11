import styles from "@/styles/Home.module.css";
import Head from "next/head";

export default function Audits({ data }) {
  const pageRender =
    data &&
    data.data.map((page, i) => {
      if (page.id == 4) {
        return (
          <div key={i}>
            <Head>
              <title>{page.meta.title}</title>
              <meta name="description" content={page.meta.description} />
              <meta property="og:image" content={page.meta.image} />
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
