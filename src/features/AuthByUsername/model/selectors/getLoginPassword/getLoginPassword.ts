import { StateSchema } from "App/providers/StoreProvider/config/StateSchema";


export const getLoginPassword = (state: StateSchema) => state?.loginForm?.password || '';