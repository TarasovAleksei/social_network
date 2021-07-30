import {v1} from "uuid";
import {
    AddMessageActionType, addMessageACType,
    AddPostActionType,
    dialogsPageType,
    messageType, OnChangeMessageActionType, onChangeMessageACType,
    UpdateNewPostTextActionType
} from "./redux-store";

let initialState =
    {
        dialogs: [
            {
                id: v1(),
                name: 'Dimych',
                url: 'https://ict2go.ru/uploads/media/speakers_lid_image/0001/29/thumb_28624_speakers_lid_image_big.jpeg'
            },
            {
                id: v1(),
                name: 'Sheldon',
                url: 'https://www.toledoblade.com/image/2015/01/29/ca939,66,2036,1753/People-Jim-Parsons.jpg'
            },
            {id: v1(), name: 'Penny', url: 'https://vsthemes.org/uploads/posts/2018-11/73024b2b44_kaley-cuoco.jpg'},
            {
                id: v1(),
                name: 'Emy',
                url: 'https://pagesix.com/wp-content/uploads/sites/3/2015/04/spl936619_028_105055833.jpg?quality=90&amp;strip=all&amp;w=680&amp;h=356&amp;crop=1g'
            },
            {
                id: v1(),
                name: 'Radj',
                url: 'https://img.buzzfeed.com/buzzfeed-static/static/2017-03/27/11/asset/buzzfeed-prod-fastlane-01/sub-buzz-4277-1490629170-2.jpg'
            },
            {id: v1(), name: 'Howard', url: 'https://www.film.ru/sites/default/files/people/1565430-815776.jpg'},
        ],
        messages: [
            {id: v1(), message: 'Hi'},
            {id: v1(), message: 'How are you'},
            {id: v1(), message: 'What is up?'}
        ],
        newMessage: ''
    }

export const DialogsReducer = (state: dialogsPageType = initialState, action: AddPostActionType | UpdateNewPostTextActionType | AddMessageActionType | OnChangeMessageActionType) => {

    switch (action.type) {
        case "ADD-MESSAGE": {
            let newMessageEl: messageType = {
                id: v1(),
                message: state.newMessage
            }

            return {
                ...state,
                messages:
                    [...state.messages, newMessageEl],
                newMessage: ''
            }

        }
        case "ON-CHANGE-MESSAGE":
            return {
                ...state,
                newMessage: action.newMessage
            }
        default:
            return state
    }

}


export const addMessageAC: addMessageACType = () => {
    return {
        type: 'ADD-MESSAGE'
    }
}
export const onChangeMessageAC: onChangeMessageACType = (newMessage: string) => {
    return {
        type: 'ON-CHANGE-MESSAGE',
        newMessage: newMessage
    }
}