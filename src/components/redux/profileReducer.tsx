import {v1} from "uuid";
import {Dispatch} from "react";
import {API} from "../../api/api";
import {InputsForFormProfile} from "../Profile/ProfileInfo/ProfileInfo";


export const ProfileReducer = (state: initialStateType = initialState, action: TotalActionPostType): initialStateType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost: newPostType = {
                id: v1(),
                post: action.data,
                likeCount: 0,
                url: "https://avatars.mds.yandex.net/get-zen_doc/1686199/pub_5e3e6d88e6e8eb5b95da89cf_5e3e6e6b6ffb5072de613bf5/scale_1200"
            }
            return {...state, posts: [...state.posts, newPost],}
        }
        case "DELETE-POST": {
            return {...state, posts: state.posts.filter(p => p.id !== action.id),}
        }
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "SET_PROFILE_STATUS":
            return {...state, status: action.status}
        case "SET_IS_ME":
            return {...state, isMe: action.isMe}
        case "SET_UPDATE_PHOTOS":
            return {...state, profile: {...state.profile, photos: action.photo}}
        case "SET_UPDATE_PROFILE":
            return {
                ...state,
                profile: {
                    ...state.profile,
                    aboutMe: action.profile.aboutMe,
                    lookingForAJob: action.profile.lookingForAJob,
                    lookingForAJobDescription: action.profile.lookingForAJobDescription,
                    contacts: {
                        ...state.profile.contacts, ...action.profile.contacts
                    }
                }
            }
        case
        "SET_EDIT_MODE"
        :
            return {
                ...state,
                editMode: action.editMode
            }
        default:
            return state
    }
}
//actions
export const addPostAC = (data: string) => ({type: 'ADD-POST', data,} as const)
export const deletePostAC = (id: string) => ({type: 'DELETE-POST', id} as const)
export const setUserProfile = (profile: ProfileType) => ({type: "SET-USER-PROFILE", profile} as const)
export const setStatusProfile = (status: StatusType) => ({type: "SET_PROFILE_STATUS", status} as const)
export const setIsMe = (isMe: boolean) => ({type: 'SET_IS_ME', isMe} as const)
export const setUpdatePhotosSuccess = (photo: any) => ({type: 'SET_UPDATE_PHOTOS', photo} as const)
export const setUpdateProfileSuccess = (profile: InputsForFormProfile) => ({
    type: 'SET_UPDATE_PROFILE',
    profile
} as const)
export const changeEditMode = (editMode: boolean) => ({type: 'SET_EDIT_MODE', editMode} as const)
//thunks
export const getProfile = (userID: string) => async (dispatch: Dispatch<TotalActionPostType>) => {
    let response = await API.profileAPI.getProfileAPI(userID)
    dispatch(setUserProfile(response.data))
}
export const getStatus = (userID: string) => async (dispatch: Dispatch<TotalActionPostType>) => {
    let response = await API.profileAPI.getStatusAPI(userID)
    dispatch(setStatusProfile(response.data))
}
export const updateStatus = (status: StatusType) => async (dispatch: Dispatch<TotalActionPostType>) => {
    let response = await API.profileAPI.updateStatusAPI(status)
    if (response.data.resultCode === 0) dispatch(setStatusProfile(status))
}
export const uploadPhoto = (photo: any) => async (dispatch: Dispatch<TotalActionPostType>) => {
    let response = await API.profileAPI.updatePhotoAPI(photo)
    if (response.data.resultCode === 0) {
        dispatch(setUpdatePhotosSuccess(response.data.data))
    }
}
export const uploadProfile = (profile: InputsForFormProfile) => (dispatch: Dispatch<any>) => {
    API.profileAPI.updateProfile(profile).then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(setUpdateProfileSuccess(response.data.data))
            dispatch(changeEditMode(false))
        }
    })
}
//types
export type newPostType = {
    id: string,
    post: string,
    likeCount: number,
    url: string
}
export type postType = {
    id: string,
    post: string,
    likeCount: number,
    url: string
}
export type AddPostActionType = ReturnType<typeof addPostAC>
export type SetUserProfileActionType = ReturnType<typeof setUserProfile>
export type SetProfileStatusActionType = ReturnType<typeof setStatusProfile>
export type setIsMeType = ReturnType<typeof setIsMe>
export type DeletePostActionType = ReturnType<typeof deletePostAC>
export type setUpdatePhotosSuccessActionType = ReturnType<typeof setUpdatePhotosSuccess>
export type setUpdateProfileSuccessActionType = ReturnType<typeof setUpdateProfileSuccess>
export type changeEditModeActionType = ReturnType<typeof changeEditMode>

export type TotalActionPostType =
    AddPostActionType
    | SetUserProfileActionType
    | SetProfileStatusActionType
    | setIsMeType
    | DeletePostActionType
    | setUpdatePhotosSuccessActionType
    | setUpdateProfileSuccessActionType | changeEditModeActionType
export type initialStateType = typeof initialState
export type StatusType = string | null
let initialState = {
    posts: [
        {
            id: v1(),
            post: 'Hello',
            likeCount: 10,
            url: "https://avatars.mds.yandex.net/get-zen_doc/1686199/pub_5e3e6d88e6e8eb5b95da89cf_5e3e6e6b6ffb5072de613bf5/scale_1200"
        },
        {
            id: v1(),
            post: 'My name is Alex',
            likeCount: 20,
            url: "https://avatars.mds.yandex.net/get-zen_doc/1686199/pub_5e3e6d88e6e8eb5b95da89cf_5e3e6e6b6ffb5072de613bf5/scale_1200"
        },
        {
            id: v1(),
            post: 'Where are you from?',
            likeCount: 30,
            url: "https://avatars.mds.yandex.net/get-zen_doc/1686199/pub_5e3e6d88e6e8eb5b95da89cf_5e3e6e6b6ffb5072de613bf5/scale_1200"
        },
    ],
    profile: {} as ProfileType,
    status: '' as StatusType,
    isMe: false,
    editMode: false
}
export type ProfileType = {
    userId: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    aboutMe: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
    }
    photos: {
        small: string,
        large: string,
    }
}