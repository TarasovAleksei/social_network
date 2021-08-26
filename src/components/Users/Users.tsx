import React from "react";
import userDefaultPhoto from "../../assets/images/no_foto.jpeg";
import classes from './Users.module.css'
import { UserType} from "../redux/usersReducer";
import { NavLink } from "react-router-dom";


type PropsType = {
    users: UserType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    onChangeFollow: (userID: string) => void,
    onChangeUnFollow: (userID: string) => void,
    setUsers: (users: UserType[]) => void,
    setCurrentPage: (currentPage: number) => void,
    setTotalUsersCount: (totalUsersCount: number) => void,
    onPageChanged: (pageNumber: number)=> void
}
export const Users = (props: PropsType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(p => <span onClick={() => {
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
                                    {u.followed ? <button className={classes.button} onClick={() => {
                                            props.onChangeUnFollow(u.id)
                                        }}> unfollow</button> :
                                        <button className={classes.button} onClick={() => {
                                            props.onChangeFollow(u.id)
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
