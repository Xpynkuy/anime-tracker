import { Profile, ValidateProfileError } from "../type/profile";


export const ValidateProfile = (profile?: Profile): ValidateProfileError[] => {
    const errors: ValidateProfileError[] = [];

    if (!profile?.name?.trim()) {
        errors.push(ValidateProfileError.EMPTY_NAME);
    } else {
        if (profile.name.length < 4) {
            errors.push(ValidateProfileError.SHORT_NAME);
        }
        if (profile.name.length > 15) {
            errors.push(ValidateProfileError.LONG_NAME);
        }
    }

    if (!profile?.desc?.trim()) { 
        errors.push(ValidateProfileError.EMPTY_DESC);
    } else {
        if (profile.desc.length < 4) {
            errors.push(ValidateProfileError.SHORT_DESC);
        }
        if (profile.desc.length > 35) {
            errors.push(ValidateProfileError.LONG_DESC);
        }
    }

    return errors;
};