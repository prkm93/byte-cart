import { createContext, useContext } from "react";
// import { getCartService } from "../services/cart/cartService";

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  return <CartContext.Provider>{children}</CartContext.Provider>;
};

const useCart = () => useContext(CartContext);

export { CartContext, CartProvider, useCart };
