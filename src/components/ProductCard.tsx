import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { IProduct } from "../types";
import { FC } from "react";
import { AppDispatch } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, addItemToFav } from "../redux/local/slice";
import { FaHeart } from "react-icons/fa";
import { selectcurrentShop } from "../redux/shops/selectors";

interface IProps {
  product: IProduct;
}

const ProductCard: FC<IProps> = ({ product }) => {
  const dispatch: AppDispatch = useDispatch();
  const currentShop = useSelector(selectcurrentShop);

  const handleClick = () => {
    if (currentShop) {
      dispatch(addItemToCart({ ...product, shop_id: currentShop.id }));
    }
  };

  const handleFav = () => {
    dispatch(addItemToFav(product));
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
          <FaHeart color="primary" />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
