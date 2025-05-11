import Modal from "@shared/ui/modal/Modal"
import { FC, Suspense } from "react";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";
import Loader from "@shared/ui/loader/Loader";

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal: FC<LoginModalProps> = ({isOpen, onClose}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Suspense fallback={<Loader/>}>
        <LoginFormAsync/>
      </Suspense>
    </Modal>
  )
}

export default LoginModal
