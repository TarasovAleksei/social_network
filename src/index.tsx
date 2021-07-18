import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import state, {
    addMessage,
    addPost,
    onChangeMessage,
    stateType,
    subscribe,
    updateNewPostText
} from "./components/redux/state";

const rerenderEntireTree = (state:stateType)=> {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} updateNewPostText={updateNewPostText} addPost={addPost} addMessage={addMessage} onChangeMessage={onChangeMessage} />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(state)
subscribe(rerenderEntireTree)


