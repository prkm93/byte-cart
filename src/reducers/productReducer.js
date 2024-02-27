import { productActionTypes } from "../utils/constant";

const { FETCH_CATEGORIES, FETCH_PRODUCTS, IS_LOADING } = productActionTypes;

export const initialProductState = {
  productList: [],
  categoryList: [],
  isLoadingItems: false,
  searchProduct: "",
  priceRangeInput: "",
  categoryInput: "",
  ratingInput: "",
  sortByPrice: "",
};

export const productReducer = (state = initialProductState, actions) => {
  const { type, payload } = actions;
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
    default:
      return state;
  }
};
