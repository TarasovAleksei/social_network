import {Dispatch} from "redux";
import {getAuthMeTC} from "./authReducer";

let initialState = {
    initialized: false,
}

export const appReducer = (state = initialState, action: SetInitializedType): InitialStateType => {
    switch (action.type) {
        case 'SET_INITIALIZED':
            return {...state, initialized: true,}
        default:
            return state
    }
}

export const setInitialized = () => ({type: 'SET_INITIALIZED',} as const)
//Thunks
export const initializeApp = () => (dispatch: Dispatch<any>) => {
    const promise = dispatch(getAuthMeTC())
    Promise.all([promise]).then(() => {
        dispatch(setInitialized())
    })
}
//types
export type InitialStateType = typeof initialState
type SetInitializedType = ReturnType<typeof setInitialized>