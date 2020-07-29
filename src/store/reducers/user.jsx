import { FETCH_CREDENTIALS } from "../constants/user";
import { FETCH_USERS } from "../constants/user";

let initialState = {
  credentials: null,
  users: [],
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CREDENTIALS:
      state.credentials = action.payload;
      return { ...state };
    case FETCH_USERS:
      state.users = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default userReducer;
