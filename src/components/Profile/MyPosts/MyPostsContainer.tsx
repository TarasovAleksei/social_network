import React, {ChangeEvent} from "react";
import {AppStateType} from "../../redux/redux-store";
import {
    addPostAC,
    initialStateType,
    updateNewPostTextAC
} from "../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {useDispatch, useSelector} from "react-redux";


export const MyPostsContainer = () => {
    const {posts, newPostText} = useSelector<AppStateType, initialStateType>((state) =>
        state.profilePage
    )
    const dispatch = useDispatch()
    const addPostCallBack = () => {
        dispatch(addPostAC())
    }
    const onChangeInputHandlerCallBack = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(updateNewPostTextAC(event.currentTarget.value))
    }
    return (
        <MyPosts
            posts={posts}
            newPostText={newPostText}
            addNewPost={addPostCallBack}
            onChangeInputHandler={onChangeInputHandlerCallBack}
        />
    )
}



