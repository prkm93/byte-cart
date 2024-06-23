import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";

import { useAuth } from "./context/AuthContext";
import { useProducts } from "./context/ProductContext";

import Loader from "./components/Loader";
import Header from "./components/Header";
import ToastSetter from "./components/Toast";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Product from "./pages/Product";
import WishList from "./pages/Wishlist";
import ProductDetail from "./pages/Product/ProductDetail";

function App() {
  const { isLoading } = useAuth();
  const {
    productState: { isLoadingItems },
  } = useProducts();

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
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
      <Footer />
      <ToastSetter />
      {(isLoading || isLoadingItems) && (
        <div>
          <Loader />
        </div>
      )}
    </div>
  );
}

export default App;
