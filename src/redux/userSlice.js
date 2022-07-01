import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import UserAPI from 'api/user.api';
import AuthAPI from '../api/auth.api';

const StorageKeys = {
    UDA_USER: 'UDA_user',
    UDA_TOKEN: 'UDA_access_token'
};
export const login = createAsyncThunk(
    'auth/login',
    async (payload, { rejectWithValue }) => {
        try {
            const { data } = await AuthAPI.login(payload);
            // console.log(data);

            localStorage.setItem(StorageKeys.UDA_TOKEN, JSON.stringify(data?.tokens));
            localStorage.setItem(StorageKeys.UDA_USER, JSON.stringify(data?.user));

            return data;
        } catch (error) {
            // console.log(error);
            throw rejectWithValue(error);
        }
    }
);

export const logup = createAsyncThunk(
    'auth/logup',
    async (payload, { rejectWithValue }) => {
        try {
            const { data } = await AuthAPI.logup(payload);

            // localStorage.setItem(StorageKeys.UDA_TOKEN, JSON.stringify(data?.tokens));
            // localStorage.setItem(StorageKeys.UDA_USER, JSON.stringify(data?.user));

            return data;
        } catch (error) {
            throw rejectWithValue(error);
        }
    }
);

export const updateUser = createAsyncThunk(
    'user/update-user-info',
    async (payload, { rejectWithValue }) => {
        try {
            // call API
            const id = payload.id;
            delete payload.id;
            const { data } = await UserAPI.updateUser(id, payload);
            // console.log('data =', data);

            // save data to lacal storage
            localStorage.setItem(StorageKeys.UDA_USER, JSON.stringify(data.user));
            return data.user;
        } catch (error) {
            throw rejectWithValue(error);
        }
    }
);

export const updateUserPassword = createAsyncThunk(
    'user/update-password',
    async (payload, { rejectWithValue }) => {
        try {
            // call API
            const id = payload.id;
            delete payload.id;
            const { data } = await UserAPI.updateUserPassword(id, payload);
            // console.log(data);

            // save data to lacal storage
            localStorage.setItem(StorageKeys.UDA_USER, JSON.stringify(data.user));
            return data.user;
        } catch (error) {
            // console.log(error);
            throw rejectWithValue(error);
        }
    }
);

// export const updateAvatar = createAsyncThunk(
//     'user/update-avatar',
//     async (payload) => {
//         // call API
//         const { data } = await AuthAPI.updateAvatar(payload);
//         console.log('UPDATE avatar!', data);

//         // save data to lacal storage
//         localStorage.setItem(StorageKeys.UDA_USER, JSON.stringify(data?.data));

//         return data.data;
//     }
// );

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: JSON.parse(localStorage.getItem(StorageKeys.UDA_USER)) || {},
        tokens: JSON.parse(localStorage.getItem(StorageKeys.UDA_TOKEN)) || {}
    },
    reducers: {
        logout(state) {
            localStorage.removeItem(StorageKeys.UDA_TOKEN);
            localStorage.removeItem(StorageKeys.UDA_USER);
            state.current = {};
        }
    },
    extraReducers:{
        [login.fulfilled]: (state, action) => {
            state.current = action.payload;
        },
        [logup.fulfilled]: (state, action) => {
            state.current = action.payload;
        },
        [updateUser.fulfilled]: (state, action) => {
            state.current.user = action.payload;
        },
        [updateUserPassword.fulfilled]: (state, action) => {
            state.current.user = action.payload;
        }
        // [updateUser.fulfilled]: (state, action) => {
        //     state.current = action.payload;
        // },
        // [updateAvatar.fulfilled]: (state, action) => {
        //     state.current = action.payload;
        // }
    }
});
const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;