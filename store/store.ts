import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import luggageReducer from "./luggageSlice";
import airlineReducer from "./airlineSlice";

export function makeStore() {
  return configureStore({
    reducer: { luggage: luggageReducer, airline: airlineReducer },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
