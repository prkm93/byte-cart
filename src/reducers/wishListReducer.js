import { wishListActionTypes } from "../utils/constant";

const { GET_WISHLIST, ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } =
  wishListActionTypes;

const initialWishlistState = {
  wishlistProducts: [],
};

const wishlistReducer = (state = initialWishlistState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_WISHLIST: {
      return {
        wishlistProducts: payload,
      };
    }
    case ADD_TO_WISHLIST: {
      return {
        wishlistProducts: payload,
      };
    }
    case REMOVE_FROM_WISHLIST: {
      return {
        wishlistProducts: payload,
      };
    }
    default:
      return state;
  }
};

export { initialWishlistState, wishlistReducer };
