import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../Authentication";
import { onAuthStateChanged } from "firebase/auth";

const storedAuthData = JSON.parse(localStorage.getItem("authData"));

const initialState = {
  token: storedAuthData?.token || null,
  user: storedAuthData?.user || null,
  isAuthenticated: storedAuthData?.isAuthenticated || false,
  role: storedAuthData?.role || null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuthenticated = action.payload.isAuthenticated;
      state.role = action.payload.role;

      localStorage.setItem("authData", JSON.stringify({
        token: action.payload.token,
        user: action.payload.user,
        isAuthenticated: action.payload.isAuthenticated,
        role: action.payload.role
      }));
    },
    clearAuthState: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      state.role = null;
      localStorage.removeItem("authData");
    }
  }
});

export const initializeAuth = () => {
  return (dispatch) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdToken();
        // Don't forget to get role from Firestore in your actual code
        dispatch(setAuthState({
          token,
          user: {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName
          },
          isAuthenticated: true,
          role: null // fetch actual role from Firestore!
        }));
      } else {
        dispatch(clearAuthState());
      }
    });
  };
};

export const { setAuthState, clearAuthState } = authSlice.actions;
export default authSlice.reducer;
