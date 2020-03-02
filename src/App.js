import React from 'react';
import Route from "react-router-dom/es/Route";

import './App.css';

import Login from "./components/Login/Login";
import Navbar from './components/Nav/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Preloader from "./components/common/Prealoader/Preloader";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from "./components/Users/UsersContainer";

import {connect} from "react-redux";
import {initializeApp} from "./redux/Reducers/app-reducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";



class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {

    if (!this.props.initialized) {
      return <Preloader/>
    }

    return (

      <div className='app-wrapper'>
        <HeaderContainer/>
        <Navbar/>
        <div className='app-wrapper__content'>

          <Route path="/dialogs"
                 render={() => <DialogsContainer/>}/>

          <Route path="/profile/:userId?"
                 render={() => <ProfileContainer/>}/>

          <Route path="/users"
                 render={() => <UsersContainer/>}/>

          <Route path="/login" render={() => <Login/>}/>
          <Route path="/news" render={() => <News/>}/>
          <Route path="/music" render={() => <Music/>}/>
          <Route path="/settings" render={() => <Settings/>}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}),
)
(App);

