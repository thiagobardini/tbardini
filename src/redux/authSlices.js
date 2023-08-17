import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "authUser",
  initialState: JSON.parse(localStorage.getItem("auth")) || {
    email: "",
    password: "",
    uid: "",
    isLogged: false,
  },
  reducers: {
    changeUser: (state, { payload }) => {
      if (payload) {
        localStorage.setItem(
          "auth",
          JSON.stringify({
            email: payload.email || "",
            uid: payload.uid || "",
          })
        );
        return {
          ...state,
          isLogged: true,
          email: payload.email,
          uid: payload.uid,
        };
      }
      return state;
    },
    logout(state) {
      localStorage.removeItem("auth");
      return { ...state, isLogged: false, email: "", uid: "" };
    },
  },
});

export const { changeUser, logout } = slice.actions;

export const selectAuth = (state) => state.authUser;

export default slice.reducer;
