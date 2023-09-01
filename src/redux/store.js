import { configureStore } from "@reduxjs/toolkit";
import authUserSliceReducer from "./authSlices";
import themeReducer from "./themeSlice";
import ticketSliceReducer from "./ticketSlice";
import matchingTicketsReducer from "./matchingTicketsSlice";
import drawerReducer from "./drawerSlice";

export default configureStore({
  reducer: {
    authUser: authUserSliceReducer,
    theme: themeReducer,
    tickets: ticketSliceReducer,
    matchingTickets: matchingTicketsReducer,
    drawerProject: drawerReducer,
  },
});
