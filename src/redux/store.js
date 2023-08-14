import { configureStore } from "@reduxjs/toolkit";
import authUserSliceReducer from "./authSlices";
import themeSlice from "./themeSlice";
import ticketSliceReducer from "./ticketSlice";
import matchingTicketsReducer from "./matchingTicketsSlice";

export default configureStore({
  reducer: {
    authUser: authUserSliceReducer,
    theme: themeSlice,
    tickets: ticketSliceReducer,
    matchingTickets: matchingTicketsReducer,
  },
});
