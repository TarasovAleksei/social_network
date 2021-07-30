import { v1 } from "uuid";
import {
    AddMessageActionType,
    AddPostActionType, addPostACType,
    newPostType, OnChangeMessageActionType,
    profilePageType,
    UpdateNewPostTextActionType, updateNewPostTextACType
} from "./redux-store";

let initialState: profilePageType = {
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
}

export const ProfileReducer = (state = initialState, action: AddPostActionType | UpdateNewPostTextActionType | AddMessageActionType | OnChangeMessageActionType): profilePageType => {
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
        default:
            return state
    }
}
export const addPostAC: addPostACType = () => {
    return {
        type: 'ADD-POST',
    }
}
export const updateNewPostTextAC: updateNewPostTextACType = (newPostText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newPostText: newPostText
    }
}