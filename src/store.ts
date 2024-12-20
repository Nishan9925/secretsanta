import { configureStore } from "@reduxjs/toolkit";
import playersReducer from "../src/features/randomSlice";

export const store = configureStore({
  reducer: {
    players: playersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
