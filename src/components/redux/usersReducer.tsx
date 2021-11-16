import {Dispatch} from "react";
import {API} from "../../api/api";

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
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: true} : u),}
        case ('UNFOLLOW') :
            return {
                ...state, users: state.users.map(u => u.id === action.id ? {...u, followed: false} : u)
            }
        case'SET_USERS':
        case 'SET_CURRENT_PAGE':
        case "SET_TOTAL_USERS_COUNT":
        case "SET_TOGGLE_FETCHING":
            return {
                ...state, ...action.payload
            }
        case "SET_FOLLOWING_IN_PROGRESS":
            return {
                ...state, followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(f => f !== action.id)
            }
        default:
            return state
    }
}
//actions
export const onChangeFollow = (id: string) => ({type: 'FOLLOW', id} as const)
export const onChangeUnFollow = (id: string) => ({type: 'UNFOLLOW', id} as const)
export const setUsers = (users: UserType[]) => ({type: 'SET_USERS', payload: {users}} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', payload: {currentPage}} as const)
export const setTotalUsersCount = (totalCount: number) => ({type: 'SET_TOTAL_USERS_COUNT', payload: {totalCount}}as const)
export const setToggleFetching = (isFetching: boolean) => ({type: "SET_TOGGLE_FETCHING", payload: {isFetching}} as const)
export const setFollowingInProgress = (isFetching: boolean, id: string) => ({type: "SET_FOLLOWING_IN_PROGRESS", id, isFetching} as const)

//thunks
const followUnfollowFlow = async (id: string, dispatch: Dispatch<totalActionType>, apiMethod: any, actionCreator: FollowedActionType | UnFollowedActionType) => {
    dispatch(setFollowingInProgress(true, id))
    let response = await apiMethod(id)
    if (response.data.resultCode === 0) dispatch(actionCreator)
    dispatch(setFollowingInProgress(false, id))
}
export const getUsersTC = (currentPage: number, pageSize: number) => async (dispatch: Dispatch<totalActionType>) => {
    dispatch(setToggleFetching(true))
    let response = await API.usersAPI.getUsersAPI(currentPage, pageSize)
    dispatch(setToggleFetching(false))
    dispatch(setUsers(response.data.items))
    dispatch(setCurrentPage(currentPage))
    dispatch(setTotalUsersCount(response.data.totalCount))
}
export const followTC = (id: string) => async (dispatch: Dispatch<totalActionType>) => {
    const apiMethod = await API.usersAPI.setUnfollowAPI
    followUnfollowFlow(id, dispatch, apiMethod, onChangeUnFollow(id))
}
export const unFollowTC = (id: string) => async (dispatch: Dispatch<totalActionType>) => {
    const apiMethod = await API.usersAPI.setFollowAPI
    followUnfollowFlow(id, dispatch, apiMethod, onChangeFollow(id))
}
//types
export type SetUsersActionType = ReturnType<typeof setUsers>
export type FollowedActionType = ReturnType<typeof onChangeFollow>
export type UnFollowedActionType = ReturnType<typeof onChangeUnFollow>
export type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>
export type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>
export type SetToggleFetchingActionType = ReturnType<typeof setToggleFetching>
export type SetFollowingInProgressType = ReturnType<typeof setFollowingInProgress>
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