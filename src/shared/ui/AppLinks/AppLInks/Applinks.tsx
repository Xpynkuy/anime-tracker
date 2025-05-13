import { FC, memo, ReactNode } from "react";
import { Link } from "react-router-dom";

import styles from "./AppLinks.module.scss";

interface ApplinksProps {
  children: ReactNode;
  to: string;
  noAnimation?: boolean;
}

const Applinks: FC<ApplinksProps> = memo(({ children, to, noAnimation }) => {
  return (
    <Link
      to={to}
      className={`${styles.AppLink} ${noAnimation ? styles.noAnimation : ""}`}
    >
      {children}
    </Link>
  );
});

export default Applinks;
