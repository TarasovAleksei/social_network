import { v1 } from "uuid";
import {friendsPageType} from "./redux-store";
let initialState = {
    friends: [
        {
            id: v1(),
            name: 'Johnny',
            url: 'http://almode.ru/uploads/posts/2020-07/1593623044_12-p-dzhonni-galeki-16.jpg'
        },
        {
            id: v1(),
            name: 'Melissa',
            url: 'https://i.pinimg.com/originals/c6/9c/f4/c69cf4a6e3f5766cc7acc3946bb1bb4a.jpg'
        },
        {id: v1(), name: 'Wil', url: 'https://vistapointe.net/images/wil-wheaton-wallpaper-13.jpg'},
    ]
}

export const FriendsReducer = (state:friendsPageType=initialState, action:any)=>{
    return state
}