import { createSlice } from "@reduxjs/toolkit";

export const luggageSlice = createSlice({
  name: "luggage",
  initialState: {
    items: [],
    selected: [],
  },
  reducers: {
    addSelected: (state, action) => {
      const movedItem = state.items.find(
        (item) => item.label === action.payload.label
      );
      state.items.splice(state.items.indexOf(movedItem), 1);
      state.selected.push(movedItem);
    },
    removeSelected: (state, action) => {
      const movedItem = state.selected.find(
        (item) => item.label === action.payload.label
      );
      state.items.splice(state.selected.indexOf(movedItem), 1);
      state.items.push(movedItem);
    },
  },
});

export const { addSelected, removeSelected } = luggageSlice.actions;

export default luggageSlice.reducer;
