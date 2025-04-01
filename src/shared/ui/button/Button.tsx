import { FC, ReactNode } from "react";

import styles from './Button.module.scss'

interface ButtonProps {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return <button className={styles.btn} onClick={onClick}>
    {children}
  </button>
};

export default Button;
