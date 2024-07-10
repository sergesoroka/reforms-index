import LangSwitcher from "./LangSwitcher/LangSwitcher";
import styles from "./Header.module.css";
import Navbar from "./Navbar/Navbar";
import Link from "next/link";

const Header = ({ data }) => {
  return (
    <header>
      <div className={styles.header}>
        <Link href="/" passHref className="w-[150px] no-underline">
          <h1 className="text-xl font-medium leading-5 mt-2 text-gray-600">
            {data && data.data.logo}
          </h1>
        </Link>
        <LangSwitcher />
      </div>
      <Navbar data={data} />
    </header>
  );
};

export default Header;
