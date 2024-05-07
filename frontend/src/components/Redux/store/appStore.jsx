import { configureStore } from "@reduxjs/toolkit";
import addressReducer from "../slices/addressSlice";
import electionDetailsReducer from "../slices/electionSlice";
import winnerAddress from "../slices/winnerAddress";

const appStore = configureStore({
  reducer: {
    address: addressReducer,
    electionDetail: electionDetailsReducer,
    winner: winnerAddress,
  },
});

export default appStore;
