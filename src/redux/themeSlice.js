// Theme slice
import { createSlice } from "@reduxjs/toolkit";

const savedTheme = localStorage.getItem("darkMode");
const initialState = {
  darkMode: savedTheme !== null ? !!JSON.parse(savedTheme) : true,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const asyncToggleTheme = () => (dispatch) => {
  const isDarkMode = !!JSON.parse(localStorage.getItem("darkMode"));
  localStorage.setItem("darkMode", !isDarkMode);
  dispatch(toggleTheme());
};

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
