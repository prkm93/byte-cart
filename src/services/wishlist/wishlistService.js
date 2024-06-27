import axios from "axios";

const getWishListService = (encodedToken) => {
  return axios.get("/api/user/wishlist", {
    headers: { authorization: encodedToken },
  });
};

const addToWishlistService = (product, encodedToken) => {
  return axios.post(
    "/api/user/wishlist",
    { product },
    { headers: { authorization: encodedToken } }
  );
};

const removeFromWishlistService = (productId, encodedToken) => {
  return axios.delete(`/api/user/wishlist/${productId}`, {
    headers: { authorization: encodedToken },
  });
};

export { getWishListService, addToWishlistService, removeFromWishlistService };
