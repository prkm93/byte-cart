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
  UPDATE_CART,
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
        cartItemList: [...state.cartItemList, { ...payload, qty: 1 }],
      };
    }
    case REMOVE_FROM_CART: {
      return {
        ...state,
        cartItemList: state.cartItemList.filter((item) => item._id !== payload),
      };
    }
    case UPDATE_CART: {
      const { productId, type } = payload;
      let updatedCartList;
      if (type === "increment") {
        updatedCartList = state.cartItemList.map((item) => ({
          ...item,
          qty: item._id === productId ? item.qty + 1 : item.qty,
        }));
      }
      if (type === "decrement") {
        const foundProduct = state.cartItemList.find(
          (item) => item._id === productId
        );
        // if quantity is 1, then remove item from cart
        if (foundProduct.qty === 1) {
          updatedCartList = state.cartItemList.filter(
            (item) => item._id !== productId
          );
        } else {
          // decrease cart quantity
          updatedCartList = state.cartItemList.map((item) => ({
            ...item,
            qty:
              item._id === productId && item.qty > 1 ? item.qty - 1 : item.qty,
          }));
        }
      }
      return {
        ...state,
        cartItemList: updatedCartList,
      };
    }
    default:
      return state;
  }
};

export { initialCartState, cartReducer };
