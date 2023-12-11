import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function ExpertPage() {
  return (
    <>
      <Head>
        <title>Expert</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainAboutPage}>Expert Page</main>
    </>
  );
}
