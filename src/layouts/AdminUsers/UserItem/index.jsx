import React from "react";
import { NavLink } from "react-router-dom";

const UserItem = ({ user, index }) => {
  let { taiKhoan, hoTen, maLoaiNguoiDung } = user;
  let maLoaiNguoiDungIcon;
  switch (maLoaiNguoiDung) {
    case "HV":
      maLoaiNguoiDungIcon = <i className="fa fa-user-graduate"></i>;
      break;
    case "GV":
      maLoaiNguoiDungIcon = <i className="fa fa-chalkboard-teacher mr-3"></i>;
      break;
    default:
      break;
  }
  return (
    <div className="user_item">
      <div className="item_box">
        <p className="index">{index}</p>
        <div className="user_id">
          <NavLink to="/">{taiKhoan}</NavLink>
        </div>
        <div className="user_name">{hoTen}</div>
        <p className="user_icon">{maLoaiNguoiDungIcon}</p>
        <div className="btn_style">
          <button className="btn btn-primary mx-1">
            <i className="fa fa-cog"></i>
          </button>
          <button className="btn btn-danger">
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
