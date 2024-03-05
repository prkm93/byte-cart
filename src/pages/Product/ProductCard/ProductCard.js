import React from "react";
import { IoIosHeartEmpty } from "react-icons/io";
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
  } = product.product;
  console.log("product", product.product);
  const originalPrice = Math.floor(price + (price * discountPercentage) / 100);

  return (
    <div className={styles.product_card}>
      <div>
        <img className={styles.product_img} src={thumbnail} alt={title} />
      </div>
      <IoIosHeartEmpty className={styles.wishlist_icon} />
      <div className={styles.card_title}>{title}</div>
      <div className={styles.card_price_details}>
        <div>₹ {price}</div>
        <div>₹ {originalPrice}</div>
      </div>
      <button className={styles.cart_btn}>Add to cart</button>
    </div>
  );
};

export default ProductCard;
