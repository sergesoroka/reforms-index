import Experts from "components/Experts/Experts";
import styles from "@/styles/Home.module.css";
import Head from "next/head";

export default function Home({ data }) {
  console.log(data);

  const renderMetaData =
    data &&
    data.data.map((item) => {
      if (item.id == 6) {
        return (
          <div key={item.id}>
            <Head>
              <title>{item.meta.title}</title>
              <meta name="description" content={item.meta.description} />
              <meta property="og:title" content={item.meta.title} />
              <meta property="og:description" content={item.meta.description} />
              <meta property="og:image" content={item.meta.image} />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
              <link rel="icon" href="/favicon.ico" />
            </Head>
          </div>
        );
      }
    });

  return (
    <main className={styles.mainAbout}>
      {renderMetaData}
      <Experts />
    </main>
  );
}
