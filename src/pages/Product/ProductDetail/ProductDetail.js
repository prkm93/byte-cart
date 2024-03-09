import React from "react";
import { useParams } from "react-router-dom";

import { useProducts } from "../../../context/ProductContext";
import { discountedPrice, currencyFormatter } from "../../../utils/utils";
import styles from "./ProductDetail.module.css";

const ProductDetail = () => {
  const { productId } = useParams();
  const {
    productState: { productDetail },
  } = useProducts();

  console.log("product", productDetail);
  //   const foundProduct = product.find(({ _id }) => _id === productId);
  //   console.log("foundProduct", foundProduct);
  const { _id, price, rating, thumbnail, title, discountPercentage } =
    productDetail;

  return (
    <div className={styles.product_detail_container}>
      <div className={styles.product_detail_card}>
        <div className={styles.product_detail_img}>
          <img src={thumbnail} alt={title} />
        </div>
        <div className={styles.product_detail_info}>
          <div>{title}</div>
          <div className={styles.product_price_details}>
            <div>
              <div>
                {currencyFormatter.format(
                  discountedPrice(price, discountPercentage)
                )}
              </div>
              <div>{currencyFormatter.format(price)}</div>
            </div>
            <div>{discountPercentage} OFF</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
