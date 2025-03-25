import { FC, ReactNode } from "react";
import styles from "./Modal.module.scss";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ children, isOpen, onClose }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.overlay}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
