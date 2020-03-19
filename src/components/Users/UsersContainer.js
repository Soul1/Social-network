import React from "react";
import {connect} from "react-redux";
import {
  follow,
  setCurrentPage,
  unfollow,
  toggleFollowingProgress,
  requestUsers,
} from "../../redux/Reducers/users-reducer";
import Users from "./Users";
import Preloader from "../common/Prealoader/Preloader";
import {compose} from "redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount, getUsers
} from "../../redux/Selectors/user-selectors";

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNum) => {
    this.props.requestUsers(pageNum, this.props.pageSize)
    this.props.setCurrentPage(pageNum)
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader/> : null}

      <Users totalItemsCount={this.props.totalItemsCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             onPageChanged={this.onPageChanged}
             users={this.props.users}
             follow={this.props.follow}
             unfollow={this.props.unfollow}
             followingInProgress={this.props.followingInProgress}
      />

    </>
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalItemsCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  }
}



export default compose(
  connect(mapStateToProps,
    {
      follow, unfollow, setCurrentPage,
      toggleFollowingProgress, requestUsers,})
)(UsersContainer)
