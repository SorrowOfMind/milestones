const initState = {
    allPosts: [],
    currentPost: ''
};

const postReducer = (state = initState, action) => {
    switch(action.type){
        case 'FETCH_ALL':
            let fetchedPosts = action.payload;
            return {...state, allPosts: fetchedPosts};
        case 'CREATE_POST':
            return {...state, allPosts: [...state.allPosts, action.payload]};
        case 'EDIT_POST_ID':
            return {...state, currentPost: action.payload}
        case 'UPDATE_POST':
            let updatedPosts = state.allPosts.map(post => post._id === state.currentPost ? action.payload: post);
            return {...state, allPosts: updatedPosts}
        default:
            return state;
    }
}

export default postReducer;