import React from "react";
import {NavLink} from "react-router-dom";
import classes from './Header.module.css';

type PropsType = {
    id: string | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    logoutCB: () => void
}
const Header = (props: PropsType) => {
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <img src="https://cdn.icon-icons.com/icons2/832/PNG/512/vk_icon-icons.com_66681.png" alt="logo"/>
                <div>
                    {props.isAuth ?
                        <div className={classes.login}>
                            <NavLink
                                activeClassName={classes.activeLink} to={'/login'}>
                                {props.login}
                            </NavLink>
                            <button onClick={props.logoutCB}>logout</button>
                        </div>
                        :
                        <>
                            <NavLink
                                activeClassName={classes.activeLink} to={'/login'}>
                                Login
                            </NavLink>
                        </>
                    }
                </div>
            </div>
        </header>
    )
}
export default Header