import { configureStore } from "@reduxjs/toolkit";
import authUserSliceReducer from "./authSlices";
import themeSlice from "./themeSlice";

export default configureStore({
  reducer: {
    authUser: authUserSliceReducer,
    theme: themeSlice,
  },
});
