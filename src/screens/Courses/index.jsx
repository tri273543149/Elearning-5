import React, { Component } from "react";
import "./index.css";
import { connect } from "react-redux";
import { fetchCoursesList } from "../../store/actions/course";
import { filterAction } from "../../store/actions";
import { FILTER } from "../../store/constants/filter";
import RenderFirstStyle from "./RenderFirstStyle";
import RenderSecondStyle from "./RenderSecondStyle";

class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listStatus: true,
      keySearch: "",
      category: "All",
    };
  }
  handleOnChangeListStatus = (listStatus) => {
    this.setState({
      listStatus,
    });
  };
  onSearch = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        this.props.dispatch(
          filterAction(FILTER, "search", this.state.keySearch)
        );
      }
    );
  };
  onFilterCategory = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        this.props.dispatch(
          filterAction(FILTER, "category", this.state.category)
        );
      }
    );
  };
  componentDidMount() {
    this.props.dispatch(fetchCoursesList());
  }
  renderFirstStyle = () => {
    let { courses, filter } = this.props;
    let temptArr = [];
    switch (filter.filterType) {
      case "search":
        temptArr = courses.filter((course) => {
          return (
            course.tenKhoaHoc
              .trim()
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .replace(/đ/g, "d")
              .replace(/Đ/g, "D")
              .indexOf(
                filter.filterValue
                  .trim()
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .replace(/đ/g, "d")
                  .replace(/Đ/g, "D")
              ) !== -1
          );
        });
        break;
      case "category":
        if (filter.filterValue === "All") {
          temptArr = [...courses];
        } else {
          for (let course of courses) {
            if (course.danhMucKhoaHoc.maDanhMucKhoahoc === filter.filterValue) {
              temptArr = [...temptArr, course];
            }
          }
        }
        break;
      default:
        temptArr = courses;
        break;
    }
    return temptArr.map((course, key) => (
      <div className="col-12 col-md-3 mb-3" key={key}>
        <RenderFirstStyle course={course} />
      </div>
    ));
  };
  renderSecondStyle = () => {
    let { courses, filter } = this.props;
    let temptArr = [];
    switch (filter.filterType) {
      case "search":
        temptArr = courses.filter((course) => {
          return (
            course.tenKhoaHoc
              .trim()
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .replace(/đ/g, "d")
              .replace(/Đ/g, "D")
              .indexOf(
                filter.filterValue
                  .trim()
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .replace(/đ/g, "d")
                  .replace(/Đ/g, "D")
              ) !== -1
          );
        });
        break;
      case "category":
        if (filter.filterValue === "All") {
          temptArr = [...courses];
        } else {
          for (let course of courses) {
            if (course.danhMucKhoaHoc.maDanhMucKhoahoc === filter.filterValue) {
              temptArr = [...temptArr, course];
            }
          }
        }
        break;
      default:
        temptArr = courses;
        break;
    }
    return temptArr.map((course, key) => (
      <div className="col-12 col-md-6 mb-3" key={key}>
        <RenderSecondStyle course={course} />
      </div>
    ));
  };
  render() {
    return (
      <section className="courses">
        <div className="top_content">
          <div className="container">
            <div className="content_box">
              <p className="title">Courses</p>
              <input
                type="text"
                placeholder="What do you want to learn?"
                name="keySearch"
                onChange={this.onSearch}
              />
              <select name="category" onClick={this.onFilterCategory}>
                <option value="All">Category</option>
                <option value="BackEnd">BackEnd</option>
                <option value="Design">Design</option>
                <option value="DiDong">Mobile</option>
                <option value="FrontEnd">FrontEnd</option>
                <option value="FullStack">FullStack</option>
                <option value="TuDuy">Mentality</option>
              </select>
              <div className="control_icons">
                <i
                  className={
                    this.state.listStatus ? "fa fa-th active" : "fa fa-th"
                  }
                  onClick={() => this.handleOnChangeListStatus(true)}
                ></i>
                <i
                  className={
                    !this.state.listStatus ? "fa fa-list active" : "fa fa-list"
                  }
                  onClick={() => this.handleOnChangeListStatus(false)}
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div className="mid_content">
          <div className="container">
            <div className="row m-0">
              {this.state.listStatus
                ? this.renderFirstStyle()
                : this.renderSecondStyle()}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default connect((state) => ({
  courses: state.course.courses,
  filter: state.filter || {},
}))(Courses);
