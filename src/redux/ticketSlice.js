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
  where,
  deleteDoc,
  writeBatch,
} from "../Firebase/firebaseConfig";

export const addTicket = createAsyncThunk(
  "tickets/addTicket",
  async (ticket) => {
    const uid = ticket.userId;

    const sequentialNumber = await runTransaction(db, async (transaction) => {
      const seqNumberDocRef = doc(
        db,
        "tickets",
        `ticketSequentialNumber-${uid}`
      );
      const seqNumberDoc = await transaction.get(seqNumberDocRef);

      if (!seqNumberDoc.exists()) {
        await setDoc(seqNumberDocRef, { next: 1, uid: uid });
        return 1;
      }

      const nextSequentialNumber = seqNumberDoc.data().next || 1;
      transaction.update(seqNumberDocRef, { next: nextSequentialNumber + 1 });
      return nextSequentialNumber;
    });

    console.log("Ticket received:", ticket);
    const ticketWithSequentialId = {
      ...ticket,
      ticketId: sequentialNumber,
    };
    console.log("Ticket returned:", ticketWithSequentialId);
    await addDoc(collection(db, "tickets"), ticketWithSequentialId);
    return ticketWithSequentialId;
  }
);

export const fetchTickets = createAsyncThunk(
  "tickets/fetchTickets",
  async (uid) => {
    const ticketCollection = collection(db, "tickets");
    const ticketQuery = query(ticketCollection, where("userId", "==", uid));
    const ticketSnapshot = await getDocs(ticketQuery);
    const tickets = ticketSnapshot.docs.map((doc) => ({
      ...doc.data(),
      ticketId: doc.data().ticketId,
    }));
    return tickets.sort((a, b) => a.ticketId - b.ticketId);
  }
);

export const deleteAllTickets = createAsyncThunk(
  "tickets/deleteAllTickets",
  async (uid) => {
    try {
      // Define the collection and query to fetch only the tickets for the given userId
      const ticketCollection = collection(db, "tickets");
      const ticketQuery = query(ticketCollection, where("userId", "==", uid));

      // Retrieve the snapshot of the documents matching the query
      const ticketSnapshot = await getDocs(ticketQuery);

      // Start a transaction to delete all the fetched documents
      await runTransaction(db, async (transaction) => {
        ticketSnapshot.docs.forEach((doc) => {
          transaction.delete(doc.ref);
        });

        // Reset the sequential number for the UID
        const seqNumberDocRef = doc(
          db,
          "tickets",
          `ticketSequentialNumber-${uid}`
        );
        transaction.set(seqNumberDocRef, { next: 1, uid: uid });
      });

      console.log("All tickets for user deleted and sequential number reset"); // Added for debugging

      return [];
    } catch (error) {
      console.error("Error deleting all tickets for user:", error);
      throw error; // This will allow you to handle the error in the part of your application that called this action
    }
  }
);

export const deleteTicketById = createAsyncThunk(
  "tickets/deleteTicketById",
  async (ticketId, thunkAPI) => {
    try {
      const uid = thunkAPI.getState().authUser.uid;
      const ticketCollection = collection(db, "tickets");
      const ticketQuery = query(
        ticketCollection,
        where("ticketId", "==", ticketId),
        where("userId", "==", uid)
      );
      const ticketSnapshot = await getDocs(ticketQuery);

      if (ticketSnapshot.empty) {
        throw new Error("No matching ticket found");
      }

      const ticketRef = ticketSnapshot.docs[0].ref;
      await deleteDoc(ticketRef);

      // Update the ticketIds of the subsequent tickets
      const subsequentTicketQuery = query(
        ticketCollection,
        where("ticketId", ">", ticketId),
        where("userId", "==", uid)
      );
      const subsequentTicketSnapshot = await getDocs(subsequentTicketQuery);

      const batch = writeBatch(db);
      subsequentTicketSnapshot.docs.forEach((doc) => {
        const updatedTicketId = doc.data().ticketId - 1;
        batch.update(doc.ref, { ticketId: updatedTicketId });
      });

      await batch.commit();

      return ticketId;
    } catch (error) {
      console.error("Error deleting ticket:", error);
      throw error;
    }
  }
);

export const ticketSlice = createSlice({
  name: "tickets",
  initialState: {
    tickets: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addTicket.pending)
      .addCase(addTicket.fulfilled, (state, action) => {
        console.log("State before:", current(state));
        state.status = "succeeded";
        state.tickets.push(action.payload);
        console.log("State after:", current(state));
      })
      .addCase(addTicket.rejected)
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
      })
      .addCase(deleteAllTickets.pending, (state) => {
        state.status = "loading";
      });
    builder.addCase(deleteAllTickets.fulfilled, (state) => {
      console.log("deleteAllTickets fulfilled");
      state.status = "succeeded";
      state.tickets = [];
    });
    builder.addCase(deleteAllTickets.rejected, (state, action) => {
      console.log(
        "deleteAllTickets rejected with error:",
        action.error.message
      );
      state.status = "failed";
      state.error = action.error.message;
    });
    builder.addCase(deleteTicketById.fulfilled, (state, action) => {
      state.tickets = state.tickets.filter(
        (ticket) => ticket.ticketId !== action.payload
      );
    });
  },
});

export const isTickets = (state) => state.tickets.tickets;

export default ticketSlice.reducer;
