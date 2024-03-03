import { FC } from "react";
import { IProduct } from "../types";

import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { updateItemInCart } from "../redux/local/slice";

interface IProps {
  product: IProduct;
}

const CartCard: FC<IProps> = ({ product }) => {
  const dispatch: AppDispatch = useDispatch();

  const handleChange = (value: string) => {
    dispatch(updateItemInCart({ ...product, quantity: Number(value) }));
  };

  return (
    <Card>
      <Row>
        <Col xs={4}>
          <Card.Img
            style={{ height: "200px", objectFit: "contain" }}
            src={product.product.image}
          />
        </Col>
        <Col>
          <Card.Body className="ps-0">
            <Card.Title>{product.product.name}</Card.Title>
            <Row>
              <Col xs={3}>
                <Card.Text>
                  <b>Price: </b>
                  <p className="h5"> {product.price} UAH</p>
                </Card.Text>
              </Col>
              <Col>
                <Form.Group className="" controlId="formBasicQuantity">
                  <Form.Label>
                    <b>Quantity: </b>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    min={0}
                    value={product.quantity}
                    onChange={(e) => handleChange(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default CartCard;
