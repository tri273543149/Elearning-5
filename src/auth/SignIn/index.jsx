import React from "react";
import "./index.css";
import { Formik, Form, Field } from "formik";
import { connect } from "react-redux";
import { login } from "../../store/actions/user";
import { createAction } from "../../store/actions";
import { IS_MODAL_CLOSE, IS_MODAL_OPEN } from "../../store/constants/modal";

const SignIn = ({ dispatch }) => {
  const handleOnSubmit = (values) => {
    dispatch(login(values));
  };
  return (
    <div className="sign_in">
      <div className="item item_first">
        <p className="title">
          <i className="fa fa-globe-asia mr-2"></i>STUDY
        </p>
        <p className="body">
          Protect your account in just a few minutes by reviewing your security
          setting and activity
        </p>
        <Formik
          initialValues={{
            taiKhoan: "",
            matKhau: "",
          }}
          onSubmit={handleOnSubmit}
        >
          {({ handleChange }) => (
            <Form>
              <div className="form-group">
                <Field
                  className="form-control"
                  placeholder="USERNAME"
                  type="text"
                  name="taiKhoan"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <Field
                  className="form-control"
                  placeholder="PASSWORD"
                  type="password"
                  name="matKhau"
                  onChange={handleChange}
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-light">
                  SEND
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <p className="sub_title">Forgot Password?</p>
        <p className="sub_body">Or you can login with:</p>
        <button className="btn btn-primary w-100 mb-1">FACEBOOK</button>
        <button className="btn btn-warning w-100">GOOGLE</button>
        <div className="mt-5 text-right">
          <hr />
          <button
            className="btn btn-outline-light mr-1"
            onClick={() => dispatch(createAction(IS_MODAL_OPEN, "SignUp"))}
          >
            SIGN UP
          </button>
          <button className="btn btn-danger" onClick={() => dispatch(createAction(IS_MODAL_CLOSE))}>
            CLOSE
          </button>
        </div>
      </div>
      <div className="item item_second">
        <div className="content_box">
          <div className="content_item">
            <p className="title">Studied better.</p>
            <p className="title">Succeed together.</p>
            <p className="body">
              Get meaningful results with essential tools brainstorming, goal
              setting and accountability
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect()(SignIn);
