import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  username: string;
  id: string;
  profilePicUrl: string;
  friends: string[];
  friendRequests: string[];
}

const initialState: UserState = {
  username: "",
  id: "",
  profilePicUrl: "",
  friends: [],
  friendRequests: [],
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    /* setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setProfilePicUrl: (state, action: PayloadAction<string>) => {
      state.profilePicUrl = action.payload;
    },
    setFriends: (state, action) => {
      state.friends.push(action.payload);
    },
    setFriendRequests: (state, action) => {
      state.friendRequests.push(action.payload);
    }, */
    setUser: (state, action) => {
      state.username = action.payload.username;
      state.id = action.payload._id;
      state.profilePicUrl = action.payload.profilePicUrl;
      state.friends.push(action.payload.friends);
      state.friendRequests.push(action.payload.friendRequests);
    },
    resetUser: (state) => {
      state.username = "";
      state.id = "";
      state.profilePicUrl = "";
      state.friends = [];
      state.friendRequests = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
