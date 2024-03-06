import React from "react";
import { IoIosHeart } from "react-icons/io";
import { discountedPrice, currencyFormatter } from "../../../utils/utils";
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

  return (
    <div className={styles.product_card}>
      <div>
        <img className={styles.product_img} src={thumbnail} alt={title} />
      </div>
      <IoIosHeart className={styles.wishlist_icon} />
      <div className={styles.card_title}>{title}</div>
      <div className={styles.card_price_details}>
        <div className={styles.card_prices}>
          <div>
            {currencyFormatter.format(
              discountedPrice(price, discountPercentage)
            )}
          </div>
          <div className={styles.card_original_price}>
            {currencyFormatter.format(price)}
          </div>
        </div>
        <div className={styles.card_discount}>
          {Math.floor(discountPercentage)}% OFF
        </div>
      </div>
      <button className={styles.cart_btn}>Add to cart</button>
    </div>
  );
};

export default ProductCard;
