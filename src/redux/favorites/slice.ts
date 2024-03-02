import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../types";

interface IFavoritesInitialState {
  items: IProduct[];
}

const favoritesInitialState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: favoritesInitialState,
  reducers: {
    addMedicine(state: IFavoritesInitialState, action) {
      state.items.push(action.payload);
    },
    deleteMedicine(state: IFavoritesInitialState, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addMedicine, deleteMedicine } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
