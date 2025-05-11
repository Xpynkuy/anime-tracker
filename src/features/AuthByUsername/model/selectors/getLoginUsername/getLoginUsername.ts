import { StateSchema } from "App/providers/StoreProvider/config/StateSchema";


export const getLoginUsername = (state: StateSchema) => state?.loginForm?.username || '';