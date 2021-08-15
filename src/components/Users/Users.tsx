import React from "react";
import {UsersType} from "../redux/usersReducer";
import classes from './Users.module.css'
import axios from "axios";
import userDefaultPhoto from '../../assets/images/no_foto.jpeg'


type PropsType = {
    users: UsersType,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    onChangeFollow: (userID: string) => void,
    onChangeUnFollow: (userID: string) => void,
    setUsers: (users: UsersType) => void,
    setCurrentPage: (currentPage: number) => void,
    setTotalUsersCount: (totalUsersCount: number) => void,
}

class Users extends React.Component<PropsType> {

    componentDidMount() {
        if (this.props.users.length <= 1) axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount/100)
            })
    }

    onPageChanged = (pageNumber: number) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsers(response.data.items))
        this.props.setCurrentPage(pageNumber)
    }


    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div>
                <div>
                    {pages.map(p => <span onClick={() => {
                        this.onPageChanged(p)
                    }} className={this.props.currentPage === p ? classes.selectedPage : classes.unSelectedPage}>{p}</span>)}
                </div>
                {this.props.users.map(u => {
                    return (
                        <div className={classes.container} key={u.id}>
                            <div className={classes.item}>
                                <div className={classes.item_img}>
                                    <img className={classes.img}
                                         src={u.photos.small != null ? u.photos.small : userDefaultPhoto}
                                         alt=""/>
                                </div>
                                <div className={classes.description}>
                                    <div className={classes.name}>
                                        {u.name}
                                        {u.followed ? <button className={classes.button} onClick={() => {
                                                this.props.onChangeUnFollow(u.id)
                                            }}> unfollow</button> :
                                            <button className={classes.button} onClick={() => {
                                                this.props.onChangeFollow(u.id)
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
}

export default Users