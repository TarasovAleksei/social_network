import React from "react";
import Header from "./Header";
import {useSelector} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {InitialStateType} from "../redux/authReducer";

type PropsType = {
    logoutCB: () => void
}

export const HeaderContainer = (props: PropsType) => {
    const {id, email, login, isAuth} = useSelector<AppStateType, InitialStateType>(state => state.auth)

    return (
        <Header
            id={id}
            email={email}
            login={login}
            isAuth={isAuth}
            logoutCB={props.logoutCB}
        />
    )
}
