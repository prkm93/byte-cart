import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosHeart } from "react-icons/io";
import { FaStar } from "react-icons/fa6";

import { useWishlist } from "../../../context/WishlistContext";
import { useProducts } from "../../../context/ProductContext";
import { discountedPrice, currencyFormatter } from "../../../utils/utils";
import styles from "./ProductCard.module.css";

const ProductCard = (product) => {
  const navigate = useNavigate();
  const { getProductDetails } = useProducts();
  const { wishlistState, addToWishlistHandler, removeFromWishlistHandler } =
    useWishlist();
  const token = JSON.parse(localStorage.getItem("userInfo"))?.encodedToken;
  const {
    _id,
    price,
    rating,
    thumbnail,
    title,
    discountPercentage,
    availabilityStatus,
    wished,
  } = product.product;

  console.log("wishlistState ===>", wishlistState);

  return (
    <div
      className={`${styles.product_card} ${
        availabilityStatus === "Out of Stock" && styles.product_disable
      }`}>
      <div
        className={
          availabilityStatus === "Out of Stock" && styles.product_stock
        }>
        {availabilityStatus === "Out of Stock" && availabilityStatus}
      </div>
      <div
        className={
          availabilityStatus === "Out of Stock" && styles.product_disable
        }
        onClick={() => {
          getProductDetails(_id);
          navigate(`/products/${_id}`);
        }}>
        <img
          className={`${styles.product_img} ${
            availabilityStatus === "Out of Stock" && styles.product_img_disable
          }`}
          src={thumbnail}
          alt={title}
        />
      </div>
      <IoIosHeart
        className={`${styles.wishlist_icon} ${
          wished && styles.wishlist_icon_wished
        }`}
        onClick={() =>
          wished
            ? removeFromWishlistHandler(_id, token)
            : addToWishlistHandler(product.product, token)
        }
      />
      <div>
        <FaStar className={styles.star_icon} />
        <span className={styles.rating}>{rating}</span>
      </div>
      <div
        className={styles.card_title}
        onClick={() => {
          getProductDetails(_id);
          navigate(`/products/${_id}`);
        }}>
        {title}
      </div>
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
        }`}
        onClick={() => (token ? navigate("/cartlist") : navigate("/login"))}>
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
