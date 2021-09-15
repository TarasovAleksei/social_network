import {Dispatch} from "react";
import {API} from "../../api/api";

export type SetUsersActionType = {
    type: "SET_USERS",
    payload: { users: UserType[] }
}
export type FollowedActionType = {
    type: 'FOLLOW',
    id: string
}
export type UnFollowedActionType = {
    type: 'UNFOLLOW',
    id: string
}
export type SetCurrentPageActionType = {
    type: 'SET_CURRENT_PAGE',
    payload: { currentPage: number }
}
export type SetTotalUsersCountActionType = {
    type: "SET_TOTAL_USERS_COUNT",
    payload: { totalCount: number }
}
export type SetToggleFetchingActionType = {
    type: "SET_TOGGLE_FETCHING",
    payload: { isFetching: boolean }
}
export type SetFollowingInProgressType = {
    type: "SET_FOLLOWING_IN_PROGRESS",
    id: string,
    isFetching: boolean,
}
export type totalActionType =
    FollowedActionType
    | UnFollowedActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalUsersCountActionType
    | SetToggleFetchingActionType
    | SetFollowingInProgressType
export type InitialStateType = {
    users: UserType[],
    pageSize: number,
    totalCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: string[],
}
export type UserType = {
    name: string,
    id: string,
    photos: {
        small: null | string,
        large: null | string
    },
    status: null | string,
    followed: boolean
}


let initialState = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const UsersReducer = (state: InitialStateType = initialState, action: totalActionType): InitialStateType => {
    switch (action.type) {
        case ('FOLLOW') :
            return {
                ...state,
                users: state.users.map(u => u.id === action.id ? {...u, followed: true} : u),
            }
        case ('UNFOLLOW') :
            return {
                ...state,
                users: state.users.map(u => u.id === action.id ? {...u, followed: false} : u)
            }
        case'SET_USERS':
        case 'SET_CURRENT_PAGE':
        case "SET_TOTAL_USERS_COUNT":
        case "SET_TOGGLE_FETCHING":
            return {
                ...state,
                ...action.payload
            }
        case "SET_FOLLOWING_IN_PROGRESS":
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(f => f !== action.id)
            }
    }
    return state
}
//actions
export const onChangeFollow = (id: string): FollowedActionType => {
    return {
        type: 'FOLLOW',
        id: id
    }

}
export const onChangeUnFollow = (id: string): UnFollowedActionType => {
    return {
        type: 'UNFOLLOW',
        id: id
    }
}
export const setUsers = (users: UserType[]): SetUsersActionType => {
    return {
        type: 'SET_USERS',
        payload: {users}
    }

}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => {
    return {
        type: 'SET_CURRENT_PAGE',
        payload: {currentPage}
    }
}
export const setTotalUsersCount = (totalCount: number): SetTotalUsersCountActionType => {
    return {
        type: 'SET_TOTAL_USERS_COUNT',
        payload: {totalCount}
    }
}
export const setToggleFetching = (isFetching: boolean): SetToggleFetchingActionType => {
    return {
        type: "SET_TOGGLE_FETCHING",
        payload: {isFetching}
    }
}
export const setFollowingInProgress = (isFetching: boolean, id: string): SetFollowingInProgressType => {
    return {
        type: "SET_FOLLOWING_IN_PROGRESS",
        id,
        isFetching
    }
}

//thunks
export const getUsersTC = (currentPage: number, pageSize: number) => (dispatch:Dispatch<totalActionType>) => {
    dispatch(setToggleFetching(true))
    API.usersAPI.getUsersAPI(currentPage, pageSize).then(response => {
        dispatch(setToggleFetching(false))
        dispatch(setUsers(response.items))
        dispatch(setCurrentPage(currentPage))
        dispatch(setTotalUsersCount(response.totalCount / 100))
    })
}
export const followTC = (id: string) => (dispatch: Dispatch<totalActionType>) => {
    dispatch(setFollowingInProgress(true, id))
    API.usersAPI.setUnfollowAPI(id).then(response => {
        if (response.resultCode === 0) dispatch(onChangeUnFollow(id))
        dispatch(setFollowingInProgress(false, id))
    })
}
export const unFollowTC = (id: string) => (dispatch: Dispatch<totalActionType>) => {
    dispatch(setFollowingInProgress(true, id))
    API.usersAPI.setFollowAPI(id).then(response => {
        if (response.resultCode === 0) dispatch(onChangeFollow(id))
        dispatch(setFollowingInProgress(false, id))
    })
}
