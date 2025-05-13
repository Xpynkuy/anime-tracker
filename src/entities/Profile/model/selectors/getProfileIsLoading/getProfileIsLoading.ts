import { StateSchema } from "App/providers/StoreProvider/config/StateSchema";

export const getProfileIsLoading = (state: StateSchema) => state?.profile?.isLoading;