import { createSlice } from "@reduxjs/toolkit";

const electionSlice = createSlice({
  name: "electionDetails",
  // initialState: 0,
  initialState: {
    type: null,
    organiser: null,
    start_date: null,
    end_date: null,
  },
  reducers: {
    // Define a reducer to set the wallet address
    setElectionDetails: (state, action) => {
      state.type = action.payload.type;
      state.organiser = action.payload.organiser;
      state.start_date = action.payload.start_date;
      state.end_date = action.payload.end_date;
    },
  },
});

export const { setElectionDetails } = electionSlice.actions;

export default electionSlice.reducer;
