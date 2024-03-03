import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";

import { IProduct } from "../types";
import { AppDispatch } from "../redux/store";
import {
  addItemToCart,
  addItemToFav,
  deleteItemFromFav,
} from "../redux/local/slice";
import { selectcurrentShop } from "../redux/shops/selectors";
import { selectAllFavProducts } from "../redux/local/selectors";

interface IProps {
  product: IProduct;
}

const ProductCard: FC<IProps> = ({ product }) => {
  const [isFav, setIsFav] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const currentShop = useSelector(selectcurrentShop);
  const favProducts = useSelector(selectAllFavProducts);

  useEffect(() => {
    if (favProducts.find((item) => item.id === product.id)) {
      setIsFav(true);
    } else {
      setIsFav(false);
    }
  }, [favProducts]);

  const handleClick = () => {
    if (currentShop) {
      dispatch(addItemToCart({ ...product, shop_id: currentShop.id }));
      toast.success("Medicines will be added to the cart!");
    }
  };

  const handleFav = () => {
    if (isFav) {
      dispatch(deleteItemFromFav(product.id));
    } else {
      dispatch(addItemToFav(product));
    }
  };

  return (
    <Card style={{ width: "18rem" }} className="mb-3">
      <Card.Img
        style={{ aspectRatio: 16 / 9, objectFit: "cover" }}
        variant="top"
        src={product.product.image}
      />
      <Card.Body>
        <Card.Title>{product.product.name}</Card.Title>
        <Card.Text>{product.product.description.slice(0, 80)}</Card.Text>
        <Button variant="primary" onClick={handleClick}>
          add to Cart
        </Button>
        <Button
          className="position-absolute"
          style={{ top: "0.1rem", right: "0.1rem" }}
          variant="link"
          onClick={handleFav}
          title="add to Favorites"
        >
          <FaHeart className={isFav ? "text-danger" : "text-primary"} />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
