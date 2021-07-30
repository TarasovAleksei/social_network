import React, {ChangeEvent} from "react";
import {
    addPostType, AppStateType, AppStoreType,
    dispatchType,
    postMessageType,
    postType,
    StoreType
} from "../../redux/redux-store";
import {addPostAC, updateNewPostTextAC} from "../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

// type PropsType = {
//     store: StoreType
// }

// const MyPostsContainer = (props: PropsType) => {
//     const store = props.store
//     const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
//         store.dispatch(updateNewPostTextAC(event.currentTarget.value))
//     }
//     const addNewPost = () => {
//         store.dispatch(addPostAC())
//     }
//
//     return (
//         <MyPosts addNewPost={addNewPost} posts={store.getState().profilePage.posts}
//             newPostText={store.getState().profilePage.newPostText}
//                  onChangeInputHandler={onChangeInputHandler}/>
//     )
// }

export type MapStatePropsType = {
    posts:postType[]
    newPostText:postMessageType
}
export type MapDispatchPropsType = {
    addNewPost:addPostType
    onChangeInputHandler: (event: ChangeEvent<HTMLInputElement>)=>void
}
const MapStateToProps = (state: AppStateType):MapStatePropsType=>{
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const MapDispatchToProps = (dispatch:dispatchType):MapDispatchPropsType=>{
    return {
        addNewPost: () => {
            dispatch(addPostAC())
        },
        onChangeInputHandler: (event: ChangeEvent<HTMLInputElement>) => {
            dispatch(updateNewPostTextAC(event.currentTarget.value))
        }
    }
}

const MyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts)
export default MyPostsContainer