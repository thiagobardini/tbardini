import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: !!JSON.parse(localStorage.getItem("darkMode")),
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.darkMode = !state.darkMode;
    },
  },
});

// The function below is called a thunk and allows us to perform async logic.
// It can be dispatched like a regular action: `dispatch(toggleTheme())`.
// This will call the thunk with the `dispatch` function as the first argument.
// Async code can then be executed and other actions can be dispatched
export const asyncToggleTheme = () => (dispatch) => {
  const isDarkMode = !!JSON.parse(localStorage.getItem("darkMode"));
  localStorage.setItem("darkMode", !isDarkMode);
  dispatch(toggleTheme());
};

// Action creators are generated for each case reducer function
export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
