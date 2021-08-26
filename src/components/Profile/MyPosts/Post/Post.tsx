import React from "react";
import classes from './Post.module.css'
import {postType} from "../../../redux/profileReducer";

const Post = (props:postType) => {
    return (
        <div className={classes.post}>
            <img
                src={props.url}
                alt="ava"/>
            {props.post}
            <div>
                <span>like {props.likeCount}</span>
            </div>
        </div>
    )
}
export default Post