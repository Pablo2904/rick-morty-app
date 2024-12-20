import { configureStore } from "@reduxjs/toolkit";

import exampleReducer from "state/exampleSlice/exampleSlice";

const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
});

// Typy dla TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
