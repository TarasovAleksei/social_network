import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Profile from "./Profile";
import {AppStateType} from "../redux/redux-store";
import {getProfile, getStatus, ProfileType, setIsMe, StatusType, updateStatus} from "../redux/profileReducer";
import {Redirect, useParams} from "react-router-dom";
import {InitialStateType} from "../redux/authReducer";


export type ParamsType = {
    userID: string
}

export const ProfileContainer = () => {
    let {userID} = useParams<ParamsType>()
    const dispatch = useDispatch()
    const {isAuth} = useSelector<AppStateType, InitialStateType>(state => state.auth)
    const myId = useSelector<AppStateType, string | null>(state => state.auth.id)
    const profile = useSelector<AppStateType, ProfileType>((state) => state.profilePage.profile)
    const status = useSelector<AppStateType, StatusType>((state) => state.profilePage.status)
    const isMe = useSelector<AppStateType, boolean>((state) => state.profilePage.isMe)


    const updateStatusCB = (status: StatusType) => {
        dispatch(updateStatus(status))
    }

    useEffect(() => {
        if (!userID && myId) {
            userID = myId
            dispatch(setIsMe(true))
        } else if (!myId) {
            userID = '2'
            dispatch(setIsMe(false))
        } else if (userID) {
            dispatch(setIsMe(false))
        }
        dispatch(getProfile(userID))
        dispatch(getStatus(userID))
    }, [dispatch, userID])

    if (!isAuth) return <Redirect to={'/login'}/>
    return (
        <Profile
            profile={profile}
            status={status}
            isMe={isMe}
            updateStatusCB={updateStatusCB}
        />
    )
}