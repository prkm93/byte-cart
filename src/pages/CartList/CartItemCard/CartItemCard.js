import React from "react";
import { IoIosHeart } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

import { useWishlist } from "../../../context/WishlistContext";
import { useCart } from "../../../context/CartContext";
import { discountedPrice, currencyFormatter } from "../../../utils/utils";
import styles from "./CartItemCard.module.css";

const CartItemCard = ({ cartItem }) => {
  const { removeFromCartHandler, updateCartHandler } = useCart();
  const { addToWishlistHandler, removeFromWishlistHandler, isItemInWishlist } =
    useWishlist();
  const { _id, price, rating, thumbnail, title, discountPercentage, qty } =
    cartItem;

  const token = JSON.parse(localStorage.getItem("userInfo"))?.encodedToken;

  return (
    <div className={styles.item_card}>
      <div className={styles.item_img_wrapper}>
        <img className={styles.item_img} src={thumbnail} alt={title} />
        <IoIosHeart
          className={`${styles.item_wishlist} ${
            isItemInWishlist(_id) && styles.wishlist_icon_wished
          }`}
          onClick={() =>
            isItemInWishlist(_id)
              ? removeFromWishlistHandler(_id, token)
              : addToWishlistHandler(cartItem, token)
          }
        />
        <div>
          <FaStar className={styles.star_icon} />
          <span className={styles.rating}>{rating}</span>
        </div>
      </div>
      <div className={styles.item_details}>
        <div className={styles.item_title}>{title}</div>
        <div className={styles.item_price_details}>
          <div className={styles.item_discounted_price}>
            {currencyFormatter.format(
              discountedPrice(price, Math.floor(discountPercentage))
            )}
          </div>
          <div className={styles.item_price}>
            {currencyFormatter.format(price)}
          </div>
        </div>
        <div className={styles.item_discount}>{discountPercentage}% OFF</div>
        <div className={styles.item_quantity_control}>
          <label htmlFor="quantity">Quantity:</label>
          <FaMinusCircle
            className={styles.decrement_icon}
            onClick={() => updateCartHandler(_id, "decrement", token)}
          />
          <span className={styles.item_qty}>{qty}</span>
          <FaPlusCircle
            className={styles.increment_icon}
            onClick={() => updateCartHandler(_id, "increment", token)}
          />
        </div>
        <button
          className={styles.cart_btn}
          onClick={() => removeFromCartHandler(_id, token)}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default CartItemCard;
