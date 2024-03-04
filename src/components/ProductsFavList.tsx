import { useSelector } from "react-redux";

import ProductCard from "./ProductCard";
import { selectAllFavProducts } from "../redux/local/selectors";

const ProductsFavList = () => {
  const products = useSelector(selectAllFavProducts);

  return (
    <section className="border p-3">
      <h2>Favorites</h2>
      <div className="d-flex flex-wrap gap-4">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </section>
  );
};

export default ProductsFavList;
