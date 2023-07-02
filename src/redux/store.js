import { configureStore } from "@reduxjs/toolkit";
import authUserSliceReducer from "./authSlices";
import userReducer from "./userSlice";
import themeSlice from "./themeSlice";

export default configureStore({
  reducer: {
    authUser: authUserSliceReducer,
    user: userReducer,
    theme: themeSlice,
  },
});
