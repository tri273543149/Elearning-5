import { FETCH_USERS_PAGINATION } from "../constants/user";

let initialState = {};
const paginatedUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_PAGINATION:
      state = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default paginatedUsersReducer;
