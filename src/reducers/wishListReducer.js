import { wishListActionTypes } from "../utils/constant";

const {
  IS_LOADING_WIHSLIST,
  GET_WISHLIST,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} = wishListActionTypes;

const initialWishlistState = {
  wishlistProducts: [],
  isLoadingWishListItems: false,
};

const wishlistReducer = (state = initialWishlistState, action) => {
  const { type, payload } = action;
  switch (type) {
    case IS_LOADING_WIHSLIST: {
      return {
        ...state,
        isLoadingWishListItems: payload,
      };
    }
    case GET_WISHLIST: {
      return {
        ...state,
        wishlistProducts: payload,
      };
    }
    case ADD_TO_WISHLIST: {
      return {
        ...state,
        wishlistProducts: [...state.wishlistProducts, payload],
      };
    }
    case REMOVE_FROM_WISHLIST: {
      return {
        ...state,
        wishlistProducts: state.wishlistProducts.filter(
          (item) => item._id !== payload
        ),
      };
    }
    default:
      return state;
  }
};

export { initialWishlistState, wishlistReducer };
