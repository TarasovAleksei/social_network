import React from "react";
import {AppStateType} from "../../redux/redux-store";
import {
    addPostAC,
    initialStateType,
} from "../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {useDispatch, useSelector} from "react-redux";


export const MyPostsContainer = () => {
    const {posts} = useSelector<AppStateType, initialStateType>((state) =>
        state.profilePage
    )
    const dispatch = useDispatch()
    const addPostCallBack = (data:string) => {
        dispatch(addPostAC(data))
    }
    return (
        <MyPosts
            posts={posts}
            addNewPost={addPostCallBack}
        />
    )
}



