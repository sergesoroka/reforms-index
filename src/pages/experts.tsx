import Experts from "components/Experts/Experts";
import styles from "@/styles/Home.module.css";
import MetaData from "../../components/Header/MetaData";

export default function Home({ data }) {
  console.log(data);

  const renderMetaData =
    data &&
    data.data.map((item) => {
      if (item.id == 6) {
        return (
          <div key={item.id}>
              <MetaData data={item}/>
          </div>
        );
      }
    });

  return (
    <main className={styles.mainAbout}>
      {renderMetaData}
      <Experts />
    </main>
  );
}
