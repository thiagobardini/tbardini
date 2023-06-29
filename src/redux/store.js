import { configureStore } from "@reduxjs/toolkit";
import authUserSliceReducer from "./authSlices";

export default configureStore({
  reducer: {
    authUser: authUserSliceReducer,
  },
});
