import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {postMessageType, postType} from "../../redux/redux-store";

type PropsType = {
    posts: postType[]
    newPostText: postMessageType
    addNewPost: () => void
    onChangeInputHandler: (event: ChangeEvent<HTMLInputElement>) => void
}

const MyPosts = (props: PropsType) => {

    const postElement = props.posts.map(p => {
        return (
            <Post post={p.post} key={p.id} likeCount={p.likeCount} url={p.url} id={p.id}/>
        )
    })
    return (
        <div className={classes.myPosts}>
            <input value={props.newPostText} onChange={props.onChangeInputHandler}/>
            <button onClick={props.addNewPost} className={classes.btnAddPost}>add post</button>
            {postElement}
        </div>
    )
}
export default MyPosts