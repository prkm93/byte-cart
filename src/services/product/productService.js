import axios from "axios";

export const productService = () => {
  return axios.get("/api/products");
};

export const productDetailService = (productId) => {
  return axios.get(`/api/products/${productId}`);
};
