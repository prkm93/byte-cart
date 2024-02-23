import React from "react";
import styles from "./ProductFilter.module.css";

const ProductFilter = () => {
  return (
    <div className={styles.filterSection}>
      <div>
        <div>Filters</div>
        <div>Clear</div>
      </div>
    </div>
  );
};

export default ProductFilter;
