import { useRouter } from "next/router";
import styles from "./LangSwitcher.module.css";

const LangSwitcher = () => {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  return (
    <ul className={styles.switcher}>
      <li
        className={
          locale == "ua" ? styles.langMenuActiveItem : styles.langMenuItem
        }
        onClick={() => {
          router.push(
            { pathname, query },
            asPath,
            { locale: "ua" }
            // { shallow: false }
          );
        }}
      >
        ua
      </li>
      <li
        className={
          locale == "en" ? styles.langMenuActiveItem : styles.langMenuItem
        }
        onClick={() => {
          router.push(
            { pathname, query },
            asPath,
            { locale: "en" }
            // { shallow: false }
          );
        }}
      >
        en
      </li>
      <li
        className={
          locale == "ru" ? styles.langMenuActiveItem : styles.langMenuItem
        }
        onClick={() => {
          router.push(
            { pathname, query },
            asPath,
            { locale: "ru" }
            // { shallow: false }
          );
        }}
      >
        ru
      </li>
    </ul>
  );
};

export default LangSwitcher;
