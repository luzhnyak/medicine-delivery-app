import { RootState } from "../store";

export const selectAllFavProducts = (state: RootState) => state.local.favItems;
export const selectAllCartProducts = (state: RootState) =>
  state.local.cartItems;
