import React, { useState } from "react";
import { useProducts } from "../../../context/ProductContext";
import { discountedPrice, capitalise1stChar } from "../../../utils/utils";
import styles from "./ProductFilter.module.css";

const ProductFilter = () => {
  const {
    productState: { productList, categoryList },
  } = useProducts();

  const prices = productList
    .map((product) =>
      discountedPrice(product.price, product.discountPercentage)
    )
    .sort((a, b) => b - a);
  const maxPrice = prices[0];
  const midPrice = Math.floor(maxPrice / 2);

  const categories = categoryList.map(({ categoryName }) => categoryName);
  const Ratings = [4, 3, 2, 1];

  const [price, setPrice] = useState(midPrice);

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
          <label className={styles.price_value}>0</label>
          <label className={styles.price_value}>{midPrice}</label>
          <label className={styles.price_value}>{maxPrice}</label>
        </div>
        <input
          type="range"
          className={styles.slider}
          id="price_range"
          min={0}
          max={maxPrice}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label className={styles.current_price}>{price}</label>
      </div>
      <div className={styles.category_filter}>
        <label htmlFor="categories" className={styles.category_label}>
          Categories
        </label>
        {categories.map((item) => {
          return (
            <div className={styles.checkbox} key={`${item}-checkbox`}>
              <input
                type="checkbox"
                name={`${item}-checkbox`}
                id={`${item}-checkbox`}
              />
              <label htmlFor={`${item}-checkbox`}>
                {capitalise1stChar(item)}
              </label>
            </div>
          );
        })}
      </div>
      <div className={styles.rating_filter}>
        <label htmlFor="rating" className={styles.rating_label}>
          Rating
        </label>
        {Ratings.map((rating) => {
          return (
            <div className={styles.checkbox} key={`${rating}-star`}>
              <input type="radio" name="rating" id={`${rating}-star`} />
              <label htmlFor={`${rating}-star`}>{rating} star & above</label>
            </div>
          );
        })}
      </div>
      <div className={styles.sort_filter}>
        <label htmlFor="sort_price" className={styles.sort_price_label}>
          Sort by Price
        </label>
        <div className={styles.checkbox}>
          <input type="radio" name="sort" id="sortHighToLow" />
          <label htmlFor="sortHighToLow">Price - High to low</label>
        </div>
        <div className={styles.checkbox}>
          <input type="radio" name="sort" id="sortLowToHigh" />
          <label htmlFor="sortLowToHigh">Price - Low to high</label>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
