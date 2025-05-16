import { StateSchema } from "App/providers/StoreProvider/config/StateSchema";

export const getProfileForm = (state: StateSchema) => state?.profile?.form;