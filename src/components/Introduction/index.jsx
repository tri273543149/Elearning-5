import React from "react";
import "./index.css";

const Introduction = () => {
  return (
    <section className="introduction">
      <div className="content_box">
        <div className="item">
          <i className="fa fa-paper-plane"></i>
          <p className="title">Unlimited Access</p>
          <p className="body">
            Choose what you’d like to learn from our extensive subscription
            library
          </p>
        </div>
        <div className="item">
          <i className="fa fa-user-graduate"></i>
          <p className="title">Expert Instructors</p>
          <p className="body">
            Learn from industry experts who are passionate about teaching
          </p>
        </div>
        <div className="item">
          <i className="fa fa-clock"></i>
          <p className="title">On your schedule</p>
          <p className="body">Switch between your computer or mobile device</p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
