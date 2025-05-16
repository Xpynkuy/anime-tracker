import { StateSchema } from "App/providers/StoreProvider/config/StateSchema";

export const getProfileValidateError = (state: StateSchema) => state?.profile?.validationErrors;