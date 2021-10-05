import React from "react";
import {NavLink} from "react-router-dom";
import classes from "../Dialogs.module.css";

type PropsType = {
    id: string
    name: string,
    url: string
}
const DialogItem = React.memo((props: PropsType) => {
    let path = `/dialogs/${props.id}`
    return (
        <div className={classes.item}>
            <NavLink activeClassName={classes.activeLink} to={path}>
                <div className={classes.itemUser}>
                    <img src={props.url}/>
                    <span className={classes.name}>{props.name}</span>
                </div>
            </NavLink>
        </div>
    )
})

export default DialogItem