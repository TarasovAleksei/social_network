let rerenderEntireTree = (state:stateType)=>{
    console.log('state was changed')
}
type rerenderEntireTreeType = (state:stateType)=>void
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
    newPost: string
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
    usersPage:any
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
export type updateNewPostTextType = (newPostText: postMessageType)=>void
export type onChangeMessageType = (newMessage:string)=>void
let state: stateType = {
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
        newPost: '',
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
    usersPage: {
    }
}
export const addPost: addPostType = () => {
    let newPostText: newPostType = {
        id: 5,
        post: state.profilePage.newPost,
        likeCount: 0,
        url: "https://avatars.mds.yandex.net/get-zen_doc/1686199/pub_5e3e6d88e6e8eb5b95da89cf_5e3e6e6b6ffb5072de613bf5/scale_1200"
    }
    state.profilePage.posts.push(newPostText)
    state.profilePage.newPost = ''
    rerenderEntireTree(state)
}
export const updateNewPostText = (newPostText: postMessageType) => {
    state.profilePage.newPost = newPostText
    rerenderEntireTree(state)
}
export const addMessage: addMessageType = () => {
    let newMessageEl: messageType = {
        id: 4,
        message: state.dialogsPage.newMessage
    }
    state.dialogsPage.messages.push(newMessageEl)
    state.dialogsPage.newMessage=''
    rerenderEntireTree(state)
}
export const onChangeMessage=(newMessage:string)=>{
    state.dialogsPage.newMessage=newMessage
    rerenderEntireTree(state)
}
export const subscribe=(observer:rerenderEntireTreeType)=>{
rerenderEntireTree=observer
}

export default state