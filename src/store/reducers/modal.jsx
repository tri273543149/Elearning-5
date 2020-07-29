import { IS_MODAL_OPEN, IS_MODAL_CLOSE } from "../constants/modal";
let initialState = {
  isModalOpen: false,
  isComponentOpen: "",
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_MODAL_OPEN:
      state.isModalOpen = true;
      state.isComponentOpen = action.payload;
      return { ...state };
    case IS_MODAL_CLOSE:
      state.isModalOpen = false;
      state.isComponentOpen = "";
      return { ...state };
    default:
      return { ...state };
  }
};
export default modalReducer;
