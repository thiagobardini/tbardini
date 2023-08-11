import { configureStore } from "@reduxjs/toolkit";
import authUserSliceReducer from "./authSlices";
import themeSlice from "./themeSlice";
import ticketSliceReducer from "./ticketSlice";

export default configureStore({
  reducer: {
    authUser: authUserSliceReducer,
    theme: themeSlice,
    tickets: ticketSliceReducer,
  },
});
