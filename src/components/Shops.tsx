import { useSelector } from "react-redux";
import { selectAllShops } from "../redux/shops/selectors";

import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { getAllShopProductsThunk } from "../redux/products/operations";

const Shops = () => {
  const shops = useSelector(selectAllShops);

  const dispatch: AppDispatch = useDispatch();

  const handleClick = (id: number) => {
    dispatch(getAllShopProductsThunk(id));
  };

  return (
    <aside className="border p-3">
      <h2>Shops</h2>
      <ListGroup>
        {shops.map((shop) => {
          return (
            <ListGroup.Item
              key={shop.id}
              action
              onClick={() => handleClick(shop.id)}
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
