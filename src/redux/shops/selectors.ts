import { RootState } from "../store";

export const selectAllShops = (state: RootState) => state.shops.items;
