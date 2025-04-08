import { User, userActions } from "@entities/User"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { USER_LOCALSTORAGE_KEY } from "@shared/const/localstorage"
import axios from "axios"

interface LoginByUsernameProps {
    username: string,
    password: string,
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, {rejectValue: string}>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {

        try {
            const response = await axios.post<User>('http://localhost:5001/login', authData)
            if (!response.data) {
                throw Error
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            thunkAPI.dispatch(userActions.setAuthData(response.data))
            return response.data    

        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue('Wrong username/password')
        }      
    },
  )