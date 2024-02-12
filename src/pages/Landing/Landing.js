import React from "react";
import styles from "./Landing.module.css";
import { categories } from "../../backend/db/categories";
import electronics_img from "../../logos/electronic thumbail.png";

const Landing = () => {
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("/api/products");
  //     console.log("response. data", await response.json());
  //   } catch (err) {
  //     console.error(err.response);
  //   }
  // };

  return (
    <div>
      <div>
        <img
          className={styles.landing_thumbail}
          src={electronics_img}
          alt="electronics thumbail"
        />
      </div>
      <div className={styles.category_label}>
        <h1>Shop by Category</h1>
      </div>
      <div className={styles.category_section}></div>
    </div>
  );
};

export default Landing;
