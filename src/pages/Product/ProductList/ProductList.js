import React from "react";

import { useProducts } from "../../../context/ProductContext";
import ProductCard from "../ProductCard";
import styles from "./ProductList.module.css";

const ProductList = () => {
  const { filterByPrice: filteredProductList } = useProducts();

  return (
    <div className={styles.productList}>
      {filteredProductList?.length > 0 &&
        filteredProductList?.map((product) => {
          return <ProductCard product={product} key={product._id} />;
        })}
    </div>
  );
};

export default ProductList;
