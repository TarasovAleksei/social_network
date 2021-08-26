import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Profile from "./Profile";
import {AppStateType} from "../redux/redux-store";
import {ProfileType, setUserProfile} from "../redux/profileReducer";
import axios from "axios";
import { useParams } from "react-router-dom";

type ParamsType = {
    userID: string
}
export const ProfileContainer = () => {
    let userID = useParams<ParamsType>().userID
    if (!userID) userID = '2'
    const profile = useSelector<AppStateType, ProfileType>((state) => state.profilePage.profile)
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }, [dispatch, userID])

    return (
        <Profile
            profile={profile}
        />
    )
}