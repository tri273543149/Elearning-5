import { FETCH_CATEGORIES, FETCH_COURSE_CATEGORY } from "../constants/course";

let initialState = {
  categories: [],
  courseTab: [],
};

const coursesTabReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      state.categories = action.payload;
      return { ...state };
    case FETCH_COURSE_CATEGORY:
      state.courseTab = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default coursesTabReducer;
