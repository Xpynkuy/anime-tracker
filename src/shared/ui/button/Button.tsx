import { FC, ReactNode } from "react";

import styles from './Button.module.scss'

interface ButtonProps {
  children?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ children, onClick, disabled }) => {
  return <button className={styles.btn} onClick={onClick} disabled={disabled} >
    {children}
  </button>
};

export default Button;
