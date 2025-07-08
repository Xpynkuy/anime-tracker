import { useEffect, useRef, useState } from "react";
import styles from "./Select.module.scss";
import Arrow from '@shared/assets/icon/arrow.svg?react'

interface selectOption {
  value?: string;
  label?: string;
}

interface SelectProps {
  placeholder?: string;
  value?: string;
  onChangeValue?: (value: string) => void;
  options: selectOption[];
}
const Select = ({
  value,
  placeholder,
  onChangeValue,
  options,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((option) => option.value === value);
  const displayValue = selectedOption ? selectedOption.label : placeholder;

  const handleSelct = (val: string) => {
    onChangeValue?.(val);
    setIsOpen(false);
  };

  return (
    <div className={styles.wrapper} ref={ref}>
      <div className={`${styles.selected} ${isOpen ? styles.open : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <span>{displayValue}</span>
        <Arrow className={`${styles.icon} ${isOpen ? styles.rotated : ''}`} />
      </div>
      {isOpen && (
        <div className={styles.dropDown}>
          {options.map(opt => (
            <div key={opt.value} className={styles.options} onClick={() => handleSelct(opt.value || '')}>
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
