import { useSelector } from "react-redux";
import { selectAllShopProducts } from "../redux/products/selectors";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ProductCard from "./ProductCard";
import { selectcurrentShop } from "../redux/shops/selectors";
import SelectSort from "./SelectSort";
import { selectAllFavProducts, selectSort } from "../redux/local/selectors";
import { useEffect, useState } from "react";
import { IProduct } from "../types";

const ProductsList = () => {
  const products = useSelector(selectAllShopProducts);
  const favProducts = useSelector(selectAllFavProducts);
  const currentShop = useSelector(selectcurrentShop);
  const sort = useSelector(selectSort);

  const [sortProducts, setSortProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    let newProducts = products.map((product) => {
      if (favProducts.find((item) => item.id === product.id)) {
        return { ...product, fav: 1 };
      } else {
        return { ...product, fav: 0 };
      }
    });

    if (sort === "by_price") {
      newProducts = [...newProducts].sort((a, b) => a.price - b.price);
    }
    if (sort === "by_date") {
      newProducts = [...newProducts].sort((a, b) =>
        a.createdAt.localeCompare(b.createdAt)
      );
    }

    setSortProducts([...newProducts].sort((a, b) => b.fav - a.fav));
  }, [sort, currentShop, products]);

  return (
    <section className="border p-3">
      <h2>{currentShop && currentShop.name}</h2>
      <SelectSort />
      <Row>
        {sortProducts.map((product) => {
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
