import { createContext, useContext } from "react";

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  return <CartContext.Provider>{children}</CartContext.Provider>;
};

const useCart = () => useContext(CartContext);

export { CartContext, CartProvider, useCart };
