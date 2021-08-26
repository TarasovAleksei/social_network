import React, {ChangeEvent} from "react";
import {
    AppStateType,
} from "../redux/redux-store";
import {addMessageAC, dialogsPageType, onChangeMessageAC} from "../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {useDispatch, useSelector} from "react-redux";


export const DialogsContainer = () => {
    const {messages, dialogs, newMessage} = useSelector<AppStateType, dialogsPageType>((state) => state.dialogsPage)
    const dispatch = useDispatch()
    const addMessageCallBack = () => {
        dispatch(addMessageAC())
    }
    const onChangeMessageHandlerCallBack = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(onChangeMessageAC(event.currentTarget.value))
    }
    return (
        <Dialogs
            messages={messages}
            dialogs={dialogs}
            newMessage={newMessage}
            addMessage={addMessageCallBack}
            onChangeMessageHandler={onChangeMessageHandlerCallBack}
        />
    )
}