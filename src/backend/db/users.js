import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Pradeep",
    lastName: "Maurya",
    email: "pradeep.kumar@gmail.com",
    password: "PradeepM",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Godrej",
    lastName: "Wadia",
    email: "godrej.wadia@gmail.com",
    password: "GodrejW",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Raj",
    lastName: "Mallik",
    email: "raj.mallik@yahoo.com",
    password: "RajM",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
