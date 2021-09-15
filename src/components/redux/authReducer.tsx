import {Dispatch} from "react";
import {API} from "../../api/api";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

export type InitialStateType = {
    id: string | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
}
type TotalActionType = setAuthUserDataType
type setAuthUserDataType = ReturnType<typeof setAuthUserData>
export const AuthReducer = (state: InitialStateType = initialState, action: TotalActionType): InitialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
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
                                isAuth: boolean,) => {
    return {
        type: 'SET_USER_DATA',
        payload: {
            id,
            email,
            login,
            isAuth,
        }
    }
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
        console.log(response)
        if (response.resultCode === 0) {
            dispatch(getAuthMeTC())
        }
    })
}
export const logOut = () => (dispatch: Dispatch<TotalActionType>) => {
    API.authAPI.Logout().then(response => {
        dispatch(setAuthUserData(null, null, null, false))
    })
}