import React from "react";
import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType, StatusType} from "../redux/profileReducer";

type PropsType = {
    profile: ProfileType,
    status: StatusType,
    updateStatusCB:(status:StatusType)=>void
    isMe: boolean,
}
const Profile = React.memo((props: PropsType) => {
    return (
        <div className={classes.profile}>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                isMe={props.isMe}
                updateStatusCB={props.updateStatusCB}
            />
            <MyPostsContainer/>
        </div>
    )
})
export default Profile