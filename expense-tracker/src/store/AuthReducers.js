import { createSlice } from "@reduxjs/toolkit";

const email = localStorage.getItem("email");
const token = localStorage.getItem("idToken");

const initialAuthState = {
  idToken: token,
  email: email,
  loginStatus: !!token,
  emailVerified: !!email,
};

const Authentication = createSlice({
  name: "Authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.idToken = action.payload;
      localStorage.setItem("idToken", action.payload);
    },
    logout(state) {
      state.idToken = null;
      state.email = null;
      localStorage.clear("idToken");
    },
    verifyEmail(state, action) {
      state.email = action.payload;
      localStorage.setItem("email", action.payload);
    },
  },
});

export const authActions = Authentication.actions;

export default Authentication.reducer;
