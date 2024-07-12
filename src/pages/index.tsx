// @ts-nocheck
import styles from "@/styles/Home.module.css";
import Divider from "components/Divider/Divider";
import HomeBarChart from "components/HomePageComps/HomeBarChart";
import HomeExperts from "components/HomePageComps/HomeExperts";
import HomePosts from "components/HomePageComps/HomePosts";
import HomeText from "components/HomePageComps/HomeText";
import HomeDescription from "components/HomePageComps/HomeDescription";
import HomeCurrentIndex from "components/HomePageComps/HomeCurrentIndex";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

function Home({ setting, metadata, baseURL }) {
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
        <meta
          name="google-site-verification"
          content="KA29mhKSjDzdFgXZnQ8nsxqDdH_8zLzAKPvyBZqJr50"
        />
      </Head>
      <Header data={setting} />
      <main className={styles.mainAbout}>
        <HomeDescription />
        <Divider
          heading="Поточний Індекс"
          gray={true}
          openable={false}
          single={false}
        />
        <HomeCurrentIndex baseURL={baseURL} />
        <Divider
          heading={setting && setting.data.hp_block_1_title}
          gray={true}
          openable={false}
          single={false}
        />
        <HomeBarChart baseURL={baseURL} />
        <HomeText baseURL={baseURL} />
        <div className="my-0 mx-auto pt-4">
          {/* <Link href="/" className="hover:text-red-600 text-[14px]">
            Інтерактивний графік
          </Link> */}
        </div>
        {/* <Divider
          heading={setting && setting.data.hp_block_2_title}
          gray={true}
          openable={false}
          single={false}
        /> */}
        {/* <HomeExperts baseURL={baseURL} /> */}
        <Divider
          heading={setting && setting.data.hp_block_3_title}
          gray={true}
          openable={false}
          single={false}
        />
        <HomePosts baseURL={baseURL} />
        {/* <Link
          href="https://voxukraine.org/category/reformi/imore"
          passHref
          target="_blank"
          className="w-full"
        >
          <p className="mt-8 text-gray-500 hover:text-[#e64e27ed] decoration-[#e64e27ed] underline underline-offset-[6px] text-center">
            Всі матеріали на сайті &laquo;Вокс Україна&raquo;
          </p>
        </Link> */}
      </main>
      <Footer data={setting} />
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `${process.env.baseURL}/api/pages?lang=${context.locale}`
  );
  const resSetting = await fetch(
    `${process.env.baseURL}/api/settings?lang=${context.locale}`
  );
  const metadata = await res.json();
  const setting = await resSetting.json();

  return {
    props: {
      metadata,
      baseURL: process.env.baseURL,
      setting,
    },
  };
}
export default Home;
