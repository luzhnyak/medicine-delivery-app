import { RootState } from "../store";

export const selectAllOrders = (state: RootState) => state.orders.items;
