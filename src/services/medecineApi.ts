import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:5000/api";

//========================== Shops

export const getAllShops = async () => {
  const { data } = await axios.get(`/shops`);
  return data;
};

export const getAllShopProducts = async (shopId: number) => {
  const { data } = await axios.get(`/products?shop_id=${shopId}`);
  return data;
};
