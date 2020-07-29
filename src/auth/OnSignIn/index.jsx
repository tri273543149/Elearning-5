import React from "react";
import "./index.css";
import UserImg from "./user.png";
import { NavLink } from "react-router-dom";

const OnSignIn = ({ credentials }) => {
  return (
    <NavLink to={`/profile/${credentials.taiKhoan}`}>
      <div className="on_sign_in">
        <span>{credentials.hoTen}</span>
        <img src={UserImg} alt="/" />
      </div>
    </NavLink>
  );
};

export default OnSignIn;
