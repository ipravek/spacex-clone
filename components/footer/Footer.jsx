import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.footer}>
          <div className={styles.footerLinks}>
            <span style={{ color: "#818181" }}>SpaceX © 2022</span>
          </div>
          <div className={styles.footerLinks}>
            <a href="">TWITTER</a>
          </div>
          <div className={styles.footerLinks}>
            <a href="">YOUTUBE</a>
          </div>
          <div className={styles.footerLinks}>
            <a href="">INSTAGRAM</a>
          </div>
          <div className={styles.footerLinks}>
            <a href="">LINKEDIN</a>
          </div>
          <div className={styles.footerLinks}>
            <a href="">PRIVACY POLICY</a>
          </div>
          <div className={styles.footerLinks}>
            <a href="">SUPPLIERS</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
