export type getStateType = () => stateType
export type rerenderEntireTreeType = () => void
export type dispatchType = (action: AddPostActionType | UpdateNewPostTextActionType | AddMessageActionType | OnChangeMessageActionType)=>void
export type subscribeType = (rerenderEntireTree: rerenderEntireTreeType) => void
export type addPostACType = ()=>AddPostActionType
export type updateNewPostTextACType = (newPostText: string)=>UpdateNewPostTextActionType
export type addMessageACType = ()=>AddMessageActionType
export type onChangeMessageACType = (newMessage:string)=>OnChangeMessageActionType
export type AddPostActionType = {
    type: 'ADD-POST',
}
export type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST-TEXT",
    newPostText: string
}
export type AddMessageActionType = {
    type:'ADD-MESSAGE'
}
export type OnChangeMessageActionType = {
    type:'ON-CHANGE-MESSAGE',
    newMessage: string
}


export type postType = {
    id: number,
    post: string,
    likeCount: number,
    url: string
}
export type dialogType = {
    id: number,
    name: string,
    url: string
}
export type messageType = {
    id: number,
    message: string
}
export type friendsType = {
    id: number,
    name: string,
    url: string
}
export type profilePageType = {
    posts: postType[],
    newPostText: string
}
export type dialogsPageType = {
    dialogs: dialogType[],
    messages: messageType[],
    newMessage: newMessageType
}
export type friendsPageType = {
    friends: friendsType[]
}
export type stateType = {
    profilePage: profilePageType,
    dialogsPage: dialogsPageType,
    friendsPage: friendsPageType,
}
type newPostType = {
    id: number,
    post: postMessageType,
    likeCount: number,
    url: string
}
type postMessageType = string
type newMessageType = string
export type addPostType = () => void
export type addMessageType = () => void
export type updateNewPostTextType = (newPostText: postMessageType) => void
export type onChangeMessageType = (newMessage: string) => void
export type Storetype = {
    _state: stateType,
    getState: getStateType,
    dispatch: dispatchType,
    subscribe: subscribeType,
    rerenderEntireTree: rerenderEntireTreeType
}
export const store: Storetype = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    post: 'Hello',
                    likeCount: 10,
                    url: "https://avatars.mds.yandex.net/get-zen_doc/1686199/pub_5e3e6d88e6e8eb5b95da89cf_5e3e6e6b6ffb5072de613bf5/scale_1200"
                },
                {
                    id: 2,
                    post: 'My name is Alex',
                    likeCount: 20,
                    url: "https://avatars.mds.yandex.net/get-zen_doc/1686199/pub_5e3e6d88e6e8eb5b95da89cf_5e3e6e6b6ffb5072de613bf5/scale_1200"
                },
                {
                    id: 3,
                    post: 'Where are you from?',
                    likeCount: 30,
                    url: "https://avatars.mds.yandex.net/get-zen_doc/1686199/pub_5e3e6d88e6e8eb5b95da89cf_5e3e6e6b6ffb5072de613bf5/scale_1200"
                },
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: 'Dimych',
                    url: 'https://ict2go.ru/uploads/media/speakers_lid_image/0001/29/thumb_28624_speakers_lid_image_big.jpeg'
                },
                {
                    id: 2,
                    name: 'Sheldon',
                    url: 'https://www.toledoblade.com/image/2015/01/29/ca939,66,2036,1753/People-Jim-Parsons.jpg'
                },
                {id: 3, name: 'Penny', url: 'https://vsthemes.org/uploads/posts/2018-11/73024b2b44_kaley-cuoco.jpg'},
                {
                    id: 4,
                    name: 'Emy',
                    url: 'https://pagesix.com/wp-content/uploads/sites/3/2015/04/spl936619_028_105055833.jpg?quality=90&amp;strip=all&amp;w=680&amp;h=356&amp;crop=1g'
                },
                {
                    id: 5,
                    name: 'Radj',
                    url: 'https://img.buzzfeed.com/buzzfeed-static/static/2017-03/27/11/asset/buzzfeed-prod-fastlane-01/sub-buzz-4277-1490629170-2.jpg'
                },
                {id: 6, name: 'Howard', url: 'https://www.film.ru/sites/default/files/people/1565430-815776.jpg'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you'},
                {id: 3, message: 'What is up?'}
            ],
            newMessage: ''
        },
        friendsPage: {
            friends: [
                {
                    id: 1,
                    name: 'Johnny',
                    url: 'http://almode.ru/uploads/posts/2020-07/1593623044_12-p-dzhonni-galeki-16.jpg'
                },
                {
                    id: 2,
                    name: 'Melissa',
                    url: 'https://i.pinimg.com/originals/c6/9c/f4/c69cf4a6e3f5766cc7acc3946bb1bb4a.jpg'
                },
                {id: 3, name: 'Wil', url: 'https://vistapointe.net/images/wil-wheaton-wallpaper-13.jpg'},
            ]
        },
    },
    getState() {
        return this._state
    },
    rerenderEntireTree() {
        console.log('state was changed')
    },
    subscribe(observer: rerenderEntireTreeType) {
        this.rerenderEntireTree = observer
    },
    dispatch(action) {
        switch (action.type) {
            case "ADD-POST":
                let newPost: newPostType = {
                    id: 5,
                    post: this._state.profilePage.newPostText,
                    likeCount: 0,
                    url: "https://avatars.mds.yandex.net/get-zen_doc/1686199/pub_5e3e6d88e6e8eb5b95da89cf_5e3e6e6b6ffb5072de613bf5/scale_1200"
                }
                this._state.profilePage.posts.push(newPost)
                this._state.profilePage.newPostText = ''
                this.rerenderEntireTree()
                break;
            case "UPDATE-NEW-POST-TEXT":
                this._state.profilePage.newPostText = action.newPostText
                this.rerenderEntireTree()
                break;
            case "ADD-MESSAGE":
                let newMessageEl: messageType = {
                    id: 4,
                    message: this._state.dialogsPage.newMessage
                }
                this._state.dialogsPage.messages.push(newMessageEl)
                this._state.dialogsPage.newMessage = ''
                this.rerenderEntireTree()
                break;
            case "ON-CHANGE-MESSAGE":
                this._state.dialogsPage.newMessage = action.newMessage
                this.rerenderEntireTree()
                break;
        }
    }
}

export const addPostAC:addPostACType = ()=> {
    return {
        type: 'ADD-POST',
    }
}
export const updateNewPostTextAC:updateNewPostTextACType = (newPostText: string)=>{
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newPostText: newPostText
    }
}
export const addMessageAC:addMessageACType = ()=> {
    return {
        type: 'ADD-MESSAGE'
    }
}
export const onChangeMessageAC:onChangeMessageACType = (newMessage:string)=> {
    return {
        type: 'ON-CHANGE-MESSAGE',
        newMessage: newMessage
    }
}



