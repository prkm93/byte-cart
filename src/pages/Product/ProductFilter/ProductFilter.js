import React from "react";
import { useProducts } from "../../../context/ProductContext";
import { discountedPrice, capitalise1stChar } from "../../../utils/utils";
import { filterActionTypes } from "../../../utils/constant";
import styles from "./ProductFilter.module.css";

const ProductFilter = () => {
  const {
    productState: {
      productList,
      categoryList,
      categoryInput,
      stockAvailableInput,
      priceRangeInput,
      ratingInput,
      sortByPrice,
    },
    productDispatch,
  } = useProducts();
  const {
    FILTER_BY_PRICE,
    FILTER_BY_CATEGORY,
    FILTER_BY_STOCK,
    FILTER_BY_RATING,
    SORT,
    CLEAR_FILTER,
  } = filterActionTypes;

  const prices = productList
    .map((product) =>
      discountedPrice(product.price, product.discountPercentage)
    )
    .sort((a, b) => b - a);
  const maxPrice = Math.ceil(prices[0] / 10) * 10;
  const midPrice = Math.floor(maxPrice / 2);

  const categories = categoryList.map(({ categoryName }) => categoryName);
  const Ratings = [4, 3, 2, 1];
  const StockAvailability = ["In Stock", "Out of Stock"];

  return (
    <div className={styles.filter_section}>
      <div className={styles.filter_header}>
        <div className={styles.label_header}>Filters</div>
        <div
          className={styles.clear_text}
          onClick={() =>
            productDispatch({
              type: CLEAR_FILTER,
              payload: {
                productList,
                categoryList,
              },
            })
          }>
          Clear
        </div>
      </div>
      <div className={styles.price_filter}>
        <label htmlFor="price_range" className={styles.label_header}>
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
          step={10}
          value={priceRangeInput}
          onChange={(e) =>
            productDispatch({
              type: FILTER_BY_PRICE,
              payload: e.target.value,
            })
          }
        />
        <label className={styles.current_price}>{priceRangeInput}</label>
      </div>
      <div className={styles.category_filter}>
        <label htmlFor="categories" className={styles.label_header}>
          Categories
        </label>
        {categories.map((item) => {
          return (
            <div className={styles.checkbox} key={`${item}-checkbox`}>
              <input
                type="checkbox"
                name="category-checkbox"
                id={`${item}-checkbox`}
                checked={categoryInput.includes(item.toLowerCase())}
                onChange={() =>
                  productDispatch({
                    type: FILTER_BY_CATEGORY,
                    payload: item,
                  })
                }
              />
              <label htmlFor={`${item}-checkbox`}>
                {capitalise1stChar(item)}
              </label>
            </div>
          );
        })}
      </div>
      <div className={styles.stock_filter}>
        <label htmlFor="stockAvailability" className={styles.label_header}>
          Availability
        </label>
        {StockAvailability.map((item) => {
          return (
            <div className={styles.checkbox} key={item}>
              <input
                type="checkbox"
                name="stock-checkbox"
                id={`${item}-checkbox`}
                checked={stockAvailableInput.includes(item.toLowerCase())}
                onChange={() =>
                  productDispatch({
                    type: FILTER_BY_STOCK,
                    payload: item,
                  })
                }
              />
              <label htmlFor={`${item}-checkbox`}>{item}</label>
            </div>
          );
        })}
      </div>
      <div className={styles.rating_filter}>
        <label htmlFor="rating" className={styles.label_header}>
          Rating
        </label>
        {Ratings.map((rating) => {
          return (
            <div className={styles.checkbox} key={`${rating}-star`}>
              <input
                type="radio"
                name="rating"
                id={`${rating}-star`}
                checked={Number(ratingInput) === Number(rating)}
                onChange={() =>
                  productDispatch({
                    type: FILTER_BY_RATING,
                    payload: rating,
                  })
                }
              />
              <label htmlFor={`${rating}-star`}>{rating} star & above</label>
            </div>
          );
        })}
      </div>
      <div className={styles.sort_filter}>
        <label htmlFor="sort_price" className={styles.label_header}>
          Sort by Price
        </label>
        <div className={styles.checkbox}>
          <input
            type="radio"
            name="sort"
            id="sortHighToLow"
            value="sortHighToLow"
            checked={sortByPrice === "sortHighToLow"}
            onChange={(e) =>
              productDispatch({
                type: SORT,
                payload: e.target.value,
              })
            }
          />
          <label htmlFor="sortHighToLow">Price - High to low</label>
        </div>
        <div className={styles.checkbox}>
          <input
            type="radio"
            name="sort"
            id="sortLowToHigh"
            value="sortLowToHigh"
            checked={sortByPrice === "sortLowToHigh"}
            onChange={(e) =>
              productDispatch({
                type: SORT,
                payload: e.target.value,
              })
            }
          />
          <label htmlFor="sortLowToHigh">Price - Low to high</label>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
