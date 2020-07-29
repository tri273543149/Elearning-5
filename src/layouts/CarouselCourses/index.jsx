import React, { Component } from "react";
import "./index.css";
import { connect } from "react-redux";
import { fetchCoursesList } from "../../store/actions/course";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";

// import components
import CourseItem from "./CourseItem";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

class CarouselCourses extends Component {
  renderCourseItem = () => {
    return this.props.courses.map((course, key) => (
      <SwiperSlide key={key}>
        <CourseItem course={course} />
      </SwiperSlide>
    ));
  };
  componentDidMount() {
    this.props.dispatch(fetchCoursesList());
  }
  render() {
    return (
      <section className="carousel_courses">
        <p className="title">Popular Learning Courses</p>
        <p className="body">
          Learn the most relevant skills with business, creative, and tech
          courses - dozens of courses added each week.
        </p>
        <Swiper
          autoplay={{ delay: 5000 }}
          loop={true}
          spaceBetween={50}
          slidesPerView={5}
          pagination={{ el: "none" }}
        >
          {this.renderCourseItem()}
        </Swiper>
      </section>
    );
  }
}
export default connect((state) => ({
  courses: state.course.courses,
}))(CarouselCourses);
