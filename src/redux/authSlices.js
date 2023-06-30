import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "authUser",
  initialState: {
    email: "",
    password: "",
    isLogged: false,
  },
  reducers: {
    changeUser: (state, { payload }) => {
      return {
        ...state,
        isLogged: true,
        email: payload.email,
        password: payload.password,
      };
    },
    logoutTest(state) {
      return { ...state, isLogged: false, email: "", password: "" };
    },
  },
});

export const { changeUser, logoutTest } = slice.actions;

export const selectAuth = (state) => state.authUser;

export default slice.reducer;
