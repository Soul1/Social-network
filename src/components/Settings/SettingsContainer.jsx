import React from 'react';
import {connect} from "react-redux";
import Settings from "./Settings";
import {savePhoto} from "../../redux/Reducers/profile-reducer";


class SettingsContainer extends React.Component {
  render() {
    return <Settings
      // isOwner={!!this.props.userId}
      savePhoto={this.props.savePhoto}/>
  }
}

const mapStateToProps = (state) => {
  // userId: state.auth.id
};

export default connect(mapStateToProps, {savePhoto})(SettingsContainer);