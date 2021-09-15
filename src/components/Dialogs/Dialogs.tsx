import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {dialogType, messageType, newMessageType} from "../redux/dialogsReducer";
import {SubmitHandler, useForm} from "react-hook-form";

export type inputForDialogs = {
    message: string,
};
type PropsType = {
    messages: messageType[]
    dialogs: dialogType[]
    addMessage: (data: string) => void,
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
    const {register, handleSubmit, formState: {errors}} = useForm<inputForDialogs>();
    const onSubmit: SubmitHandler<inputForDialogs> = data => props.addMessage(data.message)
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                <div>
                    <form className={classes.container} onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder="add your message" {...register('message', {required: true})} />
                        {errors.message && <span>This field is empty</span>}
                        <input value={'send'} className={classes.btnDialogs} type="submit"/>
                    </form>
                </div>
                {messageElement}
            </div>
        </div>
    )
}
export default Dialogs