import styles from "@/styles/Home.module.css";
import Divider from "components/Divider/Divider";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Page404() {
  const router = useRouter();
  const { locale, pathname } = router;

  return (
    <>
      <Head>
        <title>404 | Not Found</title>
      </Head>
      <div className={styles.mainAboutPage}>
        <Divider
          heading="404 | Сторінку не знайдено"
          gray={true}
          openable={false}
          single={false}
        />
        {/* <h1>404 Сторінку не знайдено</h1> */}
        <p>Ця сторінка, скоріш за все, переїхала.</p>
        <p>
          Ви можете пошукати її вміст <Link href="/">на головній</Link> або
          через меню сайта.
        </p>
      </div>
    </>
  );
}
