import {createSlice} from '@reduxjs/toolkit';
import appApi from '../services/appApi';

export const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        addNotifications: (state, {payload}) => {},
        resetNotifications: (state, {payload})=> {},
    },

    extraReducers: (builder)=>{
        builder.addMatcher(appApi.endpoints.signupUser.matchFulfilled, (state, {payload})=>payload);

        builder.addMatcher(appApi.endpoints.loginUser.matchFulfilled, (state, {payload})=>payload);

        builder.addMatcher(appApi.endpoints.logoutUser.matchFulfilled, (state, {payload})=>payload);
    }
})

export const {addNotifications, resetNotifications} = userSlice.actions;
export default userSlice.reducer;