import Experts from "components/Experts/Experts";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      {/* <Head>
        <title>Наші експерти | Індекс реформ</title>
        <meta
          name="description"
          content="Індекс реформ — проєкт, що відстежує всі економічні реформи та антиреформи з 2015 року"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <main className={styles.mainAbout}>
        <Experts />
      </main>
    </>
  );
}
