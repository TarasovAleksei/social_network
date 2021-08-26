import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {
    InitialStateType, onChangeFollow, onChangeUnFollow, setCurrentPage, setToggleFetching, setTotalUsersCount, setUsers,
} from "../redux/usersReducer";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {withRouter} from "react-router-dom";

export const UsersContainer = () => {
    const {
        users,
        pageSize,
        totalUsersCount,
        currentPage,
        isFetching
    } = useSelector<AppStateType, InitialStateType>((state: AppStateType) => state.usersPage)
    const dispatch = useDispatch()
        useEffect(() => {
        dispatch(setToggleFetching(true))
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                dispatch(setToggleFetching(false))
                dispatch(setUsers(response.data.items))
                dispatch(setTotalUsersCount(response.data.totalCount / 100))
            })
    }, [dispatch])

    const onPageChanged = (pageNumber: number) => {
        dispatch(setToggleFetching(true))
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                dispatch(setUsers(response.data.items))
                dispatch(setToggleFetching(false))
                dispatch(setCurrentPage(pageNumber))
            })
    }
    const followCallback = (userId: string) => {
        dispatch(onChangeFollow(userId))
    }
    const unFollowCallback = (userId: string) => {
        dispatch(onChangeUnFollow(userId))
    }

    return <>
        {isFetching ? <Preloader/> : null}
        <Users
            users={users}
            pageSize={pageSize}
            totalUsersCount={totalUsersCount}
            currentPage={currentPage}
            onChangeFollow={followCallback}
            onChangeUnFollow={unFollowCallback}
            setUsers={setUsers}
            setCurrentPage={setCurrentPage}
            setTotalUsersCount={setTotalUsersCount}
            onPageChanged={onPageChanged}
        />
    </>

}

//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching
//     }
// }

// const
//     MapDispatchToProps = (dispatch: (action: totalActionType) => void) => {
//         return {
//             onChangeFollow: (userID: string) => {
//                 dispatch(followAC(userID))
//             },
//             onChangeUnFollow: (userID: string) => {
//                 dispatch(unfollowAC(userID))
//             },
//             setUsers: (users: UserType[]) => {
//                 dispatch(setUsersAC(users))
//             },
//             setCurrentPage: (currentPage: number) => {
//                 dispatch(setCurrentPageAC(currentPage))
//             },
//             setTotalUsersCount: (totalUsersCount: number) => {
//                 dispatch(setTotalUsersCountAC(totalUsersCount))
//             },
//             setToggleFetching: (isFetching: boolean) => {
//                 dispatch(setToggleFetchingAC(isFetching))
//             }
//         }
//
//     }

