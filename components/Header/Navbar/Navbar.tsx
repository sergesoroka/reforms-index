import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";
import { motion } from "framer-motion";

const Navbar = ({ data }) => {
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
            {data && data.data.header_menu[0].name}
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
            {data && data.data.header_menu[1].name}
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
            href="/experts"
            passHref
            className={
              pathname === "/experts" ? styles.navActiveItem : styles.navItem
            }
          >
            {data && data.data.header_menu[2].name}
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
        <li>
          <div className={styles.dropdown}>
            <button className={styles.dropbtn}>
              {data && data.data.header_menu[3].name}
            </button>
            <div className={styles.dropdownContent}>
              <Link
                href={data ? data.data.header_menu[3].children[0].value : ""}
                passHref
                target="_blank"
              >
                {data && data.data.header_menu[3].children[0].name}
              </Link>
              <Link
                href={data ? data.data.header_menu[3].children[1].value : ""}
                passHref
                target="_blank"
              >
                {data && data.data.header_menu[3].children[1].name}
              </Link>
            </div>
          </div>

          {pathname === "/data" && (
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
