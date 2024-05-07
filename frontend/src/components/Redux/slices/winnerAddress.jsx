import { createSlice } from "@reduxjs/toolkit";

const winnerAddress = createSlice({
  name: "winnerAddress",
  // initialState: 0,
  initialState: null,
  reducers: {
    // Define a reducer to set the wallet address
    setWinnerAddress: (state, action) => action.payload,
  },
});

export const { setWinnerAddress } = winnerAddress.actions;

export default winnerAddress.reducer;
