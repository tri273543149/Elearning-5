import React from "react";
import "./index.css";
import UserImg from "./user.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Swal from "sweetalert2";
import { signupUserSchema } from "../../store/services/user";
import { userService } from "../../store/services";
import { connect } from "react-redux";
import { createAction } from "../../store/actions";
import { IS_MODAL_CLOSE, IS_MODAL_OPEN } from "../../store/constants/modal";

const SignUp = ({ dispatch }) => {
  const handleOnSubmit = (values) => {
    userService
      .dangKy(values)
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(createAction(IS_MODAL_OPEN, "SignIn"));
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Username or Email exist",
        });
      });
  };
  return (
    <div className="sign_up">
      <div className="item item_first">
        <Formik
          initialValues={{
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            soDT: "",
            maNhom: "GP01",
            email: "",
          }}
          validationSchema={signupUserSchema}
          onSubmit={handleOnSubmit}
        >
          {({ handleChange }) => (
            <Form>
              <div className="form-group">
                <div className="form_content">
                  <span className="label_name">Username</span>
                  <ErrorMessage name="taiKhoan">
                    {(msg) => <span className="text-danger">{msg}</span>}
                  </ErrorMessage>
                </div>
                <Field
                  className="form-control"
                  type="text"
                  name="taiKhoan"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <div className="form_content">
                  <span className="label_name">Password</span>
                  <ErrorMessage name="matKhau">
                    {(msg) => <span className="text-danger">{msg}</span>}
                  </ErrorMessage>
                </div>
                <Field
                  className="form-control"
                  type="password"
                  name="matKhau"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <div className="form_content">
                  <span className="label_name">Fullname</span>
                  <ErrorMessage name="hoTen">
                    {(msg) => <span className="text-danger">{msg}</span>}
                  </ErrorMessage>
                </div>
                <Field
                  className="form-control"
                  type="text"
                  name="hoTen"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <div className="form_content">
                  <span className="label_name">Email</span>
                  <ErrorMessage name="email">
                    {(msg) => <span className="text-danger">{msg}</span>}
                  </ErrorMessage>
                </div>
                <Field
                  className="form-control"
                  type="text"
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <div className="form_content">
                  <span className="label_name">Phone number</span>
                  <ErrorMessage name="soDT">
                    {(msg) => <span className="text-danger">{msg}</span>}
                  </ErrorMessage>
                </div>
                <Field
                  className="form-control"
                  type="text"
                  name="soDT"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <div className="form_content">
                  <span className="label_name">Group</span>
                  <ErrorMessage name="maNhom">
                    {(msg) => <span className="text-danger">{msg}</span>}
                  </ErrorMessage>
                </div>
                <Field
                  component="select"
                  className="form-control"
                  name="maNhom"
                  onChange={handleChange}
                >
                  <option value="GP01">Group 1</option>
                  <option value="GP02">Group 2</option>
                  <option value="GP03">Group 3</option>
                  <option value="GP04">Group 4</option>
                  <option value="GP05">Group 5</option>
                </Field>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-success">
                  SEND
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className="item item_second">
        <p className="title">SIGN UP</p>
        <p className="body">STUDY is much better when you have an account!</p>
        <div className="img_content">
          <img src={UserImg} alt="/" />
        </div>
        <p className="sub_body">Or you can register with:</p>
        <button className="btn btn-primary w-100 mb-2">FACEBOOK</button>
        <button className="btn btn-warning w-100">GOOGLE</button>
        <div className="mt-5 text-right">
          <hr />
          <button
            className="btn btn-success mr-2"
            onClick={() => dispatch(createAction(IS_MODAL_OPEN, "SignIn"))}
          >
            SIGN IN
          </button>
          <button
            className="btn btn-danger"
            onClick={() => dispatch(createAction(IS_MODAL_CLOSE))}
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect()(SignUp);
