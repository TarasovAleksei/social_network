import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPostType, profilePageType, updateNewPostTextType} from "../redux/state";



type PropsType={
    profilePage: profilePageType,
    addPost: addPostType,
    updateNewPostText: updateNewPostTextType
}
const Profile = (props: PropsType) => {
    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <MyPosts updateNewPostText={props.updateNewPostText} addPost={props.addPost} profilePage={props.profilePage}/>
        </div>
    )
}
export default Profile