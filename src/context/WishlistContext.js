import { createContext, useContext, useReducer, useEffect } from "react";
import { toast } from "react-toastify";
import {
  getWishListService,
  addToWishlistService,
  removeFromWishlistService,
} from "../services/wishlist/wishlistService";
import {
  initialWishlistState,
  wishlistReducer,
} from "../reducers/wishListReducer";
import { wishListActionTypes } from "../utils/constant";

const WishlistContext = createContext(null);

const WishListProvider = ({ children }) => {
  const [wishlistState, wishListDispatch] = useReducer(
    wishlistReducer,
    initialWishlistState
  );
  const token = JSON.parse(localStorage.getItem("userInfo"))?.encodedToken;

  const {
    IS_LOADING_WIHSLIST,
    GET_WISHLIST,
    ADD_TO_WISHLIST,
    REMOVE_FROM_WISHLIST,
  } = wishListActionTypes;

  const handleLoader = (booleanVal) => {
    wishListDispatch({
      type: IS_LOADING_WIHSLIST,
      payload: booleanVal,
    });
  };

  const getWishListItems = async () => {
    try {
      const {
        status,
        data: { wishlist },
      } = await getWishListService(token);
      if (status === 200) {
        wishListDispatch({
          type: GET_WISHLIST,
          payload: wishlist,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addToWishlistHandler = async (product, encodedToken) => {
    handleLoader(true);
    try {
      const { status } = await addToWishlistService(product, encodedToken);
      if (status === 201) {
        wishListDispatch({
          type: ADD_TO_WISHLIST,
          payload: product,
        });
        toast.success(`${product.title} added to wishlist ❤️`, {
          position: "bottom-right",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong while adding to wishlist", {
        position: "bottom-right",
      });
    }
    handleLoader(false);
  };

  const removeFromWishlistHandler = async (productId, encodedToken) => {
    handleLoader(true);
    try {
      const { status } = await removeFromWishlistService(
        productId,
        encodedToken
      );
      if (status === 200) {
        wishListDispatch({
          type: REMOVE_FROM_WISHLIST,
          payload: productId,
        });
        toast.warn("product removed from wishlist ❤️", {
          position: "bottom-right",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong while removing from wishlist", {
        position: "bottom-right",
      });
    }
    handleLoader(false);
  };

  const isItemInWishlist = (productId) => {
    return wishlistState.wishlistProducts.find(
      (item) => item._id === productId
    );
  };

  useEffect(() => {
    if (token) {
      getWishListItems();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <WishlistContext.Provider
      value={{
        wishlistState,
        wishListDispatch,
        addToWishlistHandler,
        removeFromWishlistHandler,
        isItemInWishlist,
      }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistContext, useWishlist, WishListProvider };
