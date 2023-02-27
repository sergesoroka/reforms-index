import Divider from "components/Divider/Divider";
import styles from "./Footer.module.css";
import EmailIcon from '../icons/email_icon.svg'
import FbIcon from '../icons/fb_icon.svg'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Divider mode="first" />
      <div className={styles.footerWrap}>
      <div className={styles.infoFooter}>
        <p className={styles.logoFooter}>Iндекс реформ</p>
        <p className={styles.copyright}>Всі права захищені © 2023 VoxUkraine</p>
      </div>
      <div className={styles.social}>
        <EmailIcon />
        <FbIcon />
      </div></div>
    </footer>
  );
};

export default Footer;
