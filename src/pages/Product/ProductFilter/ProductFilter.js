import React, { useState } from "react";
import styles from "./ProductFilter.module.css";

const ProductFilter = () => {
  const Ratings = [4, 3, 2, 1];
  const [price, setPrice] = useState(100);

  return (
    <div className={styles.filter_section}>
      <div className={styles.filter_header}>
        <div className={styles.filter_label}>Filters</div>
        <div className={styles.clear_text}>Clear</div>
      </div>
      <div className={styles.price_filter}>
        <label htmlFor="price_range" className={styles.price_label}>
          Price
        </label>
        <br />
        <div className={styles.price_values}>
          <label>0</label>
          <label>100</label>
          <label>200</label>
        </div>
        <input
          type="range"
          className={styles.slider}
          id="price_range"
          min="1"
          max="200"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label className={styles.current_price}>{price}</label>
      </div>
      <div className={styles.category_filter}>
        <label htmlFor="categories" className={styles.category_label}>
          Categories
        </label>
        <div className={styles.checkbox}>
          <input type="checkbox" name="smartphone" id="smartphone" />
          <label htmlFor="smartphone">SmartPhone</label>
        </div>
        <div className={styles.checkbox}>
          <input type="checkbox" name="smartphone" id="smartphone" />
          <label htmlFor="smartphone">SmartPhone</label>
        </div>
        <div className={styles.checkbox}>
          <input type="checkbox" name="smartphone" id="smartphone" />
          <label htmlFor="smartphone">SmartPhone</label>
        </div>
        <div className={styles.checkbox}>
          <input type="checkbox" name="smartphone" id="smartphone" />
          <label htmlFor="smartphone">SmartPhone</label>
        </div>
      </div>
      <div className={styles.rating_filter}>
        <label htmlFor="rating" className={styles.rating_label}>
          Rating
        </label>
        <div className={styles.checkbox}>
          <input type="radio" name="smartphone" id="smartphone" />
          <label htmlFor="smartphone">4 star & above</label>
        </div>
        <div className={styles.checkbox}>
          <input type="radio" name="smartphone" id="smartphone" />
          <label htmlFor="smartphone">3 star & above</label>
        </div>
        <div className={styles.checkbox}>
          <input type="radio" name="smartphone" id="smartphone" />
          <label htmlFor="smartphone">2 star & above</label>
        </div>
        <div className={styles.checkbox}>
          <input type="radio" name="smartphone" id="smartphone" />
          <label htmlFor="smartphone">1 star & above</label>
        </div>
      </div>
      <div className={styles.sort_filter}>
        <label htmlFor="sort_price" className={styles.sort_price_label}>
          Sort by Price
        </label>
        <div className={styles.checkbox}>
          <input type="radio" name="smartphone" id="smartphone" />
          <label htmlFor="smartphone">Price - High to low</label>
        </div>
        <div className={styles.checkbox}>
          <input type="radio" name="smartphone" id="smartphone" />
          <label htmlFor="smartphone">Price - Low to high</label>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
