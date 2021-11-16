import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Profile from "./Profile";
import {AppStateType} from "../redux/redux-store";
import {
    changeEditMode,
    getProfile,
    getStatus, initialStateType,
    ProfileType,
    setIsMe,
    StatusType,
    updateStatus,
    uploadPhoto, uploadProfile
} from "../redux/profileReducer";
import {Redirect, useParams} from "react-router-dom";
import {InitialStateType} from "../redux/authReducer";
import {InputsForFormProfile} from "./ProfileInfo/ProfileInfo";


export type ParamsType = {
    userID: string
}

export const ProfileContainer = () => {
    let {userID} = useParams<ParamsType>()
    const dispatch = useDispatch()
    const {isAuth} = useSelector<AppStateType, InitialStateType>(state => state.auth)
    const myId = useSelector<AppStateType, string | null>(state => state.auth.id)
    const {profile, status, isMe, editMode} = useSelector<AppStateType, initialStateType>((state) => state.profilePage)
    const changeEditModeCB = (editMode: boolean) => {
        dispatch(changeEditMode(editMode))
    }
    const updateProfileCB = (profile: InputsForFormProfile) => {
        dispatch(uploadProfile(profile))
    }
    const updateStatusCB = (status: StatusType) => {
        dispatch(updateStatus(status))
    }
    const savePhoto = (photo: string) => {
        dispatch(uploadPhoto(photo))
    }
    useEffect(() => {
        if (!userID && myId) {
            userID = myId
            dispatch(setIsMe(true))
        } else if (!myId) {
            dispatch(setIsMe(false))
        } else if (userID) {
            dispatch(setIsMe(false))
        }
        dispatch(getProfile(userID))
        dispatch(getStatus(userID))
    }, [dispatch, userID, profile])

    if (!isAuth) return <Redirect to={'/login'}/>
    return (
        <Profile
            savePhoto={savePhoto}
            profile={profile}
            status={status}
            isMe={isMe}
            updateStatusCB={updateStatusCB}
            updateProfileCB={updateProfileCB}
            changeEditModeCB={changeEditModeCB}
            editMode={editMode}
        />
    )
}