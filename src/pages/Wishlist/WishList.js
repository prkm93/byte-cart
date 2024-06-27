import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosHeart } from "react-icons/io";
import { FaStar } from "react-icons/fa6";

import { useWishlist } from "../../context/WishlistContext";
import { discountedPrice, currencyFormatter } from "../../utils/utils";
import styles from "./Wishlist.module.css";

const Wishlist = (product) => {
  const navigate = useNavigate();
  const { getProductDetails } = useWishlist();
  const {
    _id,
    price,
    rating,
    thumbnail,
    title,
    discountPercentage,
    availabilityStatus,
  } = product.product;

  document.title = "Wishlist | Retail Store";

  return (
    <div
      className={`${styles.product_card} ${
        availabilityStatus === "Out of Stock" && styles.product_disable
      }`}
      onClick={() => {
        getProductDetails(_id);
        navigate(`/products/${_id}`);
      }}>
      <div
        className={
          availabilityStatus === "Out of Stock" && styles.product_stock
        }>
        {availabilityStatus === "Out of Stock" && availabilityStatus}
      </div>
      <div
        className={
          availabilityStatus === "Out of Stock" && styles.product_disable
        }>
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
              discountedPrice(price, Math.floor(discountPercentage))
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
      <button
        className={`${styles.cart_btn} ${
          availabilityStatus === "Out of Stock" && styles.cart_btn_disabled
        }`}>
        Add to cart
      </button>
    </div>
  );
};

export default Wishlist;
