import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    id: string | null;
    username: string | null;
    email: string | null;
    isAuthenticated: boolean;
    token: string | null;
}

const userInitialState: UserState = {
    id: null,
    username: null,
    email: null,
    isAuthenticated: false,
    token: null,
}

const userSlice = createSlice({
    name: "user",
    initialState: userInitialState,
    reducers: {
        setUser: (state, action: PayloadAction<Omit<UserState, 'isAuthenticated'>>) => {
            state.id = action.payload.id;
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },
        clearUser: (state) => {
            state.id = null;
            state.username = null;
            state.email = null;
            state.token = null;
            state.isAuthenticated = false;
        }
    }
})

export const { setUser, clearUser } = userSlice.actions;
export const userReducer = userSlice.reducer;