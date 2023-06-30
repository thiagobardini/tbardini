import { configureStore } from "@reduxjs/toolkit";
import authUserSliceReducer from "./authSlices";
import userReducer from "./userSlice";

export default configureStore({
  reducer: {
    authUser: authUserSliceReducer,
    user: userReducer,
  },
});
