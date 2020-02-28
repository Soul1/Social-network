import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUser} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId ? this.props.match.params.userId : 6129;
    this.props.getUser(userId)
  }

  render() {

    return <Profile {...this.props} profile={this.props.profile}/>
  }


}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUser})(WithUrlDataContainerComponent);