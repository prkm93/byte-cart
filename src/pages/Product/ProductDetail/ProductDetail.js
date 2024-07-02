import React from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

import { useProducts } from "../../../context/ProductContext";
import { useCart } from "../../../context/CartContext";
import { discountedPrice, currencyFormatter } from "../../../utils/utils";
import styles from "./ProductDetail.module.css";

const ProductDetail = () => {
  const {
    productState: { productDetail },
  } = useProducts();
  const {
    cartState: { cartItemList },
    addtoCartHandler,
  } = useCart();
  const navigate = useNavigate();

  const token = JSON.parse(localStorage.getItem("userInfo"))?.encodedToken;

  const {
    _id,
    brand,
    description,
    price,
    rating,
    thumbnail,
    title,
    stock,
    discountPercentage,
  } = productDetail;

  document.title = `${title} | Retail Store`;

  return (
    <div className={styles.product_detail_container} key={_id}>
      <div className={styles.product_detail_card}>
        <div className={styles.product_detail_img_box}>
          <img
            src={thumbnail}
            alt={title}
            className={styles.product_detail_img}
          />
        </div>
        <div className={styles.product_detail_info}>
          <div className={styles.product_detail_title}>{title}</div>
          <div className={styles.product_detail_rating}>
            {rating} <FaStar className={styles.product_rating_icon} />
          </div>
          <div className={styles.product_price_details}>
            <div className={styles.product_price_discounted}>
              {currencyFormatter.format(
                discountedPrice(price, discountPercentage)
              )}
            </div>
            <div className={styles.product_price_original}>
              {currencyFormatter.format(price)}
            </div>
            <div className={styles.product_discount}>
              {Math.floor(discountPercentage)}% OFF
            </div>
          </div>
          <hr className={styles.product_divider} />
          <div className={styles.product_more_detail}>
            <span className={styles.product_detail_label}>Brand:</span> {brand}
          </div>
          <div className={styles.product_more_detail}>
            <span className={styles.product_detail_label}>Description:</span>{" "}
            {description}
          </div>
          <div className={styles.product_more_detail}>
            <span className={styles.product_detail_label}>In Stock:</span>{" "}
            {`${stock > 0 ? "available" : "Out of stock"}`}
          </div>
          {token &&
          cartItemList.length > 0 &&
          Boolean(cartItemList.find((item) => item._id === _id)) ? (
            <button
              className={`${styles.product_add_cart_btn} ${styles.cart_btn_added}`}
              onClick={() => navigate("/cartlist")}>
              Go to cart
            </button>
          ) : (
            <button
              className={styles.product_add_cart_btn}
              onClick={() =>
                token
                  ? addtoCartHandler(productDetail, token)
                  : navigate("/login")
              }>
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
