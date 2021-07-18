import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import Profile from "./components/Profile/Profile";
import Friends from "./components/Friends/Friends";
import Music from "./components/Music/Music";
import {Route} from "react-router-dom"
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Users from "./components/Users/Users";
import Dialogs from "./components/Dialogs/Dialogs";

import {
    addMessage,
    addMessageType,
    addPostType,
    onChangeMessage, onChangeMessageType,
    stateType,
    updateNewPostTextType
} from "./components/redux/state";

type PropsType = {
    state: stateType,
    addPost: addPostType,
    addMessage: addMessageType,
    updateNewPostText: updateNewPostTextType,
    onChangeMessage: onChangeMessageType
}

const App = (props: PropsType) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar friendsPage={props.state.friendsPage}/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile updateNewPostText={props.updateNewPostText} addPost={props.addPost} profilePage={props.state.profilePage}/>}/>
                <Route path='/dialogs' render={() => <Dialogs addMessage={props.addMessage} dialogsPage={props.state.dialogsPage} onChangeMessage={onChangeMessage} />}/>
                <Route path='/users' render={() => <Users/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/friends' render={() => <Friends/>}/>
            </div>
        </div>
    )
}

export default App;
