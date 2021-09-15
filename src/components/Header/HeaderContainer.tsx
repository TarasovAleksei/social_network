import React, {useEffect} from "react";
import Header from "./Header";
import {useDispatch, useSelector} from "react-redux";
import {getAuthMeTC, logOut} from "../redux/authReducer";
import {AppStateType} from "../redux/redux-store";
import {InitialStateType} from "../redux/authReducer";

export const HeaderContainer = () => {
    const {id, email, login, isAuth} = useSelector<AppStateType, InitialStateType>(state => state.auth)
    const dispatch = useDispatch()
    const logoutCB = ()=>{
        dispatch(logOut())
    }
    useEffect(() => {
        dispatch(getAuthMeTC())
    }, [dispatch])
    return (
        <Header
            id={id}
            email={email}
            login={login}
            isAuth={isAuth}
            logoutCB={logoutCB}
        />
    )
}
