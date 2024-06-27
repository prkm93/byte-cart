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

  const { GET_WISHLIST, ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } =
    wishListActionTypes;

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
    console.log("product", product);
    try {
      const {
        status,
        data: { wishlist },
      } = await addToWishlistService(product, encodedToken);
      if (status === 201) {
        wishListDispatch({
          type: ADD_TO_WISHLIST,
          payload: wishlist.map((item) => ({ ...item, wished: true })),
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeFromWishlistHandler = async (productId, encodedToken) => {
    try {
      const response = await removeFromWishlistService(productId, encodedToken);
      console.log("response remove wishlist ==>", response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getWishListItems();
  }, []);

  return (
    <WishlistContext.Provider
      value={{
        wishlistState,
        wishListDispatch,
        addToWishlistHandler,
        removeFromWishlistHandler,
      }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistContext, useWishlist, WishListProvider };
