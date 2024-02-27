import React from "react";

import { useProducts } from "../../../context/ProductContext";
import ProductCard from "../ProductCard";
import styles from "./ProductList.module.css";

const ProductList = () => {
  const {
    productState: { productList },
  } = useProducts();

  console.log("productList", productList);
  return (
    <div className={styles.productList}>
      {productList &&
        productList.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
    </div>
  );
};

export default ProductList;
