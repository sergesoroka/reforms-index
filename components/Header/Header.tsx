import LangSwitcher from "./LangSwitcher/LangSwitcher";
import styles from "./Header.module.css";
import Navbar from "./Navbar/Navbar";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const { locale } = router;
  return (
    <header className={styles.header}>
      <Link href="/" passHref>
        {locale == "ua" && (
          <div className="text-xl font-medium leading-5 text-gray-600">
            Iндекс
            <br />
            реформ
          </div>
        )}

        {locale == "ru" && (
          <div className="text-xl font-medium leading-5 text-gray-600">
            Индекс
            <br />
            реформ
          </div>
        )}
        {locale == "en" && (
          <div className="text-xl font-medium leading-5 text-gray-600">
            Reforms
            <br />
            index
          </div>
        )}
      </Link>
      <Navbar />
      <LangSwitcher />
    </header>
  );
};

export default Header;
