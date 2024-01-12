import styles from "@/styles/Home.module.css";
import Divider from "components/Divider/Divider";
import HomeBarChart from "components/HomePageComps/HomeBarChart";
import HomeExperts from "components/HomePageComps/HomeExperts";
import HomePosts from "components/HomePageComps/HomePosts";
import HomeText from "components/HomePageComps/HomeText";
import Link from "next/link";
import MetaData from "../../components/Header/MetaData";

export default function Home({ data, dataSettings }) {
  const menaPageRender =
    data &&
    data.data.map((page, i) => {
      if (page.id == 9) {
        return (
          <div key={i}>
            <MetaData data={page}/>
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
