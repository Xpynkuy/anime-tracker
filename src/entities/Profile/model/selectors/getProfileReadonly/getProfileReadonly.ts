import { StateSchema } from "App/providers/StoreProvider/config/StateSchema";

export const getProfileReadonly = (state: StateSchema) => state?.profile?.readonly;