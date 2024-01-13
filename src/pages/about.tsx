import styles from "@/styles/Home.module.css";
import MetaData from "../../components/Header/MetaData";

export default function About({ data }) {
  const pageRender =
    data &&
    data.data.map((page, i) => {
      if (page.id == 1) {
        return (
          <div key={i}>
            <MetaData data={page} />

            <div className="mb-4">
              <h1 className="mb-8">{page.title}</h1>
              <p dangerouslySetInnerHTML={{ __html: page.content }} />
            </div>
          </div>
        );
      }
    });
  return (
    <>
      <main className={styles.mainAboutPage}>{pageRender}</main>
    </>
  );
}
