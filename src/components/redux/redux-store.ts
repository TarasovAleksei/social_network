import {createStore, combineReducers} from 'redux'
import {ProfileReducer} from "./profileReducer";
import {DialogsReducer} from "./dialogsReducer";
import {FriendsReducer} from "./friendsReducer";
import {UsersReducer} from "./usersReducer";

const rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    friendsPage: FriendsReducer,
    usersPage: UsersReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
let store = createStore(rootReducer)
export default store

