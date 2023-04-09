import styles from "./Footer.module.css";
import Link from "next/link"

const Footer = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.footer}>
          <div className={styles.footerLinks}>
            <span style={{ color: "#818181" }}>SpaceX © 2022</span>
          </div>
          <div className={styles.footerLinks}>
            <Link href="">TWITTER</Link>
          </div>
          <div className={styles.footerLinks}>
            <Link href="">YOUTUBE</Link>
          </div>
          <div className={styles.footerLinks}>
            <Link href="">INSTAGRAM</Link>
          </div>
          <div className={styles.footerLinks}>
            <Link href="">LINKEDIN</Link>
          </div>
          <div className={styles.footerLinks}>
            <Link href="">PRIVACY POLICY</Link>
          </div>
          <div className={styles.footerLinks}>
            <Link href="">SUPPLIERS</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
