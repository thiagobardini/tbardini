import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db, addDoc, collection } from "../Firebase/firebaseConfig";

// Async thunk for adding a ticket
export const addTicket = createAsyncThunk(
  "tickets/addTicket",
  async (ticket) => {
    const docRef = await addDoc(collection(db, "tickets"), ticket);
    return { ...ticket, id: docRef.id };
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
      .addCase(addTicket.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addTicket.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tickets.push(action.payload);
      })
      .addCase(addTicket.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    // handle other async actions similarly
  },
});

export default ticketSlice.reducer;
