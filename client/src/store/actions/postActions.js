import * as api from '../../api';

export const getPosts = () => async (dispatch) => {
    try {
        const results = await api.fetchPosts();
        console.log(results)
        dispatch({type: 'FETCH_ALL', payload: results.data});
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = newPost => async (dispatch) => {
    try {
        const results = await api.createPost(newPost);
        dispatch({type: 'CREATE_POST', payload: results.data});
    } catch (error) {
        console.log(error.message);
    }
}
