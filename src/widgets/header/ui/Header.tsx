import Applinks from "@shared/ui/AppLinks/AppLInks/Applinks";
import styles from "./Header.module.scss";
import SearchInput from "@shared/ui/searchInput/SearchInput";
import { AuthButton } from "@features/AuthButton/ui/AuthButton";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@entities/User";

export const Header = () => {
  const auth = useSelector(getUserAuthData);
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
        <div className={styles.search}>
          <SearchInput />
        </div>
        <div className={styles.rightLinks}>
          {auth && <Applinks to="/profile">Profile</Applinks>}
          <AuthButton />
        </div>
      </div>
    </header>
  );
};
