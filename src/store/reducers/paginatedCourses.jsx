import { FETCH_COURSES_PAGINATION } from "../constants/course";

let initialState = [];

const paginatedCoursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES_PAGINATION:
      state = action.payload;
      return [...state];

    default:
      return [...state];
  }
};

export default paginatedCoursesReducer;
