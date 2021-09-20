import {createStore, combineReducers} from 'redux'
import {ProfileReducer} from "./profileReducer";
import {DialogsReducer} from "./dialogsReducer";
import {FriendsReducer} from "./friendsReducer";
import {UsersReducer} from "./usersReducer";
import {AuthReducer} from "./authReducer";
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {appReducer} from "./appReducer";

const rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    friendsPage: FriendsReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
    app: appReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>
let store = createStore(rootReducer, applyMiddleware(thunk))
export default store

