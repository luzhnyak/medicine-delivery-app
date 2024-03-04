import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ListGroup from "react-bootstrap/ListGroup";

import { selectAllShops, selectcurrentShop } from "../redux/shops/selectors";
import { AppDispatch } from "../redux/store";
import { getAllShopProductsThunk } from "../redux/products/operations";
import { IShop } from "../types";
import { setCurrentShop } from "../redux/shops/slice";

const Shops = () => {
  const shops = useSelector(selectAllShops);
  const currentShop = useSelector(selectcurrentShop);

  const dispatch: AppDispatch = useDispatch();

  const handleClick = (shop: IShop) => {
    dispatch(setCurrentShop(shop));
  };

  useEffect(() => {
    if (currentShop) {
      dispatch(getAllShopProductsThunk(currentShop.id));
    }
  }, [currentShop]);

  return (
    <aside className="border p-3">
      <h2>Shops</h2>
      <ListGroup>
        {shops.map((shop) => {
          return (
            <ListGroup.Item
              key={shop.id}
              action
              onClick={() => handleClick(shop)}
            >
              {shop.name}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </aside>
  );
};

export default Shops;
