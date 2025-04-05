import { User } from "@entities/User/model/types/user"
import { createAsyncThunk } from "@reduxjs/toolkit"
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
            return response.data    

        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue('Wrong username/password')
        }      
    },
  )