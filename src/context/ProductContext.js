import { createContext, useContext, useEffect, useReducer } from "react";

import {
  initialProductState,
  productReducer,
} from "../reducers/productReducer";
import { productActionTypes, filterTypes } from "../utils/constant";
import { categoryListService } from "../services/category/categoryService";
import {
  productService,
  productDetailService,
} from "../services/product/productService";

const { FETCH_CATEGORIES, FETCH_PRODUCTS, IS_LOADING } = productActionTypes;
const {
  SEARCH_PRODUCT,
  FILTER_BY_PRICE,
  FILTER_BY_CATEGORY,
  FILTER_BY_RATING,
  SORT,
  CLEAR_FILTER,
} = filterTypes;

const ProductContext = createContext(null);

const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(
    productReducer,
    initialProductState
  );

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
      const response = await productDetailService(id);
      console.log("response details", response.data);
    } catch (err) {
      console.error(err);
    }
    handleLoader(false);
  };

  const searchProductHandler = (event) => {
    console.log(event.target.value);
    productDispatch({
      type: SEARCH_PRODUCT,
      payload: event.target.value,
    });
  };

  useEffect(() => {
    fetchCategory();
    fetchProductList();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        productState,
        productDispatch,
        searchProductHandler,
        getProductDetails,
      }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);

export { ProductProvider, useProducts };
