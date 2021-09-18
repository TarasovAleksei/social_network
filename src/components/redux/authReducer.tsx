import {Dispatch} from "react";
import {API} from "../../api/api";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    message: null,
}

export type InitialStateType = {
    id: string | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    message: string | null
}
type TotalActionType = setAuthUserDataType | setMessagesLoginType
type setAuthUserDataType = ReturnType<typeof setAuthUserData>
type setMessagesLoginType = ReturnType<typeof setMessagesLogin>
export const AuthReducer = (state: InitialStateType = initialState, action: TotalActionType): InitialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
        case "SET_MESSAGES_LOGIN":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
//actions
export const setAuthUserData = (id: string | null,
                                email: string | null,
                                login: string | null,
                                isAuth: boolean) => {
    return {
        type: 'SET_USER_DATA',
        payload: {
            id,
            email,
            login,
            isAuth,
        } as const
    }
}

export const setMessagesLogin = (message: string | null) => {
    return {
        type: 'SET_MESSAGES_LOGIN',
        payload: {message}
    } as const

}
//thunks
export const getAuthMeTC = () => (dispatch: Dispatch<TotalActionType>) => {
    API.authAPI.getAuthMeAPI().then(response => {
        const {id, email, login} = response.data.data
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(id, email, login, true))
        }
    })
}
export const loginIn = (email: string | null, password: string | null, rememberMe: boolean) => (dispatch: any) => {
    API.authAPI.Login(email, password, rememberMe).then(response => {
        const {messages} = response
        if (response.resultCode === 0) {
            dispatch(getAuthMeTC())
            dispatch(setMessagesLogin(null))
        } else if (response.resultCode === 1) {
            dispatch(setMessagesLogin(messages[0]))
        }
    })
}
export const logOut = () => (dispatch: Dispatch<TotalActionType>) => {
    API.authAPI.Logout().then(response => {
        dispatch(setAuthUserData(null, null, null, false))
        dispatch(setMessagesLogin(null))
    })
}