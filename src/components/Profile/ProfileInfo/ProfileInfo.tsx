import React from "react";
import {ProfileType} from "../../redux/profileReducer";
import classes from './ProfileInfo.module.css';
import userDefaultPhoto from "../../../assets/images/no_foto.jpeg";
import {Preloader} from "../../common/preloader/Preloader";
import {spawn} from "child_process";

type PropsType = {
    profile: ProfileType
}
const ProfileInfo = (props: PropsType) => {
    return (<>
            {!props.profile.photos && <span>
                <Preloader/> not found</span>} {
                props.profile.photos &&
            <div className={classes.container}>
                <div className={classes.avatar}>
                    <img src={props.profile.photos.large != null ? props.profile.photos.large : userDefaultPhoto}
                         alt="ava"/>
                </div>
                <div className={classes.description}>
                    <div>
                        Name: {props.profile.fullName}
                    </div>
                    <div className={classes.contacts}>
                        Contacts:
                        <div>{props.profile.contacts.vk}</div>
                        <div>{props.profile.contacts.facebook}</div>
                        <div>{props.profile.contacts.github}</div>
                        <div>{props.profile.contacts.twitter}</div>
                        <div>{props.profile.contacts.instagram}</div>
                    </div>

                    <div>

                    </div>
                </div>
            </div>}
        </>
    )
}
export default ProfileInfo