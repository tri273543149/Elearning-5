import React from "react";
import "./index.css";
import { connect } from "react-redux";
import { clearCart } from "../../store/actions/cart";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import CartItem from "./CartItem";

const ShoppingCart = ({ cart, dispatch, credentials }) => {
  const showMessage = () => {
    Swal.fire({
      icon: "error",
      title: "You have to login",
    });
  };
  const renderCartItem = () => {
    return cart.map((item, key) => (
      <div className="col-4 mb-4" key={key}>
        <CartItem item={item} />
      </div>
    ));
  };
  return (
    <section className="shopping_cart">
      <div className="top_content">
        <div className="container">
          <p className="title">Shopping Cart</p>
        </div>
      </div>
      <div className="mid_content">
        <div className="container d-flex">
          <div className="left_box">
            <div className="row m-0">
              {cart.length !== 0 ? renderCartItem() : ""}
            </div>
          </div>
          <div className="right_box">
            {cart.length !== 0 ? (
              <div className="content_box">
                <div className="cart_status">Cart status</div>
                <div className="text_content">
                  <div className="item item_left">Quanlity</div>
                  <div className="item item_right text-danger">
                    {cart.length}
                  </div>
                  <div className="item item_left">Total</div>
                  <div className="item item_right text-danger">
                    ${cart.length * 12.99}
                  </div>
                  <div className="item item_last">
                    {credentials ? (
                      <NavLink
                        to="/payment"
                        className="btn btn-danger w-100 mb-2"
                      >
                        BUY NOW
                      </NavLink>
                    ) : (
                      <button
                        className="btn btn-danger w-100 mb-2"
                        onClick={showMessage}
                      >
                        BUY NOW
                      </button>
                    )}
                    <button
                      className="btn btn-outline-success w-100 mb-2"
                      onClick={() => dispatch(clearCart())}
                    >
                      CLEAR CART
                    </button>
                    <NavLink
                      to="/courses"
                      className="btn btn-outline-primary w-100"
                    >
                      CONTINUE SHOPPING
                    </NavLink>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default connect((state) => ({
  cart: state.cart,
  credentials: state.user.credentials,
}))(ShoppingCart);
