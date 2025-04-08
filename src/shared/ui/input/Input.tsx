import React, { FC, memo } from "react";
import styles from "./Input.module.scss";

interface InputProps {
  value?: string;
  onChange?: (value: string) => void;
}

const Input: FC<InputProps> = memo(({ value, onChange }) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <input
      type="text"
      className={styles.input}
      value={value}
      onChange={onChangeHandler}
    />
  );
});

export default Input;
