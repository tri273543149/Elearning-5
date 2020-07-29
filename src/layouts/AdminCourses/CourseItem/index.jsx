import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { deleteCourse } from "../../../store/actions/course";
import { createAction } from "../../../store/actions";
import { IS_MODAL_OPEN } from "../../../store/constants/modal";
import { FETCH_COURSE_DETAIL } from "../../../store/constants/course";
import Swal from "sweetalert2";

const CourseItem = ({ course, index, dispatch }) => {
  let { maKhoaHoc, tenKhoaHoc, hinhAnh } = course;
  const handleOnDeleteCourse = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      dispatch(deleteCourse(maKhoaHoc));
    });
  };
  const handleOnUpdateCourse = () => {
    dispatch(createAction(FETCH_COURSE_DETAIL, course));
    dispatch(createAction(IS_MODAL_OPEN, "AddNewCourse"));
  };
  return (
    <div className="course_item_box">
      <div className="course_row">
        <p className="index">{index}</p>
        <div className="course_name">
          <NavLink to={`/course-detail/${maKhoaHoc}`}>{tenKhoaHoc}</NavLink>
        </div>
        <img src={hinhAnh} alt="/" />
        <div className="btn_style">
          <button
            className="btn btn-primary mx-1"
            onClick={handleOnUpdateCourse}
          >
            <i className="fa fa-cog"></i>
          </button>
          <button className="btn btn-danger" onClick={handleOnDeleteCourse}>
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect()(CourseItem);
