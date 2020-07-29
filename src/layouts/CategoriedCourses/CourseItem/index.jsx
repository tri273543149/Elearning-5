import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createAction } from "../../../store/actions";
import { ADD_TO_CART } from "../../../store/constants/cart";

const CourseItem = ({ course, dispatch }) => {
  let { hinhAnh, tenKhoaHoc, moTa, maKhoaHoc } = course;
  return (
    <div className="course_item_box">
      <i
        className="fa fa-cart-plus icon_2"
        onClick={() => dispatch(createAction(ADD_TO_CART, course))}
      ></i>
      <NavLink to={`/course-detail/${maKhoaHoc}`}>
        <div className="course_item">
          <img src={hinhAnh} alt="/" />
          <div className="content_box">
            <div className="course_name">{tenKhoaHoc}</div>
            <div className="course_desc">{moTa}</div>
            <div className="course_star">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-alt"></i>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default connect()(CourseItem);
