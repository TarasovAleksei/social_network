import React, {lazy, Suspense, useEffect} from 'react';
import './App.css';
import NavBar from "./components/Navbar/NavBar";
import Friends from "./components/Friends/Friends";
import Music from "./components/Music/Music";
import {BrowserRouter, HashRouter, Route} from "react-router-dom"
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
// import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import store, {AppStateType} from "./components/redux/redux-store";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import {Provider, useDispatch, useSelector} from "react-redux";
import {logOut} from "./components/redux/authReducer";
import {initializeApp, InitialStateType} from "./components/redux/appReducer";
import {Preloader} from "./components/common/preloader/Preloader";

const DialogsContainer = lazy(() =>
    import('./components/Dialogs/DialogsContainer')
        .then((module) => ({default: module.DialogsContainer})))
// const ProfileContainer = lazy(() =>
//     import('./components/Profile/ProfileContainer')
//         .then((module) => ({default: module.ProfileContainer})))
type PropsType = {
    store: AppStateType
}

export const App = (props: PropsType) => {
    const {initialized} = useSelector<AppStateType, InitialStateType>(state => state.app)
    const friendsPage = props.store.friendsPage
    const dispatch = useDispatch()
    const logoutCB = () => {
        dispatch(logOut())
    }
    useEffect(() => {
        dispatch(initializeApp())
    }, [dispatch])

    // if (!initialized) return <Preloader/>
    return (
        <div className='app-wrapper'>
            <HeaderContainer
                logoutCB={logoutCB}
            />
            <NavBar friendsPage={friendsPage}/>
            <div className='app-wrapper-content'>
                <Route path='/profile/:userID?' render={() => <ProfileContainer/>}/>
                <Route path='/dialogs/' render={() => {
                    return <Suspense fallback={<div>...loading</div>}>
                        <DialogsContainer/>
                    </Suspense>
                }}/>
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
export const MainApp = () => {
    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <App store={store.getState()}/>
            </Provider>
        </HashRouter>
    )
}


