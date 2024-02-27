import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = (product) => {
  const {
    id,
    images,
    price,
    rating,
    thumbnail,
    category,
    title,
    brand,
    description,
    stock,
    discountPercentage,
  } = product;
  console.log("product", product);
  const originalPrice = Math.floor(price + (price * discountPercentage) / 100);

  return (
    <div className={styles.product_card}>
      <div>
        <img src={thumbnail} alt={title} />
      </div>
      <div>{title}</div>
      <div>
        <div>{price}</div>
        <div>{originalPrice}</div>
      </div>
    </div>
  );
};

export default ProductCard;
