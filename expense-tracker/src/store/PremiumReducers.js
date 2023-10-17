import { createSlice } from "@reduxjs/toolkit";

const subscribtion = localStorage.getItem("premium");

const initialPremiumState = {
  isSubscribed: subscribtion ? subscribtion : false,
  darkMode: false,
};

const PremiumSlice = createSlice({
  name: "Premium",
  initialState: initialPremiumState,
  reducers: {
    activatePremium(state) {
      state.isSubscribed = true;
      localStorage.setItem("premium", true);
    },
    darkMode(state) {
      state.darkMode = !state.darkMode;
    },
    logoutPremium(state) {
      state.isSubscribed = false;
    },
  },
});

export const premiumActions = PremiumSlice.actions;

export default PremiumSlice.reducer;
