import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getCharacters } from "api/characterApi";
import { Character } from "types/Character";

interface CharactersState {
  characters: Character[];
  loading: boolean;
  error: string | null;
}

const initialState: CharactersState = {
  characters: [],
  loading: false,
  error: null,
};

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async (__dirname, thunkAPI) => {
    try {
      const data = await getCharacters();
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCharacters.fulfilled,
        (state, action: PayloadAction<Character[]>) => {
          state.loading = false;
          state.characters = action.payload;
        }
      )
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default charactersSlice.reducer;
