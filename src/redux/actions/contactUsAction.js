import axios from "axios";
import toast from "react-hot-toast";
import * as types from "../actionType";

// export const gettingServices = (service) => ({
//   type: types.GET_SERVICES,
//   payload: service,
// });
export const addContactUs = (contactData) => async (dispatch) => {
  try {
     await axios.post(`${process.env.REACT_APP_API}/contact`,contactData);
    
  } catch (error) {
    
    console.log(error.response.data.message);
  }
};
// export const gettingServiceById = (service) => ({
//   type: types.GET_SERVICE_BY_ID,
//   payload:service
// });