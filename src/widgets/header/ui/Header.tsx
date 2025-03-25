import Applinks from "@shared/ui/AppLinks/AppLInks/Applinks";
import styles from "./Header.module.scss";
import SearchInput from "@shared/ui/searchInput/SearchInput";
import Button from "@shared/ui/button/Button";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Applinks to="/">
        <span className={styles.logo}>Kurosaw</span>
      </Applinks>
      <div className={styles.links}>
        <Applinks to="/">Home</Applinks>
        <Applinks to="/catalog">Catalog</Applinks>
        <Applinks to="/news">News</Applinks>
        <Applinks to="/collections">Collections</Applinks>
      </div>
      <SearchInput />
      <div className={styles.header__btn}>
        <Button>Log In</Button>
        <Button>Get started</Button>
      </div>
    </header>
  );
};
