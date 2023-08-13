import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import {
  db,
  addDoc,
  collection,
  setDoc,
  doc,
  runTransaction,
  query,
  getDocs,
} from "../Firebase/firebaseConfig";

// Async thunk for adding a ticket
export const addTicket = createAsyncThunk(
  "tickets/addTicket",
  async (ticket) => {
    const sequentialNumber = await runTransaction(db, async (transaction) => {
      const seqNumberDocRef = doc(db, "tickets", "sequentialNumber");
      const seqNumberDoc = await transaction.get(seqNumberDocRef);

      // Se o documento não existir, criá-lo com o próximo valor 1
      if (!seqNumberDoc.exists()) {
        await setDoc(seqNumberDocRef, { next: 1 });
        return 1;
      }

      const nextSequentialNumber = seqNumberDoc.data().next || 1;
      transaction.update(seqNumberDocRef, { next: nextSequentialNumber + 1 });
      return nextSequentialNumber;
    });

    console.log("Ticket received:", ticket); // Verifique o que está chegando
    const ticketWithSequentialId = { ...ticket, id: sequentialNumber };
    await addDoc(collection(db, "tickets"), ticketWithSequentialId);
    console.log("Ticket returned:", ticketWithSequentialId); // Verifique o que está sendo retornado
    return ticketWithSequentialId;
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
      id: doc.data().id,
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
