import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const router = useRouter();
  const { locale, pathname } = router;


  const aboutLabel =
    locale == "en"
      ? "About Index"
      : locale == "ru"
      ? "О индексе"
      : "Про індекс";
  const methodLabel =
    locale == "en"
      ? "Metodology"
      : locale == "ru"
      ? "Методология"
      : "Методологія";

  const dataLabel =
    locale == "en" ? "Data" : locale == "ru" ? "Данные" : "Дані";

  const expertsLabel =
    locale == "en"
      ? "Our Experts"
      : locale == "ru"
      ? "Наши эксперты"
      : "Наші експерти";

  return (
    <ul className={styles.navbar}>
      <li>
        <Link
          href="/about"
          passHref
          className={
            pathname === "/about" ? styles.navActiveItem : styles.navItem
          }
        >
          {aboutLabel}
        </Link>
      </li>
      <li>
        <Link
          href="/method"
          passHref
          className={
            pathname === "/method" ? styles.navActiveItem : styles.navItem
          }
        >
          {methodLabel}
        </Link>
      </li>
      <li>
        <Link
          href="/data"
          passHref
          className={
            pathname === "/data" ? styles.navActiveItem : styles.navItem
          }
        >
          {dataLabel}
        </Link>
      </li>
      <li>
        <Link
          href="/experts"
          passHref
          className={
            pathname === "/experts" ? styles.navActiveItem : styles.navItem
          }
        >
          {expertsLabel}
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
