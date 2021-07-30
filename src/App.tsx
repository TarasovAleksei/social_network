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
import {AppStoreType} from "./components/redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


type PropsType = {
    store: AppStoreType
}

const App = (props: PropsType) => {
    const state = props.store.getState()
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar friendsPage={state.friendsPage}/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer />}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/friends' render={() => <Friends/>}/>
            </div>
        </div>
    )
}

export default App;
