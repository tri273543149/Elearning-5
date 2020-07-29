import React, { Component } from "react";
import "./index.css";
import { connect } from "react-redux";
import { fetchUserListPagination, fetchUsers } from "../../store/actions/user";
import PaginatedUsers from "./PaginatedUsers";
import UserItem from "./UserItem";

class AdminUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listStatus: true,
      page: 1,
      keySearch: "",
    };
  }
  handleOnChangeListStatus = (listStatus) => {
    this.setState({
      listStatus,
    });
  };
  handleOnChangePage = (page) => {
    this.setState({
      page,
    });
  };
  renderListPagination = () => {
    let { items } = this.props;
    return items.map((user, key) => (
      <div className="col-12 col-md-4" key={key}>
        <UserItem user={user} index={key + 1} />
      </div>
    ));
  };
  renderListAll = () => {
    let { users } = this.props;
    return users.map((user, key) => (
      <div className="col-12 col-md-4" key={key}>
        <UserItem user={user} index={key + 1} />
      </div>
    ));
  };
  componentDidMount() {
    let { page } = this.state;
    this.props.dispatch(fetchUserListPagination("", page));
    this.props.dispatch(fetchUsers(""));
  }
  componentDidUpdate(prevProps, prevState) {
    let { page, listStatus } = this.state;
    if (listStatus === false) {
      if (prevState.page !== this.state.page) {
        prevProps.dispatch(fetchUserListPagination("", page));
      }
    }
  }

  render() {
    let { totalPages } = this.props;
    let { listStatus } = this.state;
    return (
      <section className="admin_users">
        <div className="control_content">
          <p className="title">Users</p>
          <input type="text" placeholder="User name..." />
          <div className="icon_content">
            <i
              className={
                listStatus
                  ? "fa fa-align-justify mr-3 active"
                  : "fa fa-align-justify mr-3"
              }
              onClick={() => this.handleOnChangeListStatus(true)}
            ></i>
            <i
              className={listStatus ? "fa fa-th mr-3" : "fa fa-th mr-3 active"}
              onClick={() => this.handleOnChangeListStatus(false)}
            ></i>
            <i className="fa fa-user-graduate mr-3"></i>
            <i className="fa fa-chalkboard-teacher"></i>
          </div>
          <button className="btn btn-success">ADD NEW USER</button>
        </div>
        <div className="container_fluid">
          <div className="row">
            {!listStatus ? this.renderListPagination() : this.renderListAll()}
            {!listStatus ? (
              <div className="col-12">
                <PaginatedUsers
                  totalPages={totalPages}
                  handleOnChangePage={this.handleOnChangePage}
                />
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </section>
    );
  }
}
export default connect((state) => ({
  users: state.user.users || [],
  items: state.paginatedUsers.items || [],
  totalPages: state.paginatedUsers.totalPages || null,
}))(AdminUsers);
