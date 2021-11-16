import React from "react";
import classes from './Profile.module.css'
import {InputsForFormProfile, ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType, StatusType} from "../redux/profileReducer";

type PropsType = {
    profile: ProfileType,
    status: StatusType,
    updateStatusCB:(status:StatusType)=>void
    isMe: boolean,
    savePhoto:(photo:any)=>void
    updateProfileCB:(profile:InputsForFormProfile)=>void
    changeEditModeCB:(editMode:boolean)=>void
    editMode:boolean
}
const Profile = React.memo((props: PropsType) => {
    return (
        <div className={classes.profile}>
            <ProfileInfo
                savePhoto={props.savePhoto}
                profile={props.profile}
                status={props.status}
                isMe={props.isMe}
                updateStatusCB={props.updateStatusCB}
                updateProfileCB={props.updateProfileCB}
                changeEditModeCB={props.changeEditModeCB}
                editMode={props.editMode}
            />
            <MyPostsContainer/>
        </div>
    )
})
export default Profile