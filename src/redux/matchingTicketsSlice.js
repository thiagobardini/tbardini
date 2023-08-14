import { createSlice, createAction } from "@reduxjs/toolkit";

export const updateMatchingTickets = createAction(
  "matchingTickets/updateMatchingTickets"
);

export const matchingTicketsSlice = createSlice({
  name: "matchingTickets",
  initialState: {
    results: [],
    megaBall: null,
  },
  reducers: {
    setResults: (state, action) => {
      state.results = action.payload;
    },
    setMegaBall: (state, action) => {
      state.megaBall = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateMatchingTickets, (state, action) => {
      state.results = action.payload;
    });
  },
});

export const { setResults, setMegaBall } = matchingTicketsSlice.actions;
export const selectResults = (state) => state.matchingTickets.results;
export const selectMegaBall = (state) => state.matchingTickets.megaBall;

export default matchingTicketsSlice.reducer;
