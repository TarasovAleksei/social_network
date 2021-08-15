import {v1} from "uuid";

export type SetUsersActionType = {
    type: "SET_USERS",
    users: UsersType
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
    currentPage: number
}
export type SetTotalUsersCountActionType = {
    type: "SET_TOTAL_USERS_COUNT",
    totalUsersCount: number
}
export type FollowedACType = (id: string) => FollowedActionType
export type UnFollowedACType = (id: string) => UnFollowedActionType
export type SetUsersACType = (users: UsersType) => SetUsersActionType
export type SetCurrentPageACType = (currentPage: number)=>SetCurrentPageActionType
export type SetTotalUsersCountACType = (totalUsersCount: number)=>SetTotalUsersCountActionType
export type totalActionType = FollowedActionType | UnFollowedActionType | SetUsersActionType | SetCurrentPageActionType | SetTotalUsersCountActionType
export type InitialStateType = typeof initialState
export type UsersType = typeof initialState.users

let initialState = {
    users: [
        {
            id: v1(),
            photos: {
                small: 'https://i.pinimg.com/originals/20/fd/17/20fd17a202bf0326aa4bb88fa0a640a5.jpg',
                large: null
            },
            followed: false,
            name: 'Robert',
            status: 'i am a iron man',
            location: {city: 'Moscow', country: 'Russia'}
        }
    ],
    pageSize: 5,
    totalUsersCount:0,
    currentPage: 1
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
        case('SET_USERS'):
            return {
                ...state,
                users: [ ...action.users]
            }
        case ('SET_CURRENT_PAGE'):
            return {
                ...state,
                currentPage: action.currentPage
            }
        case ("SET_TOTAL_USERS_COUNT"): {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
    }
    return state
}

export const followAC: FollowedACType = (id: string) => {
    return {
        type: 'FOLLOW',
        id: id
    }

}
export const unfollowAC: UnFollowedACType = (id: string) => {
    return {
        type: 'UNFOLLOW',
        id: id
    }
}
export const setUsersAC: SetUsersACType = (users: UsersType) => {
    return {
        type: 'SET_USERS',
        users: users
    }

}
export const setCurrentPageAC:SetCurrentPageACType = (currentPage: number)=>{
    return {
        type: 'SET_CURRENT_PAGE',
        currentPage: currentPage
    }
}
export const setTotalUsersCountAC:SetTotalUsersCountACType = (totalUsersCount: number)=>{
    return {
        type: 'SET_TOTAL_USERS_COUNT',
        totalUsersCount: totalUsersCount
    }
}