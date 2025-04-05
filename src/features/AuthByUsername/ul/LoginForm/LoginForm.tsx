import Button from "@shared/ui/button/Button";
import styles from "./LoginForm.module.scss";
import Input from "@shared/ui/input/Input";
import { useAppDispatch, useAppSelector } from "@shared/ui/hooks/redux";
import { memo, useCallback } from "react";
import { setPassword, setUsername } from "@features/AuthByUsername/model/slice/AuthByUsernameSlice";
import { loginByUsername } from "@features/AuthByUsername/model/services/LoginByUsername/LoginByUsername";

const LoginForm = memo(() => {
  const dispatch = useAppDispatch()
  const {username, password, isLoading, error} = useAppSelector(state => state.login)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(setUsername(value))
  },[dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(setPassword(value))
  },[dispatch])

  const onLogin = useCallback(() => {
    dispatch(loginByUsername({username, password}))
  }, [dispatch, username, password])

  return (
    <div className={styles.LoginModal}>
      <h2>Log In</h2>
      <div className={styles.Input}>
        <span>Username</span>
        <Input onChange={onChangeUsername} value={username}/>
      </div>
      <div className={styles.Input}>
        <span>Password</span>
        <Input onChange={onChangePassword} value={password}/>
      </div>
      <Button onClick={onLogin} disabled={isLoading}>Login</Button>
    </div>
  );
});

export default LoginForm;
