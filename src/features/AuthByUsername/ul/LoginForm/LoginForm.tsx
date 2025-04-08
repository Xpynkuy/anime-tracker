import Button from "@shared/ui/button/Button";
import styles from "./LoginForm.module.scss";
import Input from "@shared/ui/input/Input";
import { useAppDispatch, useAppSelector } from "@shared/ui/hooks/redux";
import { memo, useCallback } from "react";

import { loginByUsername } from "@features/AuthByUsername/model/services/LoginByUsername/LoginByUsername";
import { loginActions } from "@features/AuthByUsername/model/slice/AuthByUsernameSlice";

const LoginForm = memo(() => {
  const dispatch = useAppDispatch();
  const { username, password, isLoading, error } = useAppSelector(
    (state) => state.login
  );

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );
  const onLogin = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={styles.LoginModal}>
      <h2>Log In</h2>
      {error && <h4>{error}</h4>}
      <div className={styles.Input}>
        <span>Username</span>
        <Input onChange={onChangeUsername} value={username} />
      </div>
      <div className={styles.Input}>
        <span>Password</span>
        <Input onChange={onChangePassword} value={password} />
      </div>
      <Button onClick={onLogin} disabled={isLoading}>
        Login
      </Button>
    </div>
  );
});

export default LoginForm;
