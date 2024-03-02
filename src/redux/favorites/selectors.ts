import { RootState } from "../store";

export const selectAllShops = (state: RootState) => state.favorites.items;
