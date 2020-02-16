import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Nav/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Route from "react-router-dom/es/Route";




const App = (props) => {

  return (

    <div className='app-wrapper'>
      <Header />
      <Navbar state={props.state.navBarPage}/>
      <div className='app-wrapper__content'>

        <Route path="/dialogs" render={ () =>
            <Dialogs state={props.state.dialogsPage} />}/>

        <Route path="/profile" render={ () =>
            <Profile profilePage={props.state.profilePage}
                     updateNewPostText={props.updateNewPostText}
                     addPost={props.addPost}/>}/>

        <Route path="/news" render={ () => <News />}/>
        <Route path="/music" render={ () => <Music />}/>
        <Route path="/settings" render={ () => <Settings />}/>
        </div>
    </div>
  );
}


export default App;
