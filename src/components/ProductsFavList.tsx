import { useSelector } from "react-redux";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ProductCard from "./ProductCard";
import { selectAllFavProducts } from "../redux/local/selectors";

const ProductsFavList = () => {
  const products = useSelector(selectAllFavProducts);

  return (
    <section className="border p-3">
      <h2>Favorites</h2>
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

export default ProductsFavList;
