import React, {ChangeEvent} from "react";
import {
    AppStateType,
    dialogType,
    dispatchType, messageType, newMessageType,
} from "../redux/redux-store";
import {addMessageAC, onChangeMessageAC} from "../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


// const DialogsContainer = () => {
//     const addMessage = () => {
//         store.dispatch(addMessageAC())
//     }
//     const onChangeMessageHandler = (event: ChangeEvent<HTMLInputElement>) => {
//         store.dispatch(onChangeMessageAC(event.currentTarget.value))
//     }
//
//     return (
//         <Dialogs addMessage={addMessage} onChangeMessageHandler={onChangeMessageHandler}
//                  messages={store.getState().dialogsPage.messages}
//                  dialogs={store.getState().dialogsPage.dialogs}
//                  newMessage={store.getState().dialogsPage.newMessage}/>
//     )
// }
export type MapStatePropsType = {
    messages: messageType[]
    dialogs: dialogType[]
    newMessage: newMessageType
}
export type MapDispatchPropsType = {
    addMessage: () => void,
    onChangeMessageHandler: (event: ChangeEvent<HTMLInputElement>) => void
}

const MapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialogs,
        newMessage: state.dialogsPage.newMessage
    }
}
const MapDispatchToProps = (dispatch: dispatchType): MapDispatchPropsType => {
    return {
        addMessage: () => {
            dispatch(addMessageAC())
        },
        onChangeMessageHandler: (event: ChangeEvent<HTMLInputElement>) => {
            dispatch(onChangeMessageAC(event.currentTarget.value))
        }
    }
}
const DialogsContainer = connect(MapStateToProps, MapDispatchToProps)(Dialogs)

export default DialogsContainer