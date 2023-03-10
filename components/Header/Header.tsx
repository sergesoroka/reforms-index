import LangSwitcher from "./LangSwitcher/LangSwitcher";
import styles from "./Header.module.css";
import Navbar from "./Navbar/Navbar";
import Link from "next/link";

const Header = () => {
 
  return (
    <header className={styles.header}>
      <Link href="/" passHref>
        <div className={styles.logo}>
          Iндекс
          <br />
          реформ
        </div>
      </Link>
      <Navbar />
      <LangSwitcher />
    </header>
  );
};

export default Header;
