import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            // action.payload contains the data passed when dispatching the action
            state.user = action.payload
        },
        logout: (state) => {
            state.user = null;
            
        }
    }
})

export const selectUser = state => state.user.user;
export const { login, logout, } = userSlice.actions;
export default userSlice.reducer;
