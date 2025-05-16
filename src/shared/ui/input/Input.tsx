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
  placeholder?: string;
  readonly?: boolean;
  theme?: InputTheme;
  size?: InputTextSize;
  hasError?: boolean;
  describedById?: string;
}

const Input: FC<InputProps> = memo(
  ({
    value,
    placeholder,
    onChange,
    readonly,
    theme = InputTheme.BORDER,
    size = InputTextSize.MEDIUM,
    hasError
  }) => {
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    return (
      <input
        type="text"
        className={
  `${styles.input} ${styles[`input--${theme}`]} ${styles[`input--${size}`]} ${
    hasError ? styles.error : ""
  }`
}
        value={value}
        onChange={onChangeHandler}
        readOnly={readonly}
        placeholder={placeholder}
      />
    );
  }
);

export default Input;
