import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";
import { frameData, motion } from "framer-motion";

const Navbar = ({ data }) => {
  const router = useRouter();
  const { locale, pathname } = router;

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
        {data &&
          data.data.header_menu.map((item, i) => {
            if (item.children.length == 0) {
              return (
                <li key={item.id}>
                  <Link
                    href={item.value ? item.value : ""}
                    passHref
                    className={
                      pathname === item.value
                        ? styles.navActiveItem
                        : styles.navItem
                    }
                  >
                    {item.name}
                  </Link>
                  {pathname === item.value && (
                    <motion.div
                      variants={variants}
                      initial="hidden"
                      animate="visible"
                      className="h-1 w-full bg-red-600"
                    />
                  )}
                </li>
              );
            }
            // if (item.children.length > 0) {
            //   item.children.map((link) => console.log(link.name));
            // }
          })}

        <li>
          <div className={styles.dropdown}>
            {/* <button className={styles.dropbtn}>
              {data && data.data.header_menu[3].name}
            </button>
            <div className={styles.dropdownContent}>
              {data &&
                data.data.header_menu.map((item) => {
                  if (item.children.length > 0) {
                    item.children.map((link) => console.log(link.name));
                    return (
                      <Link
                        key={item.id}
                        href={
                          data ? data.data.header_menu[3].children[0].value : ""
                        }
                        passHref
                        target="_blank"
                      >
                        {item.children[0].name}
                      </Link>
                    );
                  }
                })}
            </div> */}
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
