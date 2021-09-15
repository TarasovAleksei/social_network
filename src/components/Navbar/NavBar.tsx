import React from "react";
import classes from './NavBar.module.css';
import {NavLink, useParams} from "react-router-dom";
import {friendsPageType} from "../redux/friendsReducer";
import {useSelector} from "react-redux";
import {AppStateType} from "../redux/redux-store";



type PropsType = {
    friendsPage: friendsPageType
}

const NavBar = (props: PropsType) => {
    const isMe = useSelector<AppStateType, boolean>((state) => state.profilePage.isMe)
    const friendsElement = props.friendsPage.friends.map(f => {
        return (
            <div className={classes.friendsItems} key={f.id}>
                <div className={classes.friendsItem}>
                    <img src={f.url} alt="logoFriend"/>
                    <div>{f.name}</div>
                </div>
            </div>
        )
    })
    return (
        <nav className={classes.nav}>
            <div className={classes.item}><NavLink activeClassName={classes.activeLink}
            to="/profile">
                {isMe? 'Profile - my page':'Profile'}
            </NavLink>
            </div>
            <div className={classes.item}>< NavLink activeClassName={classes.activeLink} to="/dialogs">Messages
            </NavLink>
            </div>
            <div className={classes.item}>< NavLink activeClassName={classes.activeLink} to="/users">Users
            </NavLink>
            </div>
            <div className={classes.item}><NavLink activeClassName={classes.activeLink} to="/news">News</NavLink></div>
            <div className={classes.item}><NavLink activeClassName={classes.activeLink} to="/music">Music</NavLink>
            </div>
            <div className={classes.item}><NavLink activeClassName={classes.activeLink}
                                                   to="/settings">Settings</NavLink></div>
            <div className={classes.item}><NavLink activeClassName={classes.activeLink}
                                                   to="/friends">
                <div>
                    Friends
                </div>
            </NavLink>
                {friendsElement}
            </div>

        </nav>
    )
}
export default NavBar