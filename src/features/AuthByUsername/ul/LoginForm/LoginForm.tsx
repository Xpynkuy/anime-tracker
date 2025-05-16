import Button, { ButtonVariant } from "@shared/ui/button/Button";
import styles from "./LoginForm.module.scss";
import Input from "@shared/ui/input/Input";
import { useAppDispatch } from "@shared/ui/hooks/redux";
import { memo, useCallback } from "react";
import { InputTheme } from "@shared/ui/input/Input";

import {
  loginActions,
  loginReducer,
} from "../../model/slice/AuthByUsernameSlice";
import { loginByUsername } from "../../model/services/LoginByUsername/LoginByUsername";
import { useSelector } from "react-redux";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@shared/lib/components/DynamicModuleLoader";
import { UnknownAction } from "@reduxjs/toolkit";

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(() => {
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

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
    dispatch(
      loginByUsername({ username, password }) as unknown as UnknownAction
    ); // Заменен AnyAction
  }, [dispatch, username, password]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={true}>
      <div className={styles.LoginModal}>
        <h2>Log In</h2>
        {error && <h4>{error}</h4>}
        <div className={styles.Input}>
          <span>Username</span>
          <Input
            theme={InputTheme.BORDER}
            onChange={onChangeUsername}
            value={username}
            placeholder="Enter your username"
          />
        </div>
        <div className={styles.Input}>
          <span>Password</span>
          <Input
            theme={InputTheme.BORDER}
            onChange={onChangePassword}
            value={password}
            placeholder="Enter your password"
          />
        </div>
        <Button
          variant={ButtonVariant.PRIMARY}
          onClick={onLogin}
          disabled={isLoading}
        >
          Login
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
