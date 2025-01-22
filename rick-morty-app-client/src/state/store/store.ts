import { configureStore } from "@reduxjs/toolkit";
import exampleReducer from "state/exampleSlice/exampleSlice";
import charactersReducer from "state/charactersSlice/charactersSlice";

const store = configureStore({
  reducer: {
    example: exampleReducer,
    characters: charactersReducer,
  },
});

// Typy dla TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
