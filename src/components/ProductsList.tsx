import { useSelector } from "react-redux";
import { selectAllShopProducts } from "../redux/products/selectors";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ProductCard from "./ProductCard";

const ProductsList = () => {
  const products = useSelector(selectAllShopProducts);

  return (
    <>
      <h2>Shops</h2>
      <Row>
        {products.map((product) => {
          return (
            <Col>
              <ProductCard product={product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default ProductsList;
