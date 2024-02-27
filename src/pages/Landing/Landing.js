import React from "react";
import { useNavigate } from "react-router-dom";

import { useProducts } from "../../context/ProductContext";
import styles from "./Landing.module.css";
import electronics_img from "../../logos/electronic thumbail.png";

const Landing = () => {
  const { productState } = useProducts();
  const navigate = useNavigate();

  const { categoryList } = productState;
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("/api/products");
  //     console.log("response. data", await response.json());
  //   } catch (err) {
  //     console.error(err.response);
  //   }
  // };

  console.log("categoryList", productState);

  return (
    <div className={styles.home_container}>
      <img
        className={styles.landing_thumbail}
        src={electronics_img}
        alt="electronics thumbail"
      />
      <div className={styles.category_label}>
        <h1>What are you shopping for today?</h1>
      </div>
      <div className={styles.category_section}>
        {categoryList &&
          categoryList.map((item) => {
            const { _id, categoryName, thumbnail, description } = item;
            return (
              <div
                className={styles.category_card}
                key={_id}
                onClick={() => navigate("/products")}>
                <img
                  className={styles.card_img}
                  src={thumbnail}
                  alt={categoryName}
                />
                <div className={styles.card_details}>
                  <h3>{categoryName}</h3>
                  <div className={styles.card_description}>{description}</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Landing;
