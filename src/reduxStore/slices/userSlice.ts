import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  username: string;
  id: string;
  profilePicUrl: string;
}

const initialState: UserState = {
  username: "",
  id: "",
  profilePicUrl: "",
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload.username;
      state.id = action.payload._id;
      state.profilePicUrl = action.payload.profilePicUrl;
    },
    resetUser: (state) => {
      state.username = "";
      state.id = "";
      state.profilePicUrl = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
