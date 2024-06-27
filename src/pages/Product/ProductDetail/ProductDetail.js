import React from "react";
// import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

import { useProducts } from "../../../context/ProductContext";
import { discountedPrice, currencyFormatter } from "../../../utils/utils";
import styles from "./ProductDetail.module.css";

const ProductDetail = () => {
  const {
    productState: { productDetail },
  } = useProducts();

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
          <button className={styles.product_add_cart_btn}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
