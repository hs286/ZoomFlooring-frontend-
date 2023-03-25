import axios from "axios";
// import dotenv from 'dotenv'
import toast from "react-hot-toast";
import { json } from "react-router-dom";
import * as types from "../actionType";

// export const userRegistered = (users,error) => ({
//     type: types.REGISTER_USER,
//     payload1: users,
//     payload2: error,
//   });

export const updateCart = (service, quantity) => async (dispatch) => {
  var items = [],
    data;
  const cartServices = JSON.parse(localStorage.getItem("cart"));
  if (cartServices !== null) {
    items = cartServices;
    data = items.find((el) => el.service._id === service._id);
  }
  if (cartServices === null) {
    items.push({ service, quantity });
  } else if (data === undefined) {
    items.push({ service, quantity });
  } else {
    items = cartServices;
    var foundIndex = items.findIndex((el) => el.service._id === service._id);
    items[foundIndex] = { service, quantity };
  }
  localStorage.setItem("cart", JSON.stringify(items));
};

export const gettingCartServices = (cartServices) => ({
  type: types.GET_CART_SERVICES,
  payload: cartServices,
});

export const getCartServices = () => async (dispatch) => {
  const cartServices = JSON.parse(localStorage.getItem("cart"));
  console.log(cartServices, "hi");
  if (cartServices === null) {
    dispatch(gettingCartServices(cartServices));
  } else {
    dispatch(gettingCartServices(cartServices));
  }
};

export const deleteCartService = (id) => async (dispatch) => {
  const cartServices = JSON.parse(localStorage.getItem("cart"));
  console.log(cartServices);

 const updatedCart= cartServices.filter((el) =>  el.service._id!==id);
 console.log(updatedCart)
 localStorage.setItem("cart", JSON.stringify(updatedCart));
 dispatch(gettingCartServices(updatedCart));

};
