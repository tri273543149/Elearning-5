import React, { Component } from "react";
import "./index.css";
import { connect } from "react-redux";
import { fetchCourseDetail } from "../../store/actions/course";
import { createAction } from "../../store/actions";
import { ADD_TO_CART } from "../../store/constants/cart";

class CourseDetail extends Component {
  handleOnAddToCart = (course) => {
    this.props.dispatch(createAction(ADD_TO_CART, course));
  };
  handleOnByNow = (course) => {
    this.props.dispatch(createAction(ADD_TO_CART, course));
    this.props.history.push("/shopping-cart");
  };
  componentDidMount() {
    this.props.dispatch(fetchCourseDetail(this.props.match.params.courseId));
  }
  render() {
    let {
      tenKhoaHoc,
      hinhAnh,
      moTa,
      ngayTao,
      nguoiTao,
    } = this.props.courseDetail;
    return (
      <section className="course_detail">
        <div className="item_fixed">
          <img src={hinhAnh} alt="/" />
          <div className="content_box">
            <p className="course_price">
              <span>$12.99</span>
              <span className="line_through">$99.99</span>
              <span className="sale_off">86% off</span>
            </p>
            <button
              className="btn btn-danger w-100"
              onClick={() => this.handleOnAddToCart(this.props.courseDetail)}
            >
              Add to cart
            </button>
            <button
              className="btn btn-outline-primary w-100"
              onClick={() => this.handleOnByNow(this.props.courseDetail)}
            >
              Buy now
            </button>
            <button className="btn btn-outline-success w-100">
              PREVIEW THIS COURSE
            </button>
            <p className="guarantee">30-Day Money-Back Guarantee</p>
          </div>
        </div>
        <div className="top_content">
          <div className="container">
            <div className="row m-0">
              <div className="col-8">
                <p className="course_name">{tenKhoaHoc}</p>
                <p className="course_mota">{moTa}</p>
                <p className="course_rating">
                  <span className="badge badge-warning">Highest Rated</span>
                  <span className="rating_number">4.9</span>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half-alt"></i>
                  <span className="rating_figure">(10.435 ratings)</span>
                  <span className="rating_students">(60.654 students)</span>
                </p>
                <p className="course_author">
                  Created by{" "}
                  <span className="author_name">{nguoiTao.hoTen}</span>
                </p>
                <p className="course_date">
                  <i className="fa fa-hourglass-start"></i>
                  Last updated{" "}
                  <span className="course_created_date">{ngayTao}</span>
                </p>
                <div className="button_content">
                  <button className="btn btn-outline-light">
                    Wishlist<i className="fa fa-heart"></i>
                  </button>
                  <button className="btn btn-outline-light">
                    Share<i className="fa fa-share"></i>
                  </button>
                  <button className="btn btn-outline-light">
                    Gift this course<i className="fa fa-gift"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mid_content">
          <div className="container">
            <div className="row m-0">
              <div className="col-8">
                <div className="content_box">
                  <p className="title">What you'll learn</p>
                  <div className="d-flex">
                    <div>
                      <p className="body">
                        <i className="fa fa-check"></i>
                        Create and use Groups
                      </p>
                      <p className="body">
                        <i className="fa fa-check"></i>
                        Create and use Static Sets
                      </p>
                      <p className="body">
                        <i className="fa fa-check"></i>
                        Control Reference Lines with Parameters
                      </p>
                      <p className="body">
                        <i className="fa fa-check"></i>
                        Create highly interactive Dashboards
                      </p>
                      <p className="body">
                        <i className="fa fa-check"></i>
                        Understand the difference between Groups and Sets
                      </p>
                    </div>
                    <div>
                      <p className="body">
                        <i className="fa fa-check"></i>
                        Use multiple fields in the colour property
                      </p>
                      <p className="body">
                        <i className="fa fa-check"></i>
                        Use Sets as filters
                      </p>
                      <p className="body">
                        <i className="fa fa-check"></i>
                        Combine Sets into more Sets
                      </p>
                    </div>
                  </div>
                  <p className="text-primary mt-3">Watch more...</p>
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
  courseDetail: state.course.courseDetail || {
    maKhoaHoc: "",
    tenKhoaHoc: "",
    hinhAnh: "",
    moTa: "",
    danhMucKhoaHoc: { tenDanhMucKhoaHoc: "" },
    ngayTao: "",
    nguoiTao: { taiKhoan: "", hoTen: "" },
    luotXem: "",
  },
  credentials: state.credentials || { taiKhoan: "" },
}))(CourseDetail);
