import { cartActionTypes } from "../utils/constant";

const initialCartState = {
  cartItemList: [],
  isLoadingCartItems: false,
};

const {
  IS_LOADING_CART,
  GET_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
} = cartActionTypes;

const cartReducer = (state = initialCartState, action) => {
  const { type, payload } = action;
  switch (type) {
    case IS_LOADING_CART: {
      return {
        ...state,
        isLoadingCartItems: payload,
      };
    }
    case GET_CART: {
      return {
        ...state,
        cartItemList: payload,
      };
    }
    case ADD_TO_CART: {
      return {
        ...state,
        cartItemList: payload,
      };
    }
    default:
      return state;
  }
};

export { initialCartState, cartReducer };
