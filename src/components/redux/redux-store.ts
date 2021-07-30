import {createStore, combineReducers} from 'redux'
import {ProfileReducer} from "./profileReducer";
import {DialogsReducer} from "./dialogsReducer";
import {FriendsReducer} from "./friendsReducer";
import {FollowedActionType, SetUsersActionType, UnFollowedActionType, UsersReducer} from "./usersReducer";
export type getStateType = () => stateType
export type rerenderEntireTreeType = () => void
export type totalActionType = AddPostActionType | UpdateNewPostTextActionType | AddMessageActionType | OnChangeMessageActionType |SetUsersActionType | FollowedActionType | UnFollowedActionType
export type dispatchType = (action: totalActionType)=>void
export type subscribeType = (rerenderEntireTree: rerenderEntireTreeType) => void
export type addPostACType = ()=>AddPostActionType
export type updateNewPostTextACType = (newPostText: string)=>UpdateNewPostTextActionType
export type addMessageACType = ()=>AddMessageActionType
export type onChangeMessageACType = (newMessage:string)=>OnChangeMessageActionType
export type AddPostActionType = {
    type: 'ADD-POST',
}
export type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST-TEXT",
    newPostText: string
}
export type AddMessageActionType = {
    type:'ADD-MESSAGE'
}
export type OnChangeMessageActionType = {
    type:'ON-CHANGE-MESSAGE',
    newMessage: string
}
export type postType = {
    id: string,
    post: string,
    likeCount: number,
    url: string
}
export type dialogType = {
    id: string,
    name: string,
    url: string
}
export type messageType = {
    id: string,
    message: string
}
export type friendsType = {
    id: string,
    name: string,
    url: string
}
export type profilePageType = {
    posts: postType[],
    newPostText: string
}
export type dialogsPageType = {
    dialogs: dialogType[],
    messages: messageType[],
    newMessage: newMessageType
}
export type friendsPageType = {
    friends: friendsType[]
}
export type stateType = {
    profilePage: profilePageType,
    dialogsPage: dialogsPageType,
    friendsPage: friendsPageType,
}
export type newPostType = {
    id: string,
    post: postMessageType,
    likeCount: number,
    url: string
}
export type postMessageType = string
export type newMessageType = string;
export type addPostType = () => void
export type addMessageType = () => void
export type updateNewPostTextType = (newPostText: postMessageType) => void
export type onChangeMessageType = (newMessage: string) => void
export type StoreType = {
    _state: stateType,
    getState: getStateType,
    dispatch: dispatchType,
    subscribe: subscribeType,
    rerenderEntireTree: rerenderEntireTreeType
}
let reducer = combineReducers({
    profilePage:ProfileReducer,
    dialogsPage:DialogsReducer,
    friendsPage:FriendsReducer,
    usersPage: UsersReducer
})

export type AppStateType =ReturnType<typeof reducer >
let store = createStore(reducer)
export type AppStoreType =typeof store
export default store

