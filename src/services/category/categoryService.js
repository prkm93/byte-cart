import axios from "axios";

export const categoryListService = () => {
  return axios.get("/api/categories");
};
