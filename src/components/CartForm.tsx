import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";
import {
  selectAddress,
  selectAllCartProducts,
  selectEmail,
  selectName,
  selectPhone,
} from "../redux/local/selectors";
import CartCard from "./CartCard";
import { useEffect, useState } from "react";
import { AppDispatch } from "../redux/store";
import { useDispatch } from "react-redux";
import { setAddress, setEmail, setName, setPhone } from "../redux/local/slice";
import { addOrderThunk } from "../redux/orders/operations";

const CartForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector(selectAllCartProducts);
  const name = useSelector(selectName);
  const email = useSelector(selectEmail);
  const phone = useSelector(selectPhone);
  const address = useSelector(selectAddress);
  const [sum, setSum] = useState(0);

  const refreshSum = () => {
    return products.reduce((prev, product) => {
      return prev + product.quantity * product.price;
    }, 0);
  };

  useEffect(() => {
    setSum(refreshSum());
  }, [products]);

  const handleSubmit = () => {
    const order = {
      name,
      email,
      phone,
      address,
      orderProducts: products.map((product) => {
        return {
          shop_id: product.id,
          product_id: product.id,
          quantity: product.quantity,
          price: product.price,
        };
      }),
    };
    dispatch(addOrderThunk(order));
  };

  return (
    <section className="border p-3">
      <Form>
        <Row>
          <Col md={4}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                onBlur={(e) => dispatch(setName(e.target.value))}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onBlur={(e) => dispatch(setEmail(e.target.value))}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Phone"
                onBlur={(e) => dispatch(setPhone(e.target.value))}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Address"
                onBlur={(e) => dispatch(setAddress(e.target.value))}
              />
            </Form.Group>
          </Col>
          <Col className="mb-3">
            <Row className="g-3">
              {products.map((product) => {
                return (
                  <Col key={product.id} xs={12}>
                    <CartCard product={product} />
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <b>Sum:</b> {sum} UAH
          </Col>
          <Col>
            <Button
              className="d-block ms-auto"
              variant="primary"
              type="button"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </section>
  );
};

export default CartForm;
