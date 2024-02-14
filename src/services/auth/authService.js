import axios from "axios";

export const loginService = (email, password) => {
  return axios.post("/api/auth/login", {
    email,
    password,
  });
};

export const signup = (firstName, lastName, email, password) => {
  return axios.post("/api/auth/signup", {
    firstName,
    lastName,
    email,
    password,
  });
};
