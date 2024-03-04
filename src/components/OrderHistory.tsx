import { useState, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Form, Row } from "react-bootstrap";

import { AppDispatch } from "../redux/store";
import {
  selectAllOrders,
  selectOrderIsLoading,
} from "../redux/orders/selectors";
import { getOrdersThunk } from "../redux/orders/operations";

const OrderHistory = () => {
  const [email, setEmail] = useState("");
  const isLoading = useSelector(selectOrderIsLoading);
  const orders = useSelector(selectAllOrders);

  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await dispatch(getOrdersThunk(email));
  };

  return (
    <section className="border p-3">
      <h2>History</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email for search orders"
            onChange={(e) => setEmail(e.target.value)}
            required
            value={email}
          />
        </Form.Group>
        <Button
          className="d-block ms-auto"
          variant="primary"
          type="submit"
          disabled={isLoading}
        >
          Submit
        </Button>
      </Form>
      <Row>
        <Col>Name</Col>
        <Col>Email</Col>
        <Col>Phone</Col>
        <Col>Address</Col>
        <Col>Sum (UAH)</Col>
      </Row>
      {orders.map((order) => {
        return (
          <>
            <hr />
            <hr />
            <Row key={order.id}>
              <Col>{order.name}</Col>
              <Col>{order.email}</Col>
              <Col>{order.phone}</Col>
              <Col>{order.address}</Col>
              <Col> {0}</Col>
            </Row>
            <hr />
            {order.orderProducts.map((product) => {
              return (
                <Row>
                  <Col xs={1}>{product.product_id}</Col>
                  <Col>{product.name}</Col>
                  <Col xs={1}>{product.quantity}</Col>
                  <Col xs={1}>{product.price}</Col>
                </Row>
              );
            })}
          </>
        );
      })}
    </section>
  );
};

export default OrderHistory;
