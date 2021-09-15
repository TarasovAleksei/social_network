import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {
    followTC,
    getUsersTC,
    InitialStateType,
    unFollowTC,
} from "../redux/usersReducer";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";


export const UsersContainer = () => {
    const {
        users,
        pageSize,
        totalCount,
        currentPage,
        isFetching,
        followingInProgress,
    } = useSelector<AppStateType, InitialStateType>((state: AppStateType) => state.usersPage)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUsersTC(currentPage, pageSize))
    }, [dispatch, currentPage, pageSize])

    const onPageChanged = (pageNumber: number) => {
        dispatch(getUsersTC(pageNumber, pageSize))
    }
    const followCallback = (userId: string) => {
        dispatch(unFollowTC(userId))
    }
    const unFollowCallback = (userId: string) => {
        dispatch(followTC(userId))
    }

    return <>
        {isFetching ? <Preloader/> : <Users
            users={users}
            pageSize={pageSize}
            totalCount={totalCount}
            currentPage={currentPage}
            followCallback={followCallback}
            unFollowCallback={unFollowCallback}
            onPageChanged={onPageChanged}
            followingInProgress={followingInProgress}
        />}

    </>
}