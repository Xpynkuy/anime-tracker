import { Instagram, Twitter, Youtube } from "lucide-react";
import styles from "./Footer.module.scss";
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <span className={styles.logo}>Kurosaw.com</span>
        <span className={styles.link}>Tearms & Privacy</span>
        <span className={styles.link}>Contacts</span>
      </div>
      <div className={styles.social}>
        <span className={styles.icon}>
          <Instagram />
        </span>
        <span className={styles.icon}>
          <Twitter />
        </span>
        <span className={styles.icon}>
          <Youtube />
        </span>
      </div>
    </footer>
  );
};
