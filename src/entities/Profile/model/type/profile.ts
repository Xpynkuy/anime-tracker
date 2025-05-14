export interface Profile {
    name?: string,
    gender?: string,
    avatar?: string,
}

export interface ProfileSchema {
    data?: Profile,
    readonly: boolean,
    isLoading: boolean,
    error?: string,
}