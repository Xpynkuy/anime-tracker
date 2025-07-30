import Applinks from "@shared/ui/AppLinks/AppLInks/Applinks";
import styles from "./Header.module.scss";
import { AuthButton } from "@features/AuthButton/ui/AuthButton";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Applinks to="/" noAnimation={true}>
          <span className={styles.logo}>Kurosaw</span>
        </Applinks>
        <div className={styles.links}>
          <Applinks to="/">Home</Applinks>
          <Applinks to="/catalog">Catalog</Applinks>
        </div>
        <div className={styles.rightLinks}>
          <AuthButton />
        </div>
      </div>
    </header>
  );
};
