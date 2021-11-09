import {addPostAC, deletePostAC, ProfileReducer, ProfileType, StatusType} from "./profileReducer";
import {v1} from "uuid";

test('post should be added', ()=>{
    let initialState = {
        posts: [
            {
                id: v1(),
                post: 'Hello',
                likeCount: 10,
                url: "https://avatars.mds.yandex.net/get-zen_doc/1686199/pub_5e3e6d88e6e8eb5b95da89cf_5e3e6e6b6ffb5072de613bf5/scale_1200"
            },
            {
                id: v1(),
                post: 'My name is Alex',
                likeCount: 20,
                url: "https://avatars.mds.yandex.net/get-zen_doc/1686199/pub_5e3e6d88e6e8eb5b95da89cf_5e3e6e6b6ffb5072de613bf5/scale_1200"
            },
            {
                id: v1(),
                post: 'Where are you from?',
                likeCount: 30,
                url: "https://avatars.mds.yandex.net/get-zen_doc/1686199/pub_5e3e6d88e6e8eb5b95da89cf_5e3e6e6b6ffb5072de613bf5/scale_1200"
            },
        ],
        profile: {} as ProfileType,
        status: '' as StatusType,
        isMe: false,
    }
    const action = addPostAC('newPost')
    const state = ProfileReducer(initialState, action)

    expect(state.posts[3].post).toBe('newPost')
})
test('post should be deleted', ()=>{
    let initialState = {
        posts: [
            {
                id: '1',
                post: 'Hello',
                likeCount: 10,
                url: "https://avatars.mds.yandex.net/get-zen_doc/1686199/pub_5e3e6d88e6e8eb5b95da89cf_5e3e6e6b6ffb5072de613bf5/scale_1200"
            },
            {
                id: '2',
                post: 'My name is Alex',
                likeCount: 20,
                url: "https://avatars.mds.yandex.net/get-zen_doc/1686199/pub_5e3e6d88e6e8eb5b95da89cf_5e3e6e6b6ffb5072de613bf5/scale_1200"
            },
            {
                id: '3',
                post: 'Where are you from?',
                likeCount: 30,
                url: "https://avatars.mds.yandex.net/get-zen_doc/1686199/pub_5e3e6d88e6e8eb5b95da89cf_5e3e6e6b6ffb5072de613bf5/scale_1200"
            },
        ],
        profile: {} as ProfileType,
        status: '' as StatusType,
        isMe: false,
    }
    const action = deletePostAC('1')
    const state = ProfileReducer(initialState, action)

    expect(state.posts.length).toBe(2)
    expect(state.posts[0].id).toBe('2')
})