import { StateSchema } from "App/providers/StoreProvider/config/StateSchema";


export const getLoginError = (state: StateSchema) => state?.loginForm?.error;