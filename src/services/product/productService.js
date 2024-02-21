import axios from "axios";

export const productService = () => {
  return axios.get("/api/products");
};
