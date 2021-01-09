import {FETCH_ALL, CREATE_POST, UPDATE_POST, DELETE_POST, LIKE_POST, EDIT_POST_ID} from '../actions/types';

const initState = {
    allPosts: [],
    currentPost: ''
};

const postReducer = (state = initState, action) => {
    switch(action.type){
        case FETCH_ALL:
            return {...state, allPosts: action.payload};
        case CREATE_POST:
            return {...state, allPosts: [...state.allPosts, action.payload]};
        case EDIT_POST_ID:
            return {...state, currentPost: action.payload}
        case UPDATE_POST:
        case LIKE_POST:
            let updatedPosts = state.allPosts.map(post => post._id === action.payload._id ? action.payload: post);
            return {...state, allPosts: updatedPosts, currentPost: ''};
        case DELETE_POST:
            let filteredPosts = state.allPosts.filter(post => post._id !== action.payload);
            return {...state, allPosts: filteredPosts};
        default:
            return state;
    }
}

export default postReducer;