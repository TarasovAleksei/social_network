import {createStore, combineReducers, applyMiddleware} from 'redux'
import {ProfileReducer} from "./profileReducer";
import {DialogsReducer} from "./dialogsReducer";
import {FriendsReducer} from "./friendsReducer";
import {UsersReducer} from "./usersReducer";
import {AuthReducer} from "./authReducer";
import thunk from 'redux-thunk';
import {appReducer} from "./appReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    friendsPage: FriendsReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
    app: appReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

// let store = createStore(rootReducer, applyMiddleware(thunk))
let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
export default store

