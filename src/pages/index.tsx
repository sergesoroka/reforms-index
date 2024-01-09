import styles from "@/styles/Home.module.css";
import Divider from "components/Divider/Divider";
import HomeBarChart from "components/HomePageComps/HomeBarChart";
import HomeExperts from "components/HomePageComps/HomeExperts";
import HomePosts from "components/HomePageComps/HomePosts";
import HomeText from "components/HomePageComps/HomeText";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Індекс реформ</title>
        <meta
          name="description"
          content="Індекс реформ — проєкт, що відстежує всі економічні реформи та антиреформи з 2015 року"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainAbout}>
        <Divider heading="Індекс" gray={true} openable={false} single={false} />
        <HomeBarChart />
        <HomeText />
        <div className="my-0 mx-auto pt-4">
          {/* <Link href="/" className="hover:text-red-600 text-[14px]">
            Інтерактивний графік
          </Link> */}
        </div>
        <Divider
          heading="Наші експерти"
          gray={true}
          openable={false}
          single={false}
        />
        <HomeExperts />
        <Divider
          heading="Матеріали Індексу реформ"
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
