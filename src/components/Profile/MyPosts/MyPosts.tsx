import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {postType} from "../../redux/profileReducer";
import {SubmitHandler, useForm} from "react-hook-form";

export type inputForPostType = {
    post: string,
};
type PropsType = {
    posts: postType[],
    addNewPost: (data: string) => void,
}

const MyPosts = React.memo((props: PropsType) => {
    const {register, handleSubmit, formState: {errors}} = useForm<inputForPostType>();
    const onSubmit: SubmitHandler<inputForPostType> = data => props.addNewPost(data.post)

    const postElement = props.posts.map(p => {
        return (
            <Post post={p.post} key={p.id} likeCount={p.likeCount} url={p.url} id={p.id}/>
        )
    })
    return (
        <div className={classes.myPosts}>
            <form className={classes.container} onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="add your post" {...register('post', {required: true})} />
                {errors.post && <span>This field is empty</span>}
                <input value={'send'} className={classes.btnAddPost} type="submit"/>
            </form>
            {postElement}
        </div>
    )
})
export default MyPosts