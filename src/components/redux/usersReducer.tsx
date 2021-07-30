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
export type FollowedACType = (id: string) => FollowedActionType
export type UnFollowedACType = (id: string) => UnFollowedActionType
export type SetUsersACType = (users: UsersType) => SetUsersActionType

let initialState = {
    users: [
        {
            id: v1(),
            url: 'https://i.pinimg.com/originals/20/fd/17/20fd17a202bf0326aa4bb88fa0a640a5.jpg',
            followed: false,
            fullName: 'Robert',
            status: 'i am a iron man',
            location: {city: 'Moscow', country: 'Russia'}
        }
    ]
}
export type InitialStateType = typeof initialState
export type UsersType = typeof initialState.users
export const UsersReducer = (state: InitialStateType = initialState, action: FollowedActionType | UnFollowedActionType | SetUsersActionType): InitialStateType => {
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
                users: [...state.users, ...action.users]
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