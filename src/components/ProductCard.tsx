import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { IProduct } from "../types";
import { FC } from "react";

interface IProps {
  product: IProduct;
}

const ProductCard: FC<IProps> = ({ product }) => {
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
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
