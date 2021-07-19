import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {
    addPostAC,
    addPostType,
    dispatchType,
    profilePageType,
    updateNewPostTextAC,
    updateNewPostTextType
} from "../../redux/state";


type PropsType = {
    profilePage: profilePageType,
    dispatch: dispatchType
}

const MyPosts = (props: PropsType) => {
    const textPost: string = props.profilePage.newPostText
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.dispatch(updateNewPostTextAC(event.currentTarget.value))
    }
    const addNewPost = () => {
        props.dispatch(addPostAC())
    }

    const postElement = props.profilePage.posts.map(p => {
        return (
            <Post post={p.post} key={p.id} likeCount={p.likeCount} url={p.url} id={p.id}/>
        )
    })
    return (
        <div className={classes.myPosts}>
            <input value={textPost} onChange={onChangeInputHandler}/>
            <button onClick={addNewPost} className={classes.btnAddPost}>add post</button>
            {postElement}
        </div>
    )
}
export default MyPosts