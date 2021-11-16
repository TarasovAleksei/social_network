import {Dispatch} from "react";
import {API} from "../../api/api";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    message: null,
    captchaUrl: null
}

export const AuthReducer = (state: InitialStateType = initialState, action: TotalActionType): InitialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
        case "SET_MESSAGES_LOGIN":
        case "SET_CAPTCHA_URL":
            return {...state, ...action.payload}
        default:
            return state
    }
}
//actions
export const setAuthUserData = (id: string | null,
                                email: string | null,
                                login: string | null,
                                isAuth: boolean) => ({
    type: 'SET_USER_DATA',
    payload: {id, email, login, isAuth,}
} as const)
export const setMessagesLogin = (message: string | null) => ({type: 'SET_MESSAGES_LOGIN', payload: {message}} as const)
export const setCaptchaUrlSuccess = (captchaUrl: string | null) => ({
    type: 'SET_CAPTCHA_URL',
    payload: {captchaUrl}
} as const)
//thunks
export const getAuthMeTC = () => async (dispatch: Dispatch<TotalActionType>) => {
    const response = await API.authAPI.getAuthMeAPI()
    if (response.data.resultCode === 0) {
        const {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}
export const loginIn = (email: string | null, password: string | null, rememberMe: boolean, captcha?:string|null) => async (dispatch: Dispatch<any>) => {

    const response = await API.authAPI.Login(email, password, rememberMe, captcha)
    const messages = response.data.messages
    if (response.data.resultCode === 0) {
        dispatch(getAuthMeTC())
        dispatch(setMessagesLogin(null))
    }
    else if(response.data.resultCode===10){
        dispatch(getCaptchaUrl())
    }
    else if (response.data.resultCode === 1) {
        dispatch(setMessagesLogin(messages[0]))
    }
}
export const getCaptchaUrl = () => async (dispatch: Dispatch<TotalActionType>) => {
    const response = await API.securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(setCaptchaUrlSuccess(captchaUrl))
}
export const logOut = () => async (dispatch: Dispatch<TotalActionType>) => {
    let response = await API.authAPI.Logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
        dispatch(setMessagesLogin(null))
    }
}
//types
export type InitialStateType = {
    id: string | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    message: string | null,
    captchaUrl: string | null
}
export type TotalActionType = setAuthUserDataType | setMessagesLoginType | setCaptchaUrlSuccessType
type setAuthUserDataType = ReturnType<typeof setAuthUserData>
type setMessagesLoginType = ReturnType<typeof setMessagesLogin>
type setCaptchaUrlSuccessType = ReturnType<typeof setCaptchaUrlSuccess>