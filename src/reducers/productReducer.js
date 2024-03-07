import { productActionTypes, filterTypes } from "../utils/constant";

const { FETCH_CATEGORIES, FETCH_PRODUCTS, IS_LOADING, GET_PRODUCT_DETAILS } =
  productActionTypes;
const { SEARCH_PRODUCT } = filterTypes;

export const initialProductState = {
  productList: [],
  categoryList: [],
  productDetail: {},
  isLoadingItems: false,
  searchProduct: "",
  priceRangeInput: "",
  categoryInput: "",
  ratingInput: "",
  sortByPrice: "",
};

export const productReducer = (state = initialProductState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        productList: payload,
      };
    case FETCH_CATEGORIES:
      return {
        ...state,
        categoryList: payload,
      };
    case IS_LOADING:
      return {
        ...state,
        isLoadingItems: payload,
      };
    case GET_PRODUCT_DETAILS:
      return {
        ...state,
        productDetail: payload,
      };
    case SEARCH_PRODUCT:
      return {
        ...state,
        searchProduct: payload,
      };
    default:
      return state;
  }
};
