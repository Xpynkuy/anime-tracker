import { StateSchema } from "App/providers/StoreProvider/config/StateSchema";


export const getUserAvatar = (state: StateSchema) => state.user.authData?.avatar;