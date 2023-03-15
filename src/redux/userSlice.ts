import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AppUser } from "../types/AppUser";





interface UserState {
	user: AppUser | null;
}

// Define the initial state using that type
const initialState: UserState = {
    user: null,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
        setUser: (state, action: PayloadAction<AppUser>) => {
            state.user = action.payload;
        },
        clearUser: (state) => {
            state.user = null;
        },
	},
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
