import {
  FETCH_COURSES,
  FETCH_COURSE_DETAIL,
  FETCH_USERS_OF_COURSE,
} from "../constants/course";
import {
  ADD_NEW_COURSE,
  DELETE_COURSE,
  UPDATE_COURSE,
} from "../constants/admin";

let initialState = {
  courses: [],
  courseDetail: null,
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES:
      state.courses = action.payload;
      return { ...state };
    case FETCH_COURSE_DETAIL:
      state.courseDetail = action.payload;
      if (action.payload.lstHocVien) {
        state.listHocVien = action.payload.lstHocVien;
      }
      return { ...state };
    case ADD_NEW_COURSE:
      state.courses = [...state.courses, action.payload];
      return { ...state };
    case UPDATE_COURSE:
      {
        let temptArr = [...state.courses];
        let index = temptArr.findIndex(
          (item) => item.maKhoaHoc === action.payload.maKhoaHoc
        );
        if (index !== -1) {
          temptArr[index] = action.payload;
        }
        state.courses = [...temptArr];
      }
      return { ...state };
    case DELETE_COURSE:
      {
        let tempArr = [...state.courses];
        let index = tempArr.findIndex(
          (item) => item.maKhoaHoc === action.payload
        );
        if (index !== -1) {
          tempArr.splice(index, index);
        }
        state.courses = [...tempArr];
      }
      return { ...state };
    default:
      return { ...state };
  }
};

export default courseReducer;
