import { StateSchema } from "App/providers/StoreProvider/config/StateSchema";


export const getLoginIsLoading = (state: StateSchema) => state?.loginForm?.isLoading || false;