import React, { Component } from "react";
import "./index.css";
import { connect } from "react-redux";
import {
  fetchCategories,
  fetCourseOnCategory,
} from "../../store/actions/course";
import TabName from "./TabName";
import CourseItem from "./CourseItem";

class CategoriedCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maDanhMuc: "Backend",
      activeIndex: 0,
    };
  }
  renderCourseItem = () => {
    return this.props.courseTab.map((course, key) => {
      return (
        <div className="col-2" key={key}>
          <CourseItem course={course} />
        </div>
      );
    });
  };
  onChangeMaDanhMuc = (maDanhMuc, activeIndex) => {
    this.setState({
      maDanhMuc,
      activeIndex,
    });
  };
  componentDidMount() {
    this.props.dispatch(fetchCategories());
    this.props.dispatch(fetCourseOnCategory(this.state.maDanhMuc));
  }
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.maDanhMuc !== this.state.maDanhMuc) {
      prevProps.dispatch(fetCourseOnCategory(this.state.maDanhMuc));
    }
  };

  render() {
    return (
      <section className="categoried_courses">
        <p className="title">Top categories</p>
        <p className="body">
          Learn in-demand skills with over 16,000+ online courses taught by
          real-world professionals.
        </p>
        <nav>
          <ul>
            {this.props.categories.map((category, key) => {
              return (
                <TabName
                  category={category}
                  key={key}
                  index={key}
                  activeIndex={this.state.activeIndex}
                  onChangeMaDanhMuc={this.onChangeMaDanhMuc}
                />
              );
            })}
          </ul>
        </nav>
        <div className="row m-0">{this.renderCourseItem()}</div>
      </section>
    );
  }
}
export default connect((state) => ({
  categories: state.categoriedCourses.categories,
  courseTab: state.categoriedCourses.courseTab,
}))(CategoriedCourses);
