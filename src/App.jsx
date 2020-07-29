import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Modal from "react-modal";
import { connect } from "react-redux";
import { createAction } from "./store/actions";
import { FETCH_CREDENTIALS } from "./store/constants/user";
import { SET_CART } from "./store/constants/cart";
import setHeaders from "./helpers/setHeaders";
import { IS_MODAL_CLOSE } from "./store/constants/modal";
// import components
import Header from "./components/Header";
import Home from "./screens/Home";
import CourseDetail from "./screens/CourseDetail";
import SignUp from "./auth/SignUp";
import SignIn from "./auth/SignIn";
import ShoppingCart from "./screens/ShoppingCart";
import Courses from "./screens/Courses";
import UserProfile from "./screens/UserProfile";
import AdminProfile from "./screens/AdminProfile";
import AddNewCourse from "./auth/AddNewCourse";

class App extends Component {
  renderModal = () => {
    let { isComponentOpen } = this.props.modalStatus;
    switch (isComponentOpen) {
      case "SignUp":
        return <SignUp />;
      case "SignIn":
        return <SignIn />;
      case "AddNewCourse":
        return <AddNewCourse />;
      default:
        return;
    }
  };
  isModalClose = () => {
    this.props.dispatch(createAction(IS_MODAL_CLOSE));
  };
  getLocalStorage = (localName) => {
    if (localStorage.getItem(localName)) {
      return JSON.parse(localStorage.getItem(localName));
    }
    return false;
  };
  componentDidMount() {
    Modal.setAppElement("body");
    let credentials = this.getLocalStorage("credentials");
    if (credentials)
      this.props.dispatch(createAction(FETCH_CREDENTIALS, credentials));

    let cart = this.getLocalStorage("cart");
    if (cart) this.props.dispatch(createAction(SET_CART, cart));

    const token = localStorage.getItem("accessToken");
    if (!token) return;
    setHeaders(token);
  }
  render() {
    let { modalStatus, credentials } = this.props;
    const customStyles = {
      content: {
        width: "60%",
        margin: "30px auto",
        padding: "0",
        height: "600px",
      },
      overlay: {
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        zIndex: "1000",
      },
    };
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/course-detail/:courseId"
            exact
            component={CourseDetail}
          />
          <Route path="/shopping-cart" exact component={ShoppingCart} />
          <Route path="/courses" exact component={Courses} />
          <Route
            path="/profile/:userId"
            exact
            component={
              credentials.maLoaiNguoiDung === "HV" ? UserProfile : AdminProfile
            }
          />
        </Switch>
        <Modal
          style={customStyles}
          isOpen={modalStatus.isModalOpen}
          onRequestClose={this.isModalClose}
          closeTimeoutMS={500}
        >
          {this.renderModal()}
        </Modal>
      </BrowserRouter>
    );
  }
}

export default connect((state) => ({
  modalStatus: state.modalStatus,
  credentials: state.user.credentials || { maLoaiNguoiDung: "" },
}))(App);
