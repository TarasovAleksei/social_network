import React, {ChangeEvent, useState} from "react";
import {StatusType} from "../../redux/profileReducer";


type PropsType = {
    status: StatusType,
    isMe: boolean,
    updateStatusCB: (status: StatusType) => void
}
export const ProfileStatus = (props: PropsType) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [statusValue, setStatusValue] = useState<any>(props.status)

    const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setStatusValue(e.currentTarget.value)
    }
    const activateEditMode = () => {
        setEditMode(true)
        setStatusValue(props.status)
    }
    const activateViewMode = () => {
        setEditMode(false);
        props.updateStatusCB(statusValue)
    }

    return (
        editMode ?
            <div>
                <input onBlur={activateViewMode} autoFocus value={statusValue} onChange={onChangeStatus} type="text"/>
            </div>
            :
            <div>
                <span onDoubleClick={activateEditMode}>{props.status ? props.status : 'no status'}</span>
            </div>
    )
}
