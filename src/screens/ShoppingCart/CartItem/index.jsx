import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createAction } from "../../../store/actions";
import { REMOVE_CART_ITEM } from "../../../store/constants/cart";

const CartItem = ({ item, dispatch }) => {
  let { maKhoaHoc, hinhAnh, tenKhoaHoc, moTa } = item;
  return (
    <div className="cart_item_box">
      <i
        className="fa fa-trash-alt icon_1"
        onClick={() => dispatch(createAction(REMOVE_CART_ITEM, item))}
      ></i>
      <div className="course_price">$12.99</div>
      <NavLink to={`/course-detail/${maKhoaHoc}`}>
        <div className="cart_item">
          <img src={hinhAnh} alt="/" />
          <div className="content_box">
            <div className="course_name">{tenKhoaHoc}</div>
            <div className="course_desc">{moTa}</div>
            <div className="course_star">
              <span className="text-dark mr-3">4.9</span>
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

export default connect()(CartItem);
