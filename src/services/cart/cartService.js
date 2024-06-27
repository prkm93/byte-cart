import axios from "axios";

const getCartService = () => {
  return axios.get("/api/user/cart");
};

const addToCartService = (product, encodedToken) => {
  return axios.post(
    "/api/user/cart",
    { product },
    {
      headers: { authorization: encodedToken },
    }
  );
};

const removeFromCartService = (productId, encodedToken) => {
  return axios.delete(`/api/user/cart/${productId}`, {
    headers: { authorization: encodedToken },
  });
};

const updateCartQuantityService = (productId, type, encodedToken) => {
  return axios.post(
    `/api/user/cart/${productId}`,
    { action: { type } },
    { headers: { authorization: encodedToken } }
  );
};

export {
  getCartService,
  addToCartService,
  removeFromCartService,
  updateCartQuantityService,
};
