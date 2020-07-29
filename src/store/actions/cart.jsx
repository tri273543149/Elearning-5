import { SET_CART } from "../constants/cart";
import { createAction } from ".";
import Swal from "sweetalert2";

export const clearCart = () => {
  return (dispatch) => {
    localStorage.removeItem("cart");
    dispatch(createAction(SET_CART, []));
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Cleared",
      showConfirmButton: false,
      timer: 1500,
    });
  };
};
