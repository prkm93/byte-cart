import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosHeart } from "react-icons/io";
import { FaStar } from "react-icons/fa6";

import { useProducts } from "../../../context/ProductContext";
import { discountedPrice, currencyFormatter } from "../../../utils/utils";
import styles from "./ProductCard.module.css";

const ProductCard = (product) => {
  const navigate = useNavigate();
  const { getProductDetails } = useProducts();
  const {
    _id,
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
    <div
      className={styles.product_card}
      onClick={() => {
        getProductDetails(_id);
        navigate(`/products/${_id}`);
      }}>
      <div>
        <img className={styles.product_img} src={thumbnail} alt={title} />
      </div>
      <IoIosHeart className={styles.wishlist_icon} />
      <div>
        <FaStar className={styles.star_icon} />
        <span className={styles.rating}>{rating}</span>
      </div>
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
