import axios from "axios";
import { IOrder } from "../types";

axios.defaults.baseURL = "http://127.0.0.1:5000/api";

export const getAllShops = async () => {
  const { data } = await axios.get(`/shops`);
  return data;
};

export const getAllShopProducts = async (shopId: number) => {
  const { data } = await axios.get(`/products?shop_id=${shopId}`);
  return data;
};

export const addOrder = async (order: IOrder) => {
  const { data } = await axios.post(`/order`, order);
  return data;
};
