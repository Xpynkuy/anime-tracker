import { Instagram, Twitter, Youtube } from "lucide-react";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <span className={styles.logo}>Kurosaw.com</span>
        <span className={styles.link}>Terms & Privacy</span>
        <span className={styles.link}>Contacts</span>
      </div>
      <div className={styles.social}>
        <span className={`${styles.icon} ${styles.iconInstagram}`}>
          <Instagram />
          <span className={styles.tooltip}>Instagram</span>
        </span>
        <span className={`${styles.icon} ${styles.iconTwitter}`}>
          <Twitter />
          <span className={styles.tooltip}>Twitter / X</span>
        </span>
        <span className={`${styles.icon} ${styles.iconYoutube}`}>
          <Youtube />
          <span className={styles.tooltip}>YouTube</span>
        </span>
      </div>
    </footer>
  );
};