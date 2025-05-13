export interface Profile {
    name: string,
    avatar: string,
}

export interface ProfileSchema {
    data?: Profile,
    readonly: boolean,
    isLoading: boolean,
    error?: string,
}