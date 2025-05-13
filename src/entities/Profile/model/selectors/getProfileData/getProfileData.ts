import { StateSchema } from "App/providers/StoreProvider/config/StateSchema";

export const getProfileData = (state: StateSchema) => state?.profile?.data;