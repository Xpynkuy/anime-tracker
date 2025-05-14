import React, { FC, memo } from "react";
import styles from "./Input.module.scss";

export enum InputTheme {
  BORDER = "border",
  TRANSPARENT = "transparent",
}

export enum InputTextSize {
  SMALL = "sm",
  MEDIUM = "m",
  LARGE = "l",
  XL = "xl",
}

interface InputProps {
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
  theme?: InputTheme;
  size?: InputTextSize;
}

const Input: FC<InputProps> = memo(
  ({
    value,
    onChange,
    readonly,
    theme = InputTheme.BORDER,
    size = InputTextSize.XL,
  }) => {
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    return (
      <input
        type="text"
        className={`${styles.input}  ${styles[`input--${theme}`]} 
                  ${styles[`input--${size}`]}`}
        value={value}
        onChange={onChangeHandler}
        readOnly={readonly}
      />
    );
  }
);

export default Input;
