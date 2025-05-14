import { FC, memo, ReactNode } from "react";

import styles from './Button.module.scss'

export enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}


interface ButtonProps {
  children?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  variant: ButtonVariant;
}

const Button: FC<ButtonProps> = memo(({ children, onClick, disabled, variant = ButtonVariant.PRIMARY }) => {
  return <button className={`${styles.btn} ${styles[`btn--${variant}`]}`} onClick={onClick} disabled={disabled} >
    {children}
  </button>
});

export default Button;
