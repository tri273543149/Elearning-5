import React, { Component } from "react";

class TabName extends Component {
  handleOnChangeMaDanhMuc = (maDanhMuc, tab) => {
    this.props.onChangeMaDanhMuc(maDanhMuc, tab);
  };
  render() {
    let { maDanhMuc } = this.props.category;
    let { index, activeIndex } = this.props;
    let tenDanhMuc = "";
    switch (maDanhMuc) {
      case "BackEnd":
        tenDanhMuc = "Backend";
        break;
      case "Design":
        tenDanhMuc = "Design";
        break;
      case "DiDong":
        tenDanhMuc = "Mobile";
        break;
      case "FrontEnd":
        tenDanhMuc = "Frontend";
        break;
      case "FullStack":
        tenDanhMuc = "Fullstack";
        break;
      case "TuDuy":
        tenDanhMuc = "Mentality";
        break;
      default:
        break;
    }
    return (
      <li onClick={() => this.handleOnChangeMaDanhMuc(maDanhMuc, index)}>
        <span className={activeIndex === index ? "nav_a active" : "nav_a"}>
          {tenDanhMuc}
        </span>
      </li>
    );
  }
}

export default TabName;
