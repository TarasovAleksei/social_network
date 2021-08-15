import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType, dispatchType} from "../redux/redux-store";
import {
    followAC,
    InitialStateType,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UsersType
} from "../redux/usersReducer";


const MapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage:(currentPage:number)=>{
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount: number)=>{
            dispatch(setTotalUsersCountAC(totalUsersCount))
        }
    }

}

export const UsersContainer = connect(MapStateToProps, MapDispatchToProps)(Users)