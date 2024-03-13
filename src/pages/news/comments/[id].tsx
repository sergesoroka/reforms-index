import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import NewsComment from "components/News/NewsComments";
import styles from "@/styles/Home.module.css";

import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "lib/fetcher";
import Divider from "components/Divider/Divider";

export default function Comments({ setting, baseURL }) {
  const router = useRouter();
  const { locale, asPath } = router;

  const { data, isLoading, isValidating } = useSWR(
    `${baseURL}/api${asPath}?lang=${locale}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const formattedDate = (date) => {
    let day = date && date.substring(8, 10);
    let month = date && date.substring(5, 7);
    let year = date && date.substring(0, 4);
    return (
      <span>
        {day}.{month}.{year}
      </span>
    );
  };

  const commentsRender =
    data &&
    data.data.comments.map((item) => {
      return <NewsComment key={item.id} item={item} />;
    });

  return (
    <>
      <Header data={setting} />
      <main className={styles.mainAboutPage}>
        <div className="flex items-center justify-between">
          <h1 className="px-2">{data && data.data.title}</h1>
          <p className="w-[400px] text-right text-red-600 text-sm whitespace-nowrap">
            Раунд #{data && data.data.round}
          </p>
        </div>
        <Divider single={true} />
        <div className="flex justify-between items-center text-xs px-2">
          <p className="font-semibold text-xs">
            {formattedDate(data && data.data.date)}
          </p>
          <div className="flex items-center gap-2 text-red-700 uppercase font-bold">
            <span className="text-red-700">{data && data.data.source}</span>
          </div>
        </div>
        <h2 className="text-center text-sm mb-6">Коментарі експертів</h2>
        <div>{commentsRender}</div>
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
