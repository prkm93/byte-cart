import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import Loader from "./components/Loader";
import { useAuth } from "./context/AuthContext";
import "./App.css";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import ToastSetter from "./components/Toast";
import Footer from "./components/Footer";
import Product from "./pages/Product";

function App() {
  const { isLoading } = useAuth();
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Product />} />
      </Routes>
      <Footer />
      <ToastSetter />
      {isLoading && (
        <div>
          <Loader />
        </div>
      )}
    </div>
  );
}

export default App;
