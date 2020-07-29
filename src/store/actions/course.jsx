import { courseService } from "../services";
import { createAction } from ".";
import Swal from "sweetalert2";
import {
  FETCH_COURSES,
  FETCH_COURSES_PAGINATION,
  FETCH_COURSE_DETAIL,
  FETCH_CATEGORIES,
  FETCH_COURSE_CATEGORY,
  FETCH_USERS_OF_COURSE,
} from "../constants/course";
import {
  ADD_NEW_COURSE,
  DELETE_COURSE,
  UPDATE_COURSE,
} from "../constants/admin";

export const fetchCoursesList = () => {
  return (dispatch) => {
    courseService
      .layDanhSachKhoaHoc()
      .then((res) => {
        dispatch(createAction(FETCH_COURSES, res.data));
      })
      .catch((err) => console.log(err));
  };
};
export const fetchCoursesPagination = (page) => {
  return (dispatch) => {
    courseService
      .layDanhSachKhoaHocPhanTrang(page)
      .then((res) => {
        dispatch(createAction(FETCH_COURSES_PAGINATION, res.data));
      })
      .catch((err) => console.log(err));
  };
};

export const fetchCategories = () => {
  return (dispatch) => {
    courseService
      .layDanhMucKhoaHoc()
      .then((res) => {
        dispatch(createAction(FETCH_CATEGORIES, res.data));
      })
      .catch((err) => console.log(err));
  };
};

export const fetCourseOnCategory = (maDanhMuc) => {
  return (dispatch) => {
    courseService
      .layKhoaHocTheoDanhMuc(maDanhMuc)
      .then((res) => {
        dispatch(createAction(FETCH_COURSE_CATEGORY, res.data));
      })
      .catch((err) => console.log(err));
  };
};

export const fetchCourseDetail = (maKhoaHoc) => {
  return (dispatch) => {
    courseService
      .layThongTinKhoaHoc(maKhoaHoc)
      .then((res) => {
        dispatch(createAction(FETCH_COURSE_DETAIL, res.data));
      })
      .catch((err) => console.log(err));
  };
};

export const getStudentOfCourse = (maKhoaHoc) => {
  return (dispatch) => {
    courseService
      .layThongTinHocVienKhoaHoc(maKhoaHoc)
      .then((res) => {
        dispatch(createAction(FETCH_COURSE_DETAIL, res.data));
      })
      .catch((err) => console.log(err));
  };
};
export const cancelRegisterCourse = (maKhoaHoc, taiKhoan) => {
  let data = { maKhoaHoc, taiKhoan };
  return (dispatch) => {
    courseService
      .huyGhiDanh(data)
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: res.data,
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(createAction(FETCH_USERS_OF_COURSE, taiKhoan));
      })
      .catch((err) => console.log(err));
  };
};

export const addNewCourse = (data) => {
  return (dispatch) => {
    courseService
      .themKhoaHoc(data)
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(createAction(ADD_NEW_COURSE, res.data));
      })
      .catch((err) => console.log(err));
  };
};

export const updateCourse = (data) => {
  return (dispatch) => {
    courseService
      .capNhatKhoaHoc(data)
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(createAction(UPDATE_COURSE, res.data));
      })
      .catch((err) => console.log(err));
  };
};

export const deleteCourse = (maKhoaHoc) => {
  return (dispatch) => {
    courseService
      .xoaKhoaHoc(maKhoaHoc)
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Adding a new course succeed",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(createAction(DELETE_COURSE, maKhoaHoc));
      })
      .catch((err) => console.log(err));
  };
};
