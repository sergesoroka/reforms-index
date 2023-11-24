import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";
import { motion } from "framer-motion";

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

  const lawsLabel =
    locale == "en"
      ? "The War Laws"
      : locale == "ru"
      ? "Военные законы"
      : "Военні закони";

  const variants = {
    visible: { opacity: 1, scaleX: 1 },
    hidden: {
      opacity: 0,
      scaleX: 0.2,
      transition: { ease: "easeOut", duration: 0.2 },
    },
  };

  return (
    <>
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
          {pathname === "/about" && (
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              className="h-1 w-full bg-red-600"
            />
          )}
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
          {pathname === "/method" && (
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              className="h-1 w-full bg-red-600"
            />
          )}
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
          {pathname === "/data" && (
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              className="h-1 w-full bg-red-600"
            />
          )}
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
          {pathname === "/experts" && (
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              className="h-1 w-full bg-red-600"
            />
          )}
        </li>
        {/* <li>
          <Link
            href="/laws"
            passHref
            className={
              pathname === "/laws" ? styles.navActiveItem : styles.navItem
            }
          >
            {lawsLabel}
          </Link>
          {pathname === "/laws" && (
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              className="h-1 w-full bg-red-600"
            />
          )}
        </li> */}
      </ul>
    </>
  );
};

export default Navbar;
