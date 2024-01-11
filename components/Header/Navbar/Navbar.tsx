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
            if (item.children.length == 0 && item.type != "text") {
              console.log(pathname);
              return (
                <li key={item.id}>
                  <Link
                    href={item.value ? item.value : ""}
                    passHref
                    className={
                      item.value.includes(pathname) && pathname !== "/"
                        ? styles.navActiveItem
                        : styles.navItem
                    }
                    target={item.target}
                  >
                    {item.name}
                  </Link>
                  {item.value.includes(pathname) && pathname !== "/" && (
                    <motion.div
                      variants={variants}
                      initial="hidden"
                      animate="visible"
                      className="h-1 w-full bg-red-600"
                    />
                  )}
                </li>
              );
            } else if (item.children.length > 0) {
              return (
                <li key={item.id}>
                  <div className={styles.dropdown}>
                    <button className={styles.dropbtn}>{item.name}</button>
                    <div className={styles.dropdownContent}>
                      {item.children.map((sub_item, i) => {
                        return (
                          <Link
                            key={sub_item.id}
                            href={sub_item.value}
                            passHref
                            target={sub_item.target}
                            className={styles.sub_menu}
                          >
                            {sub_item.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </li>
              );
            }
          })}
      </ul>
    </>
  );
};

export default Navbar;
