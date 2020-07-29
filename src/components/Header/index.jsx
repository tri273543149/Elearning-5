import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createAction } from "../../store/actions";
import { IS_MODAL_OPEN } from "../../store/constants/modal";
// import components
import OnSignIn from "../../auth/OnSignIn";

const Header = ({ credentials, dispatch, cart }) => {
  const renderOnSignIn = () => {
    if (credentials) {
      return <OnSignIn credentials={credentials} />;
    } else {
      return (
        <>
          <button
            className="btn_signup"
            onClick={() => dispatch(createAction(IS_MODAL_OPEN, "SignUp"))}
          >
            Sign Up
          </button>
          <button
            className="btn_signin"
            onClick={() => dispatch(createAction(IS_MODAL_OPEN, "SignIn"))}
          >
            Sign In
          </button>
        </>
      );
    }
  };
  return (
    <header>
      <div className="header_content">
        <div className="logo_content">
          <NavLink to="/">
            <i className="fa fa-globe-asia mr-2"></i>
            <span className="title">LEARN</span>
          </NavLink>
        </div>
        <nav className="myMenu">
          <ul>
            <li>
              <NavLink activeClassName="active" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/courses">
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/blogs">
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/events">
                Events
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="search_content">
          <input type="text" placeholder="Search for anything" />
        </div>
        <div className="cart_content">
          <NavLink to="/shopping-cart">
            <i className="icon_cart fa fa-shopping-cart">
              {cart.length === 0 ? (
                <span className="d-none"></span>
              ) : (
                <span>{cart.length}</span>
              )}
            </i>
          </NavLink>
        </div>
        <div className="login_content">{renderOnSignIn()}</div>
      </div>
    </header>
  );
};

export default connect((state) => ({
  credentials: state.user.credentials,
  cart: state.cart,
}))(Header);
