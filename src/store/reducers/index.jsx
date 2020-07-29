import { combineReducers } from "redux";
import courseReducer from "./course";
import userReducer from "./user";
import cartReducer from "./cart";
import filterReducer from "./filter";
import categoriedCoursesReducer from "./categoriedCourses";
import paginatedCoursesReducer from "./paginatedCourses";
import paginatedUsersReducer from "./paginatedUsers";
import modalReducer from "./modal";

const rootReducer = combineReducers({
  course: courseReducer,
  user: userReducer,
  cart: cartReducer,
  filter: filterReducer,
  categoriedCourses: categoriedCoursesReducer,
  paginatedCourses: paginatedCoursesReducer,
  paginatedUsers: paginatedUsersReducer,
  modalStatus: modalReducer,
});

export default rootReducer;
