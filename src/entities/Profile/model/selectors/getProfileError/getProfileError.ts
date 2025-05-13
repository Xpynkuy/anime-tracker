import { StateSchema } from "App/providers/StoreProvider/config/StateSchema";

export const getProfileError = (state: StateSchema) => state?.profile?.error;