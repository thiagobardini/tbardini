import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import {
  db,
  addDoc,
  collection,
  getDocs,
  query,
} from "../Firebase/firebaseConfig";

// Async thunk for adding a ticket
export const addTicket = createAsyncThunk(
  "tickets/addTicket",
  async (ticket) => {
    console.log("Ticket received:", ticket); // Verifique o que está chegando
    const docRef = await addDoc(collection(db, "tickets"), ticket);
    const result = { ...ticket, id: docRef.id };
    console.log("Ticket returned:", result); // Verifique o que está sendo retornado
    return result;
  }
);

export const fetchTickets = createAsyncThunk(
  "tickets/fetchTickets",
  async () => {
    const ticketCollection = collection(db, "tickets");
    const ticketQuery = query(ticketCollection);
    const ticketSnapshot = await getDocs(ticketQuery);
    const tickets = ticketSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return tickets;
  }
);

// ... other async thunks for update, delete, etc.
export const ticketSlice = createSlice({
  name: "tickets",
  initialState: {
    tickets: [],
    status: "idle",
    error: null,
  },
  reducers: {
    // synchronous actions here
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTicket.pending /* ... */)
      .addCase(addTicket.fulfilled, (state, action) => {
        console.log("State before:", current(state)); // Usando current aqui
        state.status = "succeeded";
        state.tickets.push(action.payload);
        console.log("State after:", current(state)); // Usando current aqui também
      })
      .addCase(addTicket.rejected /* ... */)
      .addCase(fetchTickets.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tickets = action.payload;
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default ticketSlice.reducer;
