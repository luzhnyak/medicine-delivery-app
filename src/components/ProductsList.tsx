import { useSelector } from "react-redux";
import { selectAllShopProducts } from "../redux/products/selectors";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ProductCard from "./ProductCard";
import { selectcurrentShop } from "../redux/shops/selectors";

const ProductsList = () => {
  const products = useSelector(selectAllShopProducts);
  const currentShop = useSelector(selectcurrentShop);

  return (
    <section className="border p-3">
      <h2>{currentShop && currentShop.name}</h2>
      <Row>
        {products.map((product) => {
          return (
            <Col key={product.id}>
              <ProductCard product={product} />
            </Col>
          );
        })}
      </Row>
    </section>
  );
};

export default ProductsList;
