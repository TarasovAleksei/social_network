import React, {useEffect} from 'react';
import './App.css';
import NavBar from "./components/Navbar/NavBar";
import Friends from "./components/Friends/Friends";
import Music from "./components/Music/Music";
import {Redirect, Route, useParams} from "react-router-dom"
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {AppStateType} from "./components/redux/redux-store";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "./components/redux/authReducer";
import {initializeApp, InitialStateType} from "./components/redux/appReducer";
import {Preloader} from "./components/common/preloader/Preloader";


type PropsType = {
    store: AppStateType
}

const App = (props: PropsType) => {
    const {initialized} = useSelector<AppStateType, InitialStateType>(state => state.app)
    console.log(initialized)
    const friendsPage = props.store.friendsPage
    const dispatch = useDispatch()
    const logoutCB = () => {
        dispatch(logOut())
    }
    useEffect(() => {
        dispatch(initializeApp())
    }, [dispatch])

    if (!initialized) return <Preloader/>
    return (
        <div className='app-wrapper'>
            <HeaderContainer
                logoutCB={logoutCB}
            />
            <NavBar friendsPage={friendsPage}/>
            <div className='app-wrapper-content'>
                {/*<Route exact path="/" render={() => <ProfileContainer/>} />*/}
                <Route path='/profile/:userID?' render={() => <ProfileContainer/>}/>
                <Route path='/dialogs/' render={() => <DialogsContainer/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/friends' render={() => <Friends/>}/>
                <Route path='/login' render={() => <Login/>}/>
            </div>
        </div>
    )
}

export default App;
