import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPostType, dispatchType, profilePageType, updateNewPostTextType} from "../redux/state";


type PropsType = {
    profilePage: profilePageType,
    dispatch: dispatchType
}
const Profile = (props: PropsType) => {
    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <MyPosts dispatch = {props.dispatch}
                     profilePage={props.profilePage}/>
        </div>
    )
}
export default Profile