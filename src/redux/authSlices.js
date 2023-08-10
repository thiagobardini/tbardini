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
    logout(state) {
      return { ...state, isLogged: false, email: "", password: "" };
    },
  },
});

export const { changeUser, logout } = slice.actions;

export const selectAuth = (state) => state.authUser;

export default slice.reducer;
