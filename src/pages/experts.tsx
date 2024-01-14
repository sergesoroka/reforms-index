import Experts from "components/Experts/Experts";
import styles from "@/styles/Home.module.css";
import Head from "next/head";

export default function Home({ data, metadata }) {
  return (
    <>
      <Head>
        <title>{metadata.data[5].meta.title}</title>
        <meta name="description" content={metadata.data[5].meta.description} />
        <meta itemProp="name" content={metadata.data[5].meta.title} />
        <meta
          itemProp="description"
          content={metadata.data[5].meta.description}
        />
        <meta itemProp="image" content={metadata.data[5].meta.image} />
        {/* <meta property="og:url" content={window.location.href} /> */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.data[5].meta.title} />
        <meta
          property="og:description"
          content={metadata.data[5].meta.description}
        />
        <meta property="og:image" content={metadata.data[5].meta.image} />
        <meta property="og:image:type" content="png" />
        <meta property="og:image:width" content="630" />
        <meta property="og:image:height" content="331" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.data[5].meta.title} />
        <meta
          name="twitter:description"
          content={metadata.data[5].meta.description}
        />
        <meta name="twitter:image" content={metadata.data[5].meta.image} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="canonical" href={window.location.href} /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.mainAbout}>
        <Experts />
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://vox-imore.ra-devs.tech/api/pages?lang=${context.locale}`
  );
  const metadata = await res.json();

  return {
    props: {
      metadata,
    },
  };
}
