// @ts-nocheck
import styles from "@/styles/Home.module.css";
import Divider from "components/Divider/Divider";
import HomeBarChart from "components/HomePageComps/HomeBarChart";
import HomeExperts from "components/HomePageComps/HomeExperts";
import HomePosts from "components/HomePageComps/HomePosts";
import HomeText from "components/HomePageComps/HomeText";
import GoogleAnalitics from "lib/googleAnalitic";
import Link from "next/link";
import Head from "next/head";

function Home({ data, dataSettings, metadata }) {
  return (
    <>
      <Head>
        <GoogleAnalitics />
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
    `https://vox-imore.ra-devs.tech/api/pages?lang=${context.locale}`
  );
  const metadata = await res.json();

  return {
    props: {
      metadata,
    },
  };
}
export default Home;
