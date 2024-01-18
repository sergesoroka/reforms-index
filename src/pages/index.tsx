// @ts-nocheck
import styles from "@/styles/Home.module.css";
import Divider from "components/Divider/Divider";
import HomeBarChart from "components/HomePageComps/HomeBarChart";
import HomeExperts from "components/HomePageComps/HomeExperts";
import HomePosts from "components/HomePageComps/HomePosts";
import HomeText from "components/HomePageComps/HomeText";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

function Home({ data, dataSettings, metadata }) {
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
        <title>{metadata.data[7].meta.title}</title>
        <meta name="description" content={metadata.data[7].meta.description} />
        <meta itemProp="name" content={metadata.data[7].meta.title} />
        <meta
          itemProp="description"
          content={metadata.data[7].meta.description}
        />
        <meta itemProp="image" content={metadata.data[7].meta.image} />
        {/* <meta property="og:url" content={window.location.href} /> */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.data[7].meta.title} />
        <meta
          property="og:description"
          content={metadata.data[7].meta.description}
        />
        <meta property="og:image" content={metadata.data[7].meta.image} />
        <meta property="og:image:type" content="png" />
        <meta property="og:image:width" content="630" />
        <meta property="og:image:height" content="331" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.data[7].meta.title} />
        <meta
          name="twitter:description"
          content={metadata.data[7].meta.description}
        />
        <meta name="twitter:image" content={metadata.data[7].meta.image} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="canonical" href={window.location.href} /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainAbout}>
        <Divider
          heading={dataSettings && dataSettings.data.hp_block_1_title}
          gray={true}
          openable={false}
          single={false}
        />
        <HomeBarChart />
        <HomeText />
        <div className="my-0 mx-auto pt-4">
          {/* <Link href="/" className="hover:text-red-600 text-[14px]">
            Інтерактивний графік
          </Link> */}
        </div>
        <Divider
          heading={dataSettings && dataSettings.data.hp_block_2_title}
          gray={true}
          openable={false}
          single={false}
        />
        <HomeExperts />
        <Divider
          heading={dataSettings && dataSettings.data.hp_block_3_title}
          gray={true}
          openable={false}
          single={false}
        />
        <HomePosts />
        <Link
          href="https://voxukraine.org/category/reformi/imore"
          passHref
          target="_blank"
          className="w-full"
        >
          <p className="mt-8 text-gray-500 text-center">
            Всі матеріали на сайті &laquo;Вокс Україна&raquo;
          </p>
        </Link>
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
export default Home;
