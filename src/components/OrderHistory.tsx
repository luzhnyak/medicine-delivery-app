import { useState, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Form, Row } from "react-bootstrap";

import { AppDispatch } from "../redux/store";
import {
  selectAllOrders,
  selectOrderIsLoading,
} from "../redux/orders/selectors";
import { getOrdersThunk } from "../redux/orders/operations";
import OrderTable from "./OrderTable";
import { IOrder } from "../types";

const OrderHistory = () => {
  const [email, setEmail] = useState("");
  const isLoading = useSelector(selectOrderIsLoading);
  const orders = useSelector(selectAllOrders);

  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await dispatch(getOrdersThunk(email));
  };

  const totalSum = (order: IOrder) => {
    return order.orderProducts.reduce((prev, product) => {
      return prev + product.quantity * product.price;
    }, 0);
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

      {orders.map((order) => {
        return (
          <>
            <hr />
            <hr />

            <p>
              <b>Order №:</b>
              {order.id}, <b>Customer:</b> {order.name}
            </p>
            <OrderTable order={order} />
            <p>
              <b>Total sum:</b> {totalSum(order).toFixed(2)} UAH
            </p>
          </>
        );
      })}
    </section>
  );
};

export default OrderHistory;
