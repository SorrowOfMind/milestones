import * as api from '../../api';
import {FETCH_ALL, CREATE_POST, UPDATE_POST, DELETE_POST, LIKE_POST} from './types';

export const getPosts = () => async dispatch => {
    try {
        const results = await api.fetchPosts();
        dispatch({type: FETCH_ALL, payload: results.data});
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = newPost => async dispatch => {
    try {
        const results = await api.createPost(newPost);
        dispatch({type: CREATE_POST, payload: results.data});
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePost = (id, post) => async dispatch => {
    try {
        const results = await api.editPost(id, post);
        dispatch({type: UPDATE_POST, payload: results.data});
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePost = id => async dispatch => {
    try {
        await api.deletePost(id);
        dispatch({type: DELETE_POST, payload: id});
    } catch (error) {
        console.log(error.message);
    }
}

export const likePost = id => async dispatch => {
    try {
        const results = await api.likePost(id);
        dispatch({type: LIKE_POST, payload: results.data});
    } catch (error) {
        console.log(error.message);
    }
}