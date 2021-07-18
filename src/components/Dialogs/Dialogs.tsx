import React, {ChangeEvent} from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageType, dialogsPageType, onChangeMessageType} from "../redux/state";


type PropsType = {
    dialogsPage: dialogsPageType,
    addMessage: addMessageType,
    onChangeMessage: onChangeMessageType
}

const Dialogs = (props: PropsType) => {
    const AddMessage = () => {
       props.addMessage()
    }
const onChangeMessageHandler = (event:ChangeEvent<HTMLInputElement>)=> {
        props.onChangeMessage(event.currentTarget.value)
}

    const dialogsElement = props.dialogsPage.dialogs.map(d => {
        return (
            <DialogItem key={d.id} id={d.id} name={d.name} url={d.url}/>
        )
    })
    const messageElement = props.dialogsPage.messages.map(m => {
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
                    <input value={props.dialogsPage.newMessage}  onChange={onChangeMessageHandler} />
                    <button onClick={AddMessage} className={classes.btnDialogs}>add message</button>
                </div>
                {messageElement}
            </div>
        </div>
    )
}
export default Dialogs