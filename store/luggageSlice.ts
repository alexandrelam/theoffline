import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "./store";
import Item from "../types/Item";

export type LuggageState = {
  items: Array<Item>;
  selected: Array<Item>;
};

const initialState: LuggageState = {
  items: [],
  selected: [],
};

export const luggageSlice = createSlice({
  name: "luggage",
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<Array<Item>>) => {
      state.items = action.payload;
    },
    addSelected: (state, action: PayloadAction<string>) => {
      const movedItem = state.items.find(
        (item) => item.label === action.payload
      );
      state.items.splice(state.items.indexOf(movedItem), 1);
      state.selected.push(movedItem);
    },
    removeSelected: (state, action: PayloadAction<string>) => {
      const movedItem = state.selected.find(
        (item) => item.label === action.payload
      );
      state.selected.splice(state.selected.indexOf(movedItem), 1);
      state.items.push(movedItem);
    },
  },
});

export const { addSelected, removeSelected, setItems } = luggageSlice.actions;

export const selectItems = (state: AppState) => state.luggage.items;
export const selectSelected = (state: AppState) => state.luggage.selected;
export const getTotalWeight = (state: AppState) => {
  return state.luggage.selected.reduce(
    (sum: number, item: Item) => (sum += item.weight),
    0
  );
};

export default luggageSlice.reducer;
