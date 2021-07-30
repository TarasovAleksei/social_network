import React from "react";
import classes from './Profile.module.css'

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../redux/redux-store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

// type PropsType = {
//     store: StoreType
// }
const Profile = () => {
    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}
export default Profile