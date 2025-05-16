export enum ValidateProfileError {
  EMPTY_NAME = "Please enter your name",
  SHORT_NAME = "Name must be at least 4 characters long",
  LONG_NAME = "Name must be no more than 15 characters long",

  EMPTY_DESC = "Please enter a description",
  SHORT_DESC = "Description must be at least 4 characters long",
  LONG_DESC = "Description must be no more than 35 characters long",

  SERVER_ERROR = "Something went wrong while saving. Please try again later",
}



export interface Profile {
    name?: string,
    desc?: string,
    avatar?: string,
}

export interface ProfileSchema {
    data?: Profile,
    form?: Profile,
    readonly: boolean,
    isLoading: boolean,
    error?: string,
    validationErrors?: ValidateProfileError[],
}