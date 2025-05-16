export { profileActions, profileReducer } from './model/slice/profileSlice'; 
export type { ProfileSchema, Profile } from './model/type/profile';


export {getProfileData} from '../Profile/model/selectors/getProfileData/getProfileData'
export {getProfileError} from '../Profile/model/selectors/getProfileError/getProfileError'
export {getProfileIsLoading} from '../Profile/model/selectors/getProfileIsLoading/getProfileIsLoading'
export {getProfileReadonly} from '../Profile/model/selectors/getProfileReadonly/getProfileReadonly'
export {getProfileForm} from '../Profile/model/selectors/getProfileForm/getProfileForm'
export {getProfileValidateError} from '../Profile/model/selectors/gerProfileValidateError/getProfileValidateError'
