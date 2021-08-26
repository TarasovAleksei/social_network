import {v1} from "uuid";

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
export type profilePageType = {
    posts: postType[],
    newPostText: string
}
export type AddPostActionType = {
    type: 'ADD-POST',
}
export type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST-TEXT",
    newPostText: string
}
export type SetUserProfileActionType = {
    type: "SET-USER-PROFILE",
    profile: ProfileType
}
export type TotalActionPostType = AddPostActionType | UpdateNewPostTextActionType | SetUserProfileActionType
export type initialStateType = typeof initialState
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
    newPostText: '',
    profile: {} as ProfileType
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
                post: state.newPostText,
                likeCount: 0,
                url: "https://avatars.mds.yandex.net/get-zen_doc/1686199/pub_5e3e6d88e6e8eb5b95da89cf_5e3e6e6b6ffb5072de613bf5/scale_1200"
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case "UPDATE-NEW-POST-TEXT":
            return {
                ...state,
                newPostText: action.newPostText
            }
        case "SET-USER-PROFILE":
            return {
                ...state,
                profile: action.profile
            }

        default:
            return state
    }
}
export const addPostAC = (): AddPostActionType => {
    return {
        type: 'ADD-POST',
    }
}
    export const updateNewPostTextAC = (newPostText: string): UpdateNewPostTextActionType => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newPostText: newPostText
    }
}
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => {
    return {
        type: "SET-USER-PROFILE",
        profile
    }
}