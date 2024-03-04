import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FaTimes } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { ICartProduct } from "../types";
import { AppDispatch } from "../redux/store";
import { deleteItemFromCart, updateItemInCart } from "../redux/local/slice";
import { selectAllShops } from "../redux/shops/selectors";

interface IProps {
  product: ICartProduct;
}

const CartCard: FC<IProps> = ({ product }) => {
  const dispatch: AppDispatch = useDispatch();
  const shops = useSelector(selectAllShops);
  const shop = shops.find((shop) => shop.id === product.shop_id);

  const handleChange = (value: string) => {
    dispatch(updateItemInCart({ ...product, quantity: Number(value) }));
  };

  const handleDelete = () => {
    dispatch(deleteItemFromCart(product.id));
  };

  return (
    <Card>
      <Row>
        <Col xs={4}>
          <Card.Img
            style={{ height: "150px", objectFit: "contain" }}
            src={product.product.image}
          />
        </Col>
        <Col>
          <Card.Body className="ps-0">
            <Card.Title className="me-5">{product.product.name}</Card.Title>
            <div className="d-flex gap-3 align-items-center">
              <span className="flex-grow-1">
                <b>Price: </b> {product.price} UAH
              </span>

              <b>Quantity: </b>
              <Form.Control
                style={{ width: "100px" }}
                type="number"
                min={0}
                value={product.quantity}
                onChange={(e) => handleChange(e.target.value)}
              />
            </div>
            <Card.Text>
              <b>Shop: </b>
              {shop && shop.name}
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
      <Button
        className="position-absolute"
        style={{ top: "0.3rem", right: "0.2rem" }}
        type="button"
        variant="link"
        onClick={handleDelete}
        title="Delete"
      >
        <FaTimes size={24} color="red" />
      </Button>
    </Card>
  );
};

export default CartCard;
