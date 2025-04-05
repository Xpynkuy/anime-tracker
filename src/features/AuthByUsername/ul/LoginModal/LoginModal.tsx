import Modal from "@shared/ui/modal/Modal"
import LoginForm from "../LoginForm/LoginForm"
import { FC } from "react";

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal: FC<LoginModalProps> = ({isOpen, onClose}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <LoginForm/>
    </Modal>
  )
}

export default LoginModal
