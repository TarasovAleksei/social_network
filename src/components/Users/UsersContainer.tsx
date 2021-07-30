import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType, dispatchType} from "../redux/redux-store";
import {followAC, setUsersAC, unfollowAC, UsersType} from "../redux/usersReducer";


const MapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users
    }
}
const MapDispatchToProps = (dispatch: dispatchType) => {
    return {
        onChangeFollow: (userID: string) => {
            dispatch(followAC(userID))
        },
        onChangeUnFollow: (userID: string) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: UsersType) => {
            dispatch(setUsersAC(users))
        }
    }

}


const UsersContainer = connect(MapStateToProps, MapDispatchToProps)(Users)
export default UsersContainer