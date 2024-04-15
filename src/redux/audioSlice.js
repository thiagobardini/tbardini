import { createSlice } from "@reduxjs/toolkit";

export const audioSlice = createSlice({
  name: "audio",
  initialState: {
    isMuted: true,
  },
  reducers: {
    setMuted: (state, action) => {
      state.isMuted = action.payload;
    },
    setPermission: (state, action) => {
      state.permission = action.payload;
    },
  },
});

export const { setMuted } = audioSlice.actions;

export default audioSlice.reducer;
