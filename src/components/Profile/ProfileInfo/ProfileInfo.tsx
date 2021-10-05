import React from "react";
import {ProfileType, StatusType} from "../../redux/profileReducer";
import classes from './ProfileInfo.module.css';
import userDefaultPhoto from "../../../assets/images/no_foto.jpeg";
import {Preloader} from "../../common/preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";

type PropsType = {
    profile: ProfileType,
    status: StatusType,
    updateStatusCB: (status: StatusType) => void,
    isMe: boolean,
}
const ProfileInfo = React.memo((props: PropsType) => {
    return (<>
            {!Object.keys(props.profile).length && <span>
                <Preloader/> not found</span>} {
            Object.keys(props.profile).length &&
            <div className={classes.container}>
                <div className={classes.avatar}>
                    <img src={props.profile.photos.large != null ? props.profile.photos.large : userDefaultPhoto}
                         alt="ava"/>
                </div>

                <div className={classes.description}>
                    <div>
                        Name: {props.profile.fullName}
                    </div>
                    {props.isMe ?
                        <ProfileStatus status={props.status}
                                       isMe={props.isMe}
                                       updateStatusCB={props.updateStatusCB}
                        /> :
                        <div>
                            <span>{props.status ? props.status : 'no status'}</span>
                        </div>
                    }


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
})
export default ProfileInfo