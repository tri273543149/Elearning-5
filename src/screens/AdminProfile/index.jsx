import React, { Component } from "react";
import "./index.css";
import { connect } from "react-redux";
import { logout } from "../../store/actions/user";
import AdminCourses from "../../layouts/AdminCourses";
import AdminUsers from "../../layouts/AdminUsers";

class AdminProfile extends Component {
  handleOnLogOut = () => {
    this.props.dispatch(logout());
    this.props.history.push("/");
  };
  render() {
    return (
      <section className="admin_profile">
        <div className="top_content">
          <div className="container content_box">
            <p className="title">My profile</p>
            <p className="log_out" onClick={this.handleOnLogOut}>
              <i className="fa fa-power-off mr-2"></i>
              Log out
            </p>
          </div>
        </div>
        <div className="mid_content">
          <AdminCourses />
          <AdminUsers />
        </div>
      </section>
    );
  }
}

export default connect()(AdminProfile);
