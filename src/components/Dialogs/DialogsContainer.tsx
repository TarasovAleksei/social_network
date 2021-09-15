import React from "react";
import {
    AppStateType,
} from "../redux/redux-store";
import {addMessageAC, dialogsPageType} from "../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {useDispatch, useSelector} from "react-redux";
import {InitialStateType} from "../redux/authReducer";
import { Redirect } from "react-router-dom";


export const DialogsContainer = () => {
    const {isAuth} = useSelector<AppStateType, InitialStateType>(state=>state.auth)
    const {messages, dialogs} = useSelector<AppStateType, dialogsPageType>((state) => state.dialogsPage)
    const dispatch = useDispatch()
    const addMessageCallBack = (data:string) => {
        dispatch(addMessageAC(data))
    }

    if(!isAuth) return <Redirect to={'/login'}/>
    return (
        <Dialogs
            messages={messages}
            dialogs={dialogs}
            addMessage={addMessageCallBack}
        />
    )
}