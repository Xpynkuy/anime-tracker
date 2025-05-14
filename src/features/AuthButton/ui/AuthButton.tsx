// features/AuthButton/ui/AuthButton.tsx
import { userActions } from "@entities/User";
import LoginModal from "../../AuthByUsername/ul/LoginModal/LoginModal";
import Button, { ButtonVariant } from "@shared/ui/button/Button";
import { useAppDispatch, useAppSelector } from "@shared/ui/hooks/redux";
import { useState, useCallback, memo } from "react";

export const AuthButton = memo(() => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const authData = useAppSelector(state => state.user?.authData);
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
    return <Button onClick={handleLogout} variant={ButtonVariant.PRIMARY}>Logout</Button>;
  }

  return (
    <>
      <Button onClick={handleOpenModal} variant={ButtonVariant.PRIMARY}>Log In</Button>
      <LoginModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
});
