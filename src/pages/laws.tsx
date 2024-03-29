import Head from "next/head";
import { useState } from "react";

import BarChart from "../../components/BarChart/BarChart";
import styles from "@/styles/Home.module.css";
import Initiators from "components/Initiators/Initiators";
import NormativeActs from "components/NormativeActs/NormativeActs";
import Divider from "components/Divider/Divider";
import { AnimatePresence, motion } from "framer-motion";

export default function Laws() {
  const [initiatorName, setInitiatorName] = useState("all");

  const [openChart, setOpenChart] = useState(true);
  const [openInitiators, setOpenInitiators] = useState(false);
  const [openActs, setOpenActs] = useState(false);

  return (
    <>
      <Head>
        <title>The War Laws</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className="text-xl">Военні закони</h2>
        <Divider
          heading="Дата ухвалення та категорії"
          single={false}
          openable={true}
          open={openChart}
          // @ts-ignore
          setOpen={setOpenChart}
        />
        {
          <AnimatePresence>
            {openChart && (
              <motion.div
                layout
                initial={{ y: -30, opacity: 0, height: 0 }}
                animate={{ y: 0, opacity: 1, height: "auto" }}
                exit={{ y: -30, opacity: 0, height: 0 }}
              >
                <BarChart />
              </motion.div>
            )}
          </AnimatePresence>
        }
        <Divider
          heading="Ініціатори"
          single={false}
          openable={true}
          open={openInitiators}
          // @ts-ignore
          setOpen={setOpenInitiators}
        />
        <AnimatePresence>
          {openInitiators && (
            <motion.div
              layout
              initial={{ y: -30, opacity: 0, height: 0 }}
              animate={{ y: 0, opacity: 1, height: "auto" }}
              exit={{ y: -30, opacity: 0, height: 0 }}
            >
              <Initiators setInitiatorName={setInitiatorName} />
            </motion.div>
          )}
        </AnimatePresence>
        {/* {openInitiators && <Initiators setInitiatorName={setInitiatorName} />} */}
        <Divider
          heading="Нормативні акти"
          single={false}
          openable={true}
          open={openActs}
          // @ts-ignore
          setOpen={setOpenActs}
        />
        <AnimatePresence>
          {openActs && (
            <motion.div
              layout
              initial={{ y: -30, opacity: 0, height: 0 }}
              animate={{ y: 0, opacity: 1, height: "auto" }}
              exit={{ y: -30, opacity: 0, height: 0 }}
            >
              <NormativeActs />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}
