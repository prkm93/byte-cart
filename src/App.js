import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";

import { useAuth } from "./context/AuthContext";
import { useProducts } from "./context/ProductContext";
import { useWishlist } from "./context/WishlistContext";
import { useCart } from "./context/CartContext";

import Loader from "./components/Loader";
import Header from "./components/Header";
import ToastSetter from "./components/Toast";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Product from "./pages/Product";
import WishList from "./pages/WishList";
import CartList from "./pages/CartList";
import ProductDetail from "./pages/Product/ProductDetail";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";

function App() {
  const { isLoading } = useAuth();
  const {
    productState: { isLoadingItems },
  } = useProducts();
  const {
    wishlistState: { isLoadingWishListItems },
  } = useWishlist();
  const {
    cartState: { isLoadingCartItems },
  } = useCart();

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={<Landing />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Product />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cartlist" element={<CartList />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
      <Footer />
      <ToastSetter />
      {(isLoading ||
        isLoadingItems ||
        isLoadingWishListItems ||
        isLoadingCartItems) && (
        <div>
          <Loader />
        </div>
      )}
    </div>
  );
}

export default App;
