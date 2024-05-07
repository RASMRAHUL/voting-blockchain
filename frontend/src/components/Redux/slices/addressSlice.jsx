import { createSlice } from "@reduxjs/toolkit";

const addressSlice = createSlice({
  name: "address",
  // initialState: 0,
  initialState: null,
  reducers: {
    // Define a reducer to set the wallet address
    setWalletAddress: (state, action) => action.payload,
  },
});

export const { setWalletAddress } = addressSlice.actions;

export default addressSlice.reducer;
