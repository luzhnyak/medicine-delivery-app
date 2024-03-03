import { PayloadAction, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addOrderThunk } from "./operations";
import { IOrder } from "../../types";

export interface IOrdersInitialState {
  items: IOrder[];
  isLoading: boolean;
  error: Error | any;
}

const ordersInitialState: IOrdersInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = (state: IOrdersInitialState): void => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (
  state: IOrdersInitialState,
  action: PayloadAction<any>
): void => {
  state.isLoading = false;
  state.error = action.payload;
};

const ordersSlice = createSlice({
  name: "orders",
  initialState: ordersInitialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(addOrderThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addMatcher(isAnyOf(addOrderThunk.pending), handlePending)
      .addMatcher(isAnyOf(addOrderThunk.rejected), handleRejected)
      .addMatcher(isAnyOf(addOrderThunk.fulfilled), (state) => {
        state.isLoading = false;
        state.error = null;
      }),
});

export const ordersReducer = ordersSlice.reducer;
