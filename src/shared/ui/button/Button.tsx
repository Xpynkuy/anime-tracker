import { FC, memo, ReactNode } from "react";

import styles from "./Button.module.scss";

export enum ButtonVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  RED = "red",
}

export enum ButtonSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

interface ButtonProps {
  children?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button: FC<ButtonProps> = memo(
  ({
    children,
    onClick,
    disabled,
    variant = ButtonVariant.PRIMARY,
    size = ButtonSize.MEDIUM,
  }) => {
    return (
      <button
        className={`${styles.btn} ${styles[`btn--${variant}`]} ${
          styles[`btn--${size}`]
        }`}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
);

export default Button;
