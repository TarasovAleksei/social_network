import {v1} from "uuid";
import {Dispatch} from "react";
import {API} from "../../api/api";

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
export type AddPostActionType = {
    type: 'ADD-POST',
    data: string,
}
export type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST-TEXT",
    newPostText: string
}
export type SetUserProfileActionType = {
    type: "SET-USER-PROFILE",
    profile: ProfileType
}
export type SetProfileStatusActionType = {
    type: "SET_PROFILE_STATUS",
    status: StatusType,
}
export type setIsMeType = ReturnType<typeof setIsMe>
export type DeletePostActionType = ReturnType<typeof deletePostAC>
export type TotalActionPostType =
    AddPostActionType
    | UpdateNewPostTextActionType
    | SetUserProfileActionType
    | SetProfileStatusActionType | setIsMeType | DeletePostActionType
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
}
export type ProfileType = {
    userId: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string,
        large: string,
    }
}

export const ProfileReducer = (state: initialStateType = initialState, action: TotalActionPostType): initialStateType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost: newPostType = {
                id: v1(),
                post: action.data,
                likeCount: 0,
                url: "https://avatars.mds.yandex.net/get-zen_doc/1686199/pub_5e3e6d88e6e8eb5b95da89cf_5e3e6e6b6ffb5072de613bf5/scale_1200"
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        }
        case "DELETE-POST": {
            return {
                ...state,
                posts: state.posts.filter(p=>p.id!==action.id),
            }
        }
        case "SET-USER-PROFILE":
            return {
                ...state,
                profile: action.profile
            }
        case "SET_PROFILE_STATUS":
            return {
                ...state,
                status: action.status
            }
        case "SET_IS_ME":
            return {
                ...state,
                isMe: action.isMe
            }
        default:
            return state
    }
}
//actions
export const addPostAC = (data:string): AddPostActionType => {
    return {
        type: 'ADD-POST',
        data: data,
    } as const
}
export const deletePostAC = (id:string)=>{
    return {
        type: 'DELETE-POST',
        id
    }as const
}

export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => {
    return {
        type: "SET-USER-PROFILE",
        profile
    }as const
}
export const setStatusProfile = (status: StatusType): SetProfileStatusActionType => {
    return {
        type: "SET_PROFILE_STATUS",
        status
    }as const
}
export const setIsMe = (isMe: boolean) => {
    return {
        type: 'SET_IS_ME',
        isMe
    } as const
}

//thunks
export const getProfile = (userID: string) => (dispatch: Dispatch<TotalActionPostType>) => {
    API.profileAPI.getProfileAPI(userID)
        .then(response => {
            dispatch(setUserProfile(response))
        })
}
export const getStatus = (userID: string) => (dispatch: Dispatch<TotalActionPostType>) => {
    API.profileAPI.getStatusAPI(userID).then(response => {
        console.log(response)
        dispatch(setStatusProfile(response))

    })
}
export const updateStatus = (status: StatusType) => (dispatch: Dispatch<TotalActionPostType>) => {
    API.profileAPI.updateStatusAPI(status).then(response => {
        if (response.resultCode === 0) {
            dispatch(setStatusProfile(status))
        }
    })
}