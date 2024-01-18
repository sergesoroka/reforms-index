import styles from "@/styles/Home.module.css";
import Experts from "components/Experts/Experts";
import Head from "next/head";
import Script from "next/script";

export default function Home({ data, metadata }) {
  return (
    <>
      <Script strategy="lazyOnload" id="googleAnalitics">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NPLHJJTR')
        `}
      </Script>
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
    `https://api-reforms.voxukraine.org/api/pages?lang=${context.locale}`
  );
  const metadata = await res.json();

  return {
    props: {
      metadata,
    },
  };
}
