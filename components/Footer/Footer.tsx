import Divider from "components/Divider/Divider";
import styles from "./Footer.module.css";
import EmailIcon from "../icons/email_icon.svg";
import FbIcon from "../icons/fb_icon.svg";
import Link from "next/link";

const Footer = ({ data }) => {
  return (
    <footer className={styles.footer}>
      <Divider single={true} />
      <div className={styles.footerWrap}>
        <div className={styles.infoFooter}>
          <Link
            href={data ? data.data.social_vox : ""}
            passHref
            target="_blank"
          >
            <p className="text-sm text-red-500">{data && data.data.logo}</p>
          </Link>
          <p className={styles.copyright}>{data && data.data.copyright}</p>
        </div>
        <div className={styles.social}>
          <Link
            href={data ? data.data.social_email : ""}
            passHref
            target="_blank"
          >
            <EmailIcon />
          </Link>
          <Link href={data ? data.data.social_fb : ""} passHref target="_blank">
            <FbIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
