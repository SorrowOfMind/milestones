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
        case 'RESET_POST_ID':
            return {...state, currentPost: ''}
        case 'UPDATE_POST':
            let updatedPosts = state.allPosts.map(post => post._id === action.payload._id ? action.payload: post);
            return {...state, allPosts: updatedPosts};
        case 'DELETE_POST':
            let filteredPosts = state.allPosts.filter(post => post._id !== action.payload);
            return {...state, allPosts: filteredPosts};
        default:
            return state;
    }
}

export default postReducer;