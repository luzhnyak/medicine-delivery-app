import { FC } from "react";
import { IProduct } from "../types";

import Card from "react-bootstrap/Card";

interface IProps {
  product: IProduct;
}

const CartCard: FC<IProps> = ({ product }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        style={{ aspectRatio: 16 / 9, objectFit: "cover" }}
        variant="left"
        src={product.product.image}
      />
      <Card.Body>
        <Card.Title>{product.product.name}</Card.Title>
        <Card.Text>{product.price}</Card.Text>
        <Card.Text>{product.quantity}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CartCard;
