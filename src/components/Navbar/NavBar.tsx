import React from "react";
import classes from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import {friendsPageType} from "../redux/state";

type PropsType = {
    friendsPage: friendsPageType
}

const NavBar = (props: PropsType) => {
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
            <div className={classes.item}><NavLink activeClassName={classes.activeLink} to="/profile">Profile</NavLink>
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