import React, {ChangeEvent} from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {dialogType, messageType, newMessageType} from "../redux/redux-store";


type PropsType = {
    messages: messageType[]
    dialogs: dialogType[]
    newMessage: newMessageType
    addMessage: () => void
    onChangeMessageHandler: (event: ChangeEvent<HTMLInputElement>) => void

}

const Dialogs = (props: PropsType) => {
    const dialogsElement = props.dialogs.map(d => {
        return (
            <DialogItem key={d.id} id={d.id} name={d.name} url={d.url}/>
        )
    })
    const messageElement = props.messages.map(m => {
        return (
            <Message message={m.message} id={m.id} key={m.id}/>
        )
    })
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                <div>
                    <input value={props.newMessage.trim()} onChange={props.onChangeMessageHandler}/>
                    <button onClick={props.addMessage} className={classes.btnDialogs}>add message</button>
                </div>
                {messageElement}
            </div>
        </div>
    )
}
export default Dialogs