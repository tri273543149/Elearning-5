import { ADD_TO_CART, SET_CART, REMOVE_CART_ITEM } from "../constants/cart";
import Swal from "sweetalert2";

let initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      {
        let index = state.findIndex(
          (item) => item.maKhoaHoc === action.payload.maKhoaHoc
        );
        if (index === -1) {
          state = [...state, action.payload];
        } else {
          Swal.fire({
            icon: "error",
            title: "This course has already been in cart !",
          });
        }
        localStorage.setItem("cart", JSON.stringify(state));
      }

      return [...state];
    case REMOVE_CART_ITEM:
      {
        let index = state.findIndex(
          (item) => item.maKhoaHoc === action.payload.maKhoaHoc
        );
        if (index !== -1) {
          state.splice(index, 1);
          localStorage.setItem("cart", JSON.stringify(state));
        }
      }
      return [...state];
    case SET_CART:
      state = action.payload;
      return [...state];
    default:
      return [...state];
  }
};

export default cartReducer;
