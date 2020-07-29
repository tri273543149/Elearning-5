import React from "react";
import "./index.css";

const Slider = () => {
  return (
    <section className="slider">
      <div className="content_background">
        <div className="content_box">
          <p className="title">Last day to save!</p>
          <p className="body">
            Don’t miss out on special savings — courses start at just $12.99
          </p>
          <input type="text" placeholder="What do you want to learn?" />
        </div>
      </div>
    </section>
  );
};

export default Slider;