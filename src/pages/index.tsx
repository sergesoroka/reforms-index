import styles from "@/styles/Home.module.css";
import Divider from "components/Divider/Divider";
import HomeBarChart from "components/HomePageComps/HomeBarChart";
import HomeExperts from "components/HomePageComps/HomeExperts";
import HomePosts from "components/HomePageComps/HomePosts";
import HomeText from "components/HomePageComps/HomeText";
import Head from "next/head";
import Link from "next/link";

export default function Home({ data, dataSettings }) {
  const menaPageRender =
    data &&
    data.data.map((page, i) => {
      if (page.id == 9) {
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
          </div>
        );
      }
    });
  return (
    <>
      {menaPageRender}

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
        {/* <Divider
          heading="Наші партнери"
          gray={true}
          openable={false}
          single={false}
        />
        <HomPartners /> */}
      </main>
    </>
  );
}
