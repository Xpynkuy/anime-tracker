import { FC, ReactNode } from "react"
import { Link } from "react-router-dom"

import styles from './AppLinks.module.scss'

interface ApplinksProps {
    children: ReactNode;
    to: string;
}

const Applinks: FC<ApplinksProps> = ({children, to}) => {


  return (
    <Link to={to} className={styles.AppLink}>
      {children}
    </Link>
  )
}

export default Applinks
