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
    payload: { totalUsersCount: number }
}
export type SetToggleFetchingActionType = {
    type: "SET_TOGGLE_FETCHING",
    payload: { isFetching: boolean }
}
export type totalActionType =
    FollowedActionType
    | UnFollowedActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalUsersCountActionType
    | SetToggleFetchingActionType
export type InitialStateType = {
    users: UserType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
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
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
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
    }
    return state
}

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
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => {
    return {
        type: 'SET_TOTAL_USERS_COUNT',
        payload: {totalUsersCount}
    }
}
export const setToggleFetching = (isFetching: boolean): SetToggleFetchingActionType => {
    return {
        type: "SET_TOGGLE_FETCHING",
        payload: {isFetching}
    }
}