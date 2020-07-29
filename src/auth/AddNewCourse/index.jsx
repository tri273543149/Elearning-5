import React from "react";
import "./index.css";
import { connect } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { createCourseSchema } from "../../store/services/course";
import { createAction } from "../../store/actions";
import { IS_MODAL_CLOSE } from "../../store/constants/modal";
import { addNewCourse } from "../../store/actions/course";

const AddNewCourse = ({ dispatch, credentials, courseDetail }) => {
  return (
    <section className="add_new_course">
      <div className="content_box">
        <p className="title">ADD NEW COURSE</p>
        <div className="form_container">
          <Formik
            initialValues={{
              maKhoaHoc: "",
              biDanh: "",
              tenKhoaHoc: "",
              moTa: "",
              luotXem: 0,
              danhGia: 0,
              maNhom: "GP08",
              ngayTao: "",
              maDanhMucKhoaHoc: "BackEnd",
              taiKhoanNguoiTao: credentials.taiKhoan,
            }}
            enableReinitialize={true}
            // validationSchema={createCourseSchema}
            onSubmit={(values, actions) => {
              const payload = {
                ...values,
                maKhoaHoc: courseDetail.maKhoaHoc,
                biDanh: courseDetail.biDanh,
                tenKhoaHoc: courseDetail.tenKhoaHoc,
                moTa: courseDetail.moTa,
                luotXem: courseDetail.luotXem,
                danhGia: courseDetail.danhGia,
                ngayTao: courseDetail.ngayTao,
                maDanhMucKhoaHoc: courseDetail.danhMucKhoaHoc.maDanhMucKhoahoc,
              };
              actions.setValues(payload);
              actions.setSubmitting(true);
            }}
          >
            {({ handleChange, values }) => (
              <Form>
                <div className="grid_content">
                  <div className="item">
                    <div className="form-group">
                      <div className="form_content">
                        <span className="label_name">Course ID</span>
                        <ErrorMessage name="maKhoaHoc">
                          {(msg) => <span className="text-danger">{msg}</span>}
                        </ErrorMessage>
                      </div>
                      <Field
                        className="form-control"
                        type="text"
                        name="maKhoaHoc"
                        onChange={handleChange}
                        value={values.maKhoaHoc}
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="form-group">
                      <div className="form_content">
                        <span className="label_name">Alias</span>
                        <ErrorMessage name="biDanh">
                          {(msg) => <span className="text-danger">{msg}</span>}
                        </ErrorMessage>
                      </div>
                      <Field
                        className="form-control"
                        type="text"
                        name="biDanh"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="form-group">
                      <div className="form_content">
                        <span className="label_name">Course name</span>
                        <ErrorMessage name="tenKhoaHoc">
                          {(msg) => <span className="text-danger">{msg}</span>}
                        </ErrorMessage>
                      </div>
                      <Field
                        className="form-control"
                        type="text"
                        name="tenKhoaHoc"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="form-group">
                      <div className="form_content">
                        <span className="label_name">Description</span>
                        <ErrorMessage name="moTa">
                          {(msg) => <span className="text-danger">{msg}</span>}
                        </ErrorMessage>
                      </div>
                      <Field
                        className="form-control"
                        type="text"
                        name="moTa"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="form-group">
                      <div className="form_content">
                        <span className="label_name">Views</span>
                        <ErrorMessage name="luotXem">
                          {(msg) => <span className="text-danger">{msg}</span>}
                        </ErrorMessage>
                      </div>
                      <Field
                        className="form-control"
                        type="number"
                        name="luotXem"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="form-group">
                      <div className="form_content">
                        <span className="label_name">Rating</span>
                        <ErrorMessage name="danhGia">
                          {(msg) => <span className="text-danger">{msg}</span>}
                        </ErrorMessage>
                      </div>
                      <Field
                        className="form-control"
                        type="number"
                        name="danhGia"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="form-group">
                      <div className="form_content">
                        <span className="label_name">Course Image</span>
                        <ErrorMessage name="hinhAnh">
                          {(msg) => <span className="text-danger">{msg}</span>}
                        </ErrorMessage>
                      </div>
                      <Field
                        className="form-control"
                        type="file"
                        name="hinhAnh"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="form-group">
                      <div className="form_content">
                        <span className="label_name">Creating Date</span>
                        <ErrorMessage name="ngayTao">
                          {(msg) => <span className="text-danger">{msg}</span>}
                        </ErrorMessage>
                      </div>
                      <Field
                        className="form-control"
                        type="text"
                        name="ngayTao"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="item">
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
                        <option value="GP06">Group 6</option>
                        <option value="GP07">Group 7</option>
                        <option value="GP08">Group 8</option>
                      </Field>
                    </div>
                  </div>
                  <div className="item">
                    <div className="form-group">
                      <div className="form_content">
                        <span className="label_name">Category</span>
                        <ErrorMessage name="maDanhMucKhoaHoc">
                          {(msg) => <span className="text-danger">{msg}</span>}
                        </ErrorMessage>
                      </div>
                      <Field
                        component="select"
                        className="form-control"
                        name="maDanhMucKhoaHoc"
                        onChange={handleChange}
                      >
                        <option value="BackEnd">Backend</option>
                        <option value="Design">Design</option>
                        <option value="DiDong">Mobile</option>
                        <option value="FrontEnd">Frontend</option>
                        <option value="FullStack">Fullstack</option>
                        <option value="TuDuy">Mentality</option>
                      </Field>
                    </div>
                  </div>
                </div>
                <div className="btn_style">
                  <button type="submit" className="btn btn-success mr-2">
                    Add new course
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => dispatch(createAction(IS_MODAL_CLOSE))}
                  >
                    Close
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default connect((state) => ({
  credentials: state.user.credentials || {
    taiKhoan: "",
  },
  courseDetail: state.course.courseDetail || {
    maKhoaHoc: "",
    biDanh: "",
    tenKhoaHoc: "",
    moTa: "",
    luotXem: 0,
    danhGia: 0,
    maNhom: "",
    ngayTao: "",
    danhMucKhoaHoc: { maDanhMucKhoahoc: "" },
  },
}))(AddNewCourse);
