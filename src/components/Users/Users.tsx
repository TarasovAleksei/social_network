import React from "react";
import userDefaultPhoto from "../../assets/images/no_foto.jpeg";
import classes from './Users.module.css'
import {UserType} from "../redux/usersReducer";
import {NavLink} from "react-router-dom";

type PropsType = {
    users: UserType[],
    pageSize: number,
    totalCount: number,
    currentPage: number,
    followingInProgress: string[],
    followCallback: (userID: string) => void,
    unFollowCallback: (userID: string) => void,
    onPageChanged: (pageNumber: number) => void,
}
export const Users = (props: PropsType) => {
    const pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(p => <span key={p} onClick={() => {
                    props.onPageChanged(p)
                }} className={props.currentPage === p ? classes.selectedPage : classes.unSelectedPage}>{p}</span>)}
            </div>
            {props.users.map(u => {
                let path = `/profile/${u.id}`
                return (
                    <div className={classes.container} key={u.id}>
                        <div className={classes.item}>
                            <div className={classes.item_img}>
                                <NavLink to={path}>
                                    <img className={classes.img}
                                         src={u.photos.small != null ? u.photos.small : userDefaultPhoto}
                                         alt=""/>
                                </NavLink>

                            </div>
                            <div className={classes.description}>
                                <div className={classes.name}>
                                    {u.name}
                                    {u.followed ? <button disabled={props.followingInProgress.some(s => s === u.id)}
                                                          className={classes.unfollowedButton} onClick={() => {
                                            props.unFollowCallback(u.id)
                                        }}> unfollow</button> :
                                        <button disabled={props.followingInProgress.some(s => s === u.id)}
                                                className={classes.button}
                                                onClick={() => {
                                                    props.followCallback(u.id)
                                                }}>follow</button>}
                                </div>
                                <div className={classes.location_status}>
                                    <div>
                                        status: '{u.status}'
                                    </div>
                                    <div>
                                        country: {'u.location.country'}
                                    </div>
                                    <div>
                                        city: {'u.location.city'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
