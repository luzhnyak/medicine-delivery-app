import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";

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
import { FormEvent, useEffect, useState } from "react";
import { AppDispatch } from "../redux/store";
import { useDispatch } from "react-redux";
import {
  clearCart,
  setAddress,
  setEmail,
  setName,
  setPhone,
} from "../redux/local/slice";
import { addOrderThunk } from "../redux/orders/operations";
import {
  selectOrderError,
  selectOrderIsLoading,
} from "../redux/orders/selectors";

const CartForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector(selectAllCartProducts);
  const isLoading = useSelector(selectOrderIsLoading);
  const error = useSelector(selectOrderError);
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

  useEffect(() => {
    if (error) {
      toast.error("Something happened, please reload the page!");
    }
  }, [error]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const order = {
      name,
      email,
      phone,
      address,
      orderProducts: products.map((product) => {
        return {
          shop_id: product.shop_id,
          product_id: product.product_id,
          quantity: product.quantity,
          price: product.price,
        };
      }),
    };
    await dispatch(addOrderThunk(order)).unwrap();

    dispatch(clearCart());
    toast.success("Your order has been shipped!");
  };

  return (
    <section className="border p-3">
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={4}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                onChange={(e) => dispatch(setName(e.target.value))}
                value={name}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => dispatch(setEmail(e.target.value))}
                value={email}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone"
                onChange={(e) => dispatch(setPhone(e.target.value))}
                value={phone}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                onChange={(e) => dispatch(setAddress(e.target.value))}
                value={address}
                required
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
              type="submit"
              disabled={isLoading || products.length === 0}
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
