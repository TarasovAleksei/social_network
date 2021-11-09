import React from "react";
import userDefaultPhoto from "../../assets/images/no_foto.jpeg";
import classes from './Users.module.css'
import {UserType} from "../redux/usersReducer";
import {NavLink} from "react-router-dom";
import Pagination from "rc-pagination";
import {localInfo} from "../common/locale/en_US";
import '../../components/common/PaginationStyles/Pagination.css'

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
export const Users = React.memo((props: PropsType) => {

    return (
        <div>
            {/*<Paginator pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged}*/}
            {/*           totalItemCount={props.totalCount} portionSize={10} />*/}

            <Pagination style={{marginTop: '24px', alignSelf: 'flex-start'}}
                        className="ant-pagination"
                        showQuickJumper
                        defaultCurrent={props.currentPage}
                        pageSize={props.pageSize}
                        total={props.totalCount!}
                        locale={localInfo}
                        current={props.currentPage}
                        onChange={props.onPageChanged}/>

            {props.users.map(u => {
                let path = `/profile/${u.id}`
                return (
                    <div className={classes.container} key={u.id}>
                        <div className={classes.item}>
                            <div className={classes.item_img}>
                                <NavLink to={path}>
                                    <img className={classes.img}
                                         src={u.photos.small != null ? u.photos.small : userDefaultPhoto}
                                         alt="myPhoto"/>
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
})
