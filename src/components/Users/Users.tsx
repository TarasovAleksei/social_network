import React from "react";
import {v1} from "uuid";
import {UsersType} from "../redux/usersReducer";
import classes from './Users.module.css'


type PropsType = {
    users: UsersType,
    onChangeFollow: (userID: string) => void,
    onChangeUnFollow: (userID: string) => void,
    setUsers: (users: UsersType) => void
}

const Users = (props: PropsType) => {
    if (props.users.length <= 1) props.setUsers([
        {
            id: v1(),
            url: 'https://i1.wp.com/soulpost.ru/wp-content/uploads/2016/09/940x714_0xc0a839a4_10140916381473091889.jpeg?resize=940%2C714',
            followed: true,
            fullName: 'Jenifer',
            status: 'i am a Jay',
            location: {city: 'Minskk', country: 'Belarus'}
        },
        {
            id: v1(),
            url: 'https://www.wmj.ru/imgs/2020/10/07/20/4163822/e2ccd8501d059a2c87a80af0945881d35a644b26.jpg',
            followed: false,
            fullName: 'Willard',
            status: 'i am a killer',
            location: {city: 'New-York', country: 'USA'}
        }
    ])
    const usersElement = props.users.map(u => {
        return (
            <div className={classes.container} key={u.id}>
                <div className={classes.item}>
                    <div className={classes.item_img}>
                        <img className={classes.img} src={u.url} alt=""/>
                    </div>
                    <div className={classes.description}>
                        <div className={classes.name}>
                            {u.fullName}
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
                                country: {u.location.country}
                            </div>
                            <div>
                                city: {u.location.city}
                            </div>
                        </div>


                    </div>

                </div>

            </div>
        )
    })

    return (
        <div>
            {usersElement}
        </div>
    )
}
export default Users