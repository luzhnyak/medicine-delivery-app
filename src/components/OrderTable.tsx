import Table from "react-bootstrap/Table";
import { IOrder } from "../types";
import { FC } from "react";

interface IProps {
  order: IOrder;
}

const OrderTable: FC<IProps> = ({ order }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price (UAH)</th>
          <th>Sum (UAH)</th>
        </tr>
      </thead>
      <tbody>
        {order.orderProducts.map((product) => {
          return (
            <tr key={product.id}>
              <td>{product.product_id}</td>
              <td>{product.name}</td>
              <td className="text-end">{product.quantity}</td>
              <td className="text-end">{product.price.toFixed(2)}</td>
              <td className="text-end">
                {(product.price * product.quantity).toFixed(2)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default OrderTable;
