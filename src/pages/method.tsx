import Head from "next/head";
import Divider from "components/Divider/Divider";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Methodology</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainAbout}>
        <h2 className="text-xl mb-8">Методологія</h2>

        <Divider heading="Defining reforms" />
        <p>
          For the purposes of this index, a reform (anti-reform) is considered
          to be a normative act which changes the behavior of economic agents
          and results in more (less) efficient use of resources. For example,
          normative changes narrowing the scope for corruption, establishing
          market prices for certain goods, curtailing cross-subsidies, fostering
          competition, etc. are considered to be reforms. On the other hand,
          normative changes creating new opportunities for corruption,
          tightening regulations for certain goods, increasing cross-subsidies,
          harming competition, etc. are considered to be anti-reforms.
        </p>
      </main>
    </>
  );
}
