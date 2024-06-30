import { createContext, useContext, useReducer, useEffect } from "react";
import { toast } from "react-toastify";

import { initialCartState, cartReducer } from "../reducers/cartReducer";
import {
  getCartService,
  addToCartService,
  removeFromCartService,
  updateCartQuantityService,
} from "../services/cart/cartService";
import { cartActionTypes } from "../utils/constant";

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);

  const {
    IS_LOADING_CART,
    GET_CART,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART,
  } = cartActionTypes;
  const token = JSON.parse(localStorage.getItem("userInfo"))?.encodedToken;

  const handleCartLoader = (booleanVal) => {
    cartDispatch({
      type: IS_LOADING_CART,
      payload: booleanVal,
    });
  };

  const getCartList = async () => {
    try {
      const {
        status,
        data: { cart },
      } = await getCartService(token);

      if (status === 200) {
        cartDispatch({
          type: GET_CART,
          payload: cart,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addtoCartHandler = async (product, token) => {
    handleCartLoader(true);
    try {
      const { status } = await addToCartService(product, token);
      if (status === 201) {
        cartDispatch({
          type: ADD_TO_CART,
          payload: product,
        });
      }
      toast.success(`${product.title} added to cart  🛒`, {
        position: "bottom-right",
      });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong while adding to cart");
    }
    handleCartLoader(false);
  };

  const removeFromCartHandler = async (productId, token) => {
    handleCartLoader(true);
    try {
      const { status } = await removeFromCartService(productId, token);
      if (status === 200) {
        cartDispatch({
          type: REMOVE_FROM_CART,
          payload: productId,
        });
        toast.success("Item removed from cart  🛒", {
          position: "bottom-right",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong while removeing from cart");
    }
    handleCartLoader(false);
  };

  const updateCartHandler = async (productId, type, token) => {
    try {
      const { status } = await updateCartQuantityService(
        productId,
        type,
        token
      );
      if (status === 200) {
        cartDispatch({
          type: UPDATE_CART,
          payload: {
            productId,
            type,
          },
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong while updating cart items");
    }
  };

  useEffect(() => {
    if (token) {
      getCartList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <CartContext.Provider
      value={{
        cartState,
        cartDispatch,
        addtoCartHandler,
        removeFromCartHandler,
        handleCartLoader,
        updateCartHandler,
      }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartContext, CartProvider, useCart };
