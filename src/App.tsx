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
import {Storetype} from "./components/redux/state";


type PropsType = {
store: Storetype
}

const App = (props: PropsType) => {
    const state = props.store.getState()
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar friendsPage={state.friendsPage}/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile updateNewPostText={props.store.updateNewPostText.bind(props.store)} addPost={props.store.addPost.bind(props.store)} profilePage={state.profilePage}/>}/>
                <Route path='/dialogs' render={() => <Dialogs addMessage={props.store.addMessage.bind(props.store)} dialogsPage={state.dialogsPage} onChangeMessage={props.store.onChangeMessage.bind(props.store)} />}/>
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
