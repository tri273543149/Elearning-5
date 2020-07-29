import React from "react";
import { withFormik, connect } from "formik";
import { useDispatch, useStore } from "react-redux";

const MyForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        name="name"
      />
      {errors.name && touched.name && <div id="feedback">{errors.name}</div>}
      <button type="submit">Submit</button>
    </form>
  );
};

const MyEnhancedForm = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({ name: "" }),

  // Custom sync validation
  validate: (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Required";
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: "BasicForm",
})(MyForm);

export default connect()(MyEnhancedForm)
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
setValues(payload);
console.log(values);
setSubmitting(false);