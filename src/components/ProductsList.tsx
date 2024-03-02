import { useSelector } from "react-redux";
import { selectAllShopProducts } from "../redux/products/selectors";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ProductCard from "./ProductCard";

const ProductsList = () => {
  const products = useSelector(selectAllShopProducts);

  return (
    <section className="border p-3">
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
    </section>
  );
};

export default ProductsList;
