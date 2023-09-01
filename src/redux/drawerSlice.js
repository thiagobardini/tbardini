import { createSlice } from "@reduxjs/toolkit";

export const drawerSlice = createSlice({
  name: "drawerProject",
  initialState: {
    isOpen: false,
    openedCardId: null, // This is the id of the card that was clicked
  },
  reducers: {
    openDrawer: (state, action) => {
      state.isOpen = true;
      state.openedCardId = action.payload;
    },
    closeDrawer: (state) => {
      state.isOpen = false;
      state.openedCardId = null;
    },
    toggleDrawer: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openDrawer, closeDrawer, toggleDrawer } = drawerSlice.actions;

export default drawerSlice.reducer;
