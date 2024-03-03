export interface IShop {
  id: number;
  name: string;
  address: string;
}

export interface IProduct {
  id: number;
  price: number;
  quantity: number;
  product: {
    name: string;
    description: string;
    image: string;
  };
}

export interface ICartProduct extends IProduct {
  shop_id: number;
}

export interface IOrder {
  id?: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  orderProducts: {
    shop_id: number;
    product_id: number;
    quantity: number;
    price: number;
  }[];
}
