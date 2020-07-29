import React, { Component } from "react";
import "./index.css";
import { connect } from "react-redux";
import { fetchCoursesList } from "../../store/actions/course";
import { createAction } from "../../store/actions";
import { IS_MODAL_OPEN } from "../../store/constants/modal";
import { FETCH_COURSE_DETAIL } from "../../store/constants/course";
import CourseItem from "./CourseItem";

class AdminCourses extends Component {
  handleOnAddNewCourse = () => {
    this.props.dispatch(createAction(FETCH_COURSE_DETAIL, {}));
    this.props.dispatch(createAction(IS_MODAL_OPEN, "AddNewCourse"));
  };
  renderCourseItem = () => {
    return this.props.courses.map((course, key) => (
      <div className="col-12 col-md-4" key={key}>
        <CourseItem course={course} index={key + 1} />
      </div>
    ));
  };
  componentDidMount() {
    this.props.dispatch(fetchCoursesList());
  }

  render() {
    return (
      <div className="admin_courses">
        <div className="control_content">
          <p className="title">Courses</p>
          <input type="text" placeholder="Course name..." />
          <select name="category">
            <option value="All">Category</option>
            <option value="BackEnd">BackEnd</option>
            <option value="Design">Design</option>
            <option value="DiDong">Mobile</option>
            <option value="FrontEnd">FrontEnd</option>
            <option value="FullStack">FullStack</option>
            <option value="TuDuy">Mentality</option>
          </select>
          <button
            className="btn btn-success"
            onClick={this.handleOnAddNewCourse}
          >
            ADD NEW COURSE
          </button>
        </div>
        <div className="container-fluid">
          <div className="row m-0">{this.renderCourseItem()}</div>
        </div>
      </div>
    );
  }
}

export default connect((state) => ({
  courses: state.course.courses,
}))(AdminCourses);
