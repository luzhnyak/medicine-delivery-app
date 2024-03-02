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
