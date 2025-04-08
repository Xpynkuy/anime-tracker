// features/AuthButton/ui/AuthButton.tsx
import { userActions } from "@entities/User";
import LoginModal from "@features/AuthByUsername/ul/LoginModal/LoginModal";
import Button from "@shared/ui/button/Button";
import { useAppDispatch, useAppSelector } from "@shared/ui/hooks/redux";
import { useState, useCallback } from "react";

export const AuthButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const authData = useAppSelector((state) => state.user.authData);
  const dispatch = useAppDispatch();

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleLogout = useCallback(() => {
    dispatch(userActions.logout());
    setIsModalOpen(false); 
  }, [dispatch]);

  if (authData) {
    return <Button onClick={handleLogout}>Logout</Button>;
  }

  return (
    <>
      <Button onClick={handleOpenModal}>Log In</Button>
      <LoginModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};
