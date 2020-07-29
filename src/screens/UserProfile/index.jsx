import React, { Component } from "react";
import "./index.css";
import { connect } from "react-redux";
import UserImage from "./user.png";
import { logout } from "../../store/actions/user";

class UserProfile extends Component {
  handleOnLogOut = () => {
    this.props.dispatch(logout());
    this.props.history.push("/");
  };
  render() {
    let { hoTen, email, soDT } = this.props.credentials;
    return (
      <section className="user_profile">
        <div className="top_content">
          <div className="container">
            <p className="title">My profile</p>
          </div>
        </div>
        <div className="mid_content">
          <div className="container">
            <div className="row m-0">
              <div className="col-12 col-md-3">
                <div className="content_box">
                  <div className="img_content">
                    <div className="hover_lay">
                      <i className="fa fa-camera"></i>
                    </div>
                    <img src={UserImage} alt="/" />
                  </div>
                  <div className="text-center">
                    <p className="user_name">{hoTen}</p>
                    <p className="user_job">Developer</p>
                  </div>
                  <div className="text_content">
                    <p>
                      <i className="fa fa-envelope"></i>
                      {email}
                    </p>
                    <p>
                      <i className="fa fa-mobile-alt"></i>
                      {soDT}
                    </p>
                    <p>
                      <i className="fa fa-cog"></i>
                      Edit profile
                    </p>
                    <p onClick={this.handleOnLogOut}>
                      <i className="fa fa-power-off"></i>
                      Log out
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default connect((state) => ({
  credentials: state.user.credentials,
}))(UserProfile);
