import { combineReducers } from 'redux';
import { postReducer, newPostReducer } from './postReducer';

export default combineReducers({
    posts: postReducer,
    // newPost: newPostReducer
})