import { createContext, useContext, useEffect, useReducer } from "react";

import {
  initialProductState,
  productReducer,
} from "../reducers/productReducer";
import { productActionTypes } from "../utils/constant";
import { categoryListService } from "../services/category/categoryService";
import {
  productService,
  productDetailService,
} from "../services/product/productService";
import { discountedPrice, convertRatingToWholeNumber } from "../utils/utils";

const { FETCH_CATEGORIES, FETCH_PRODUCTS, IS_LOADING, GET_PRODUCT_DETAILS } =
  productActionTypes;

const ProductContext = createContext(null);

const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(
    productReducer,
    initialProductState
  );

  const {
    productList,
    searchProduct,
    categoryInput,
    priceRangeInput,
    ratingInput,
    sortByPrice,
  } = productState;

  const handleLoader = (boolVal) => {
    productDispatch({
      type: IS_LOADING,
      payload: boolVal,
    });
  };

  const fetchCategory = async () => {
    handleLoader(true);
    try {
      const {
        status,
        data: { categories },
      } = await categoryListService();

      if (status === 200) {
        productDispatch({
          type: FETCH_CATEGORIES,
          payload: categories,
        });
      }
    } catch (err) {
      console.error(err);
    }
    handleLoader(false);
  };

  const fetchProductList = async () => {
    handleLoader(true);
    try {
      const {
        status,
        data: { products },
      } = await productService();
      if (status === 200) {
        productDispatch({
          type: FETCH_PRODUCTS,
          payload: products,
        });
      }
    } catch (err) {
      console.error(err);
    }
    handleLoader(false);
  };

  const getProductDetails = async (id) => {
    handleLoader(true);
    try {
      const {
        status,
        data: { product },
      } = await productDetailService(id);
      if (status === 200) {
        productDispatch({
          type: GET_PRODUCT_DETAILS,
          payload: product,
        });
      }
    } catch (err) {
      console.error(err);
    }
    handleLoader(false);
  };

  const filterBySearch = searchProduct
    ? productList.filter((item) =>
        item.title.toLowerCase().includes(searchProduct.toLowerCase())
      )
    : productList;

  const filterByCategory =
    categoryInput.length > 0
      ? filterBySearch.filter(({ category }) =>
          categoryInput.includes(category.toLowerCase())
        )
      : filterBySearch;

  const filterByRating =
    ratingInput > 0
      ? filterByCategory.filter(
          ({ rating }) =>
            Number(convertRatingToWholeNumber(rating)) >= Number(ratingInput)
        )
      : filterByCategory;

  console.log("filterByRating ===>", filterByRating);

  const sortingByPrice =
    sortByPrice.length > 0
      ? sortByPrice === "sortHighToLow"
        ? filterByRating.sort((a, b) => b.price - a.price)
        : filterByRating.sort((a, b) => a.price - b.price)
      : filterByRating;

  const filterByPrice =
    priceRangeInput > 0
      ? sortingByPrice.filter(
          ({ price, discountPercentage }) =>
            discountedPrice(price, discountPercentage) <=
            Number(priceRangeInput)
        )
      : sortByPrice;

  useEffect(() => {
    fetchCategory();
    fetchProductList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ProductContext.Provider
      value={{
        productState,
        productDispatch,
        getProductDetails,
        filterByPrice,
      }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);

export { ProductProvider, useProducts };
