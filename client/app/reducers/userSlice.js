import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            const { fullName, firstName, lastName, email, accessToken, isAdmin, isLoggedIn} = action.payload
            state.fullName = fullName;
            state.firstName = firstName;
            state.lastName = lastName;
            state.email = email;
            state.accessToken = accessToken;
            state.isAdmin = isAdmin;
            state.isLoggedIn = isLoggedIn;
        },
        logout: (state, action) => {
            state.fullName = ''
            state.firstName = ''
            state.lastName = ''
            state.email = ''
            state.accessToken = ''
            state.isAdmin = false
            state.isLoggedIn = false
        }
    }
});

// export const selectUserRole = state => state.user.role;
export const selectUser = state => state.user;
export const { setCurrentUser, logout } = userSlice.actions;
export default userSlice.reducer;