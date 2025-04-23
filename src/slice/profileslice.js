import { createSlice } from "@reduxjs/toolkit";

// 1. Get user from localStorage on app start
const storedUser = localStorage.getItem("user");
const initialState = {
  user: storedUser ? JSON.parse(storedUser) : null,
};

const profileslice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    adduser: (state, action) => {
      state.user = action.payload;

      // 2. Save user to localStorage when added
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    removeUser: (state) => {
      state.user = null;
      localStorage.removeItem("user"); // 3. Remove user on logout
    },
  },
});

export const { adduser, removeUser } = profileslice.actions;
export default profileslice.reducer;
