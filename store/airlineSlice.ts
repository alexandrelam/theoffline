import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { airlines } from "../utils/airlines";
import { AppState } from "./store";

export type AirlineState = {
  name: string;
};

const initialState: AirlineState = {
  name: airlines[0].label,
};

export const AirlineSlice = createSlice({
  name: "airline",
  initialState,
  reducers: {
    setAirline: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { setAirline } = AirlineSlice.actions;

export const selectAirline = (state: AppState) => state.airline.name;

export default AirlineSlice.reducer;
