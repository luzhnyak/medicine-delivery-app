import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { AppDispatch } from "../redux/store";
import { getAllShopsThunk } from "../redux/shops/operations";
import Shops from "../components/Shops";
import ProductsList from "../components/ProductsList";

const ShopsPage: FC = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllShopsThunk());
  }, [dispatch]);

  return (
    <main className="">
      <Row>
        <Col md={3}>
          <Shops />
        </Col>
        <Col>
          <ProductsList />
        </Col>
      </Row>
    </main>
  );
};

export default ShopsPage;
