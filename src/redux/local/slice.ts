import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../types";

interface ILocalInitialState {
  favItems: IProduct[];
  cartItems: IProduct[];
}

const localInitialState: ILocalInitialState = {
  favItems: [],
  cartItems: [],
};

const localSlice = createSlice({
  name: "local",
  initialState: localInitialState,
  reducers: {
    addItemToCart(state: ILocalInitialState, action) {
      const idx = state.cartItems.findIndex(
        (product) => product.id === action.payload.id
      );

      if (idx < 0) {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      } else {
        state.cartItems[idx].quantity = state.cartItems[idx].quantity + 1;
      }
    },
    updateItemInCart(state: ILocalInitialState, action) {
      const idx = state.cartItems.findIndex(
        (product) => product.id === action.payload.id
      );

      state.cartItems[idx] = action.payload;
    },
    deleteItemFromCart(state: ILocalInitialState, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    addItemToFav(state: ILocalInitialState, action) {
      state.favItems.push(action.payload);
    },
    deleteItemFromFav(state: ILocalInitialState, action) {
      state.favItems = state.favItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  addItemToFav,
  deleteItemFromFav,
  updateItemInCart,
  addItemToCart,
  deleteItemFromCart,
} = localSlice.actions;
export const localReducer = localSlice.reducer;
