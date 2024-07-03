import { cartActionTypes } from "../utils/constant";

const initialCartState = {
  cartItemList: [],
  isLoadingCartItems: false,
  addressList: [
    {
      address: "NeelSidhi CHS, 8505 Carter Road",
      alternatemobile: 4878794411,
      city: "Mcloedganj",
      _id: "2364c34d-7645-49cb-8b74-4bc5cb09711d",
      mobile: 1293452481,
      name: "Ravi Kumar",
      pincode: "820598",
      state: "Himachal Pradesh",
    },
  ],
  orderedList: [],
};

const {
  IS_LOADING_CART,
  GET_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  UPDATE_CART,
  GET_ADDRESS,
  UPDATE_ADDRESS,
  DELETE_ADDRESS,
  ADD_ORDER,
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
    case CLEAR_CART: {
      return {
        ...state,
        cartItemList: [],
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
    case GET_ADDRESS: {
      return {
        ...state,
        addressList: payload,
      };
    }
    case UPDATE_ADDRESS: {
      return {
        ...state,
        addressList: [...state.addressList, payload],
      };
    }
    case DELETE_ADDRESS: {
      return {
        ...state,
        addressList: payload,
      };
    }
    case ADD_ORDER: {
      return {
        ...state,
        orderedList: [...state.orderedList, payload],
      };
    }
    default:
      return state;
  }
};

export { initialCartState, cartReducer };
