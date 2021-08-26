import React from "react";
import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../redux/profileReducer";

type PropsType = {
    profile: ProfileType
}
const Profile = (props: PropsType) => {
    return (
        <div className={classes.profile}>
            <ProfileInfo
                profile={props.profile}
            />
            <MyPostsContainer/>
        </div>
    )
}
export default Profile