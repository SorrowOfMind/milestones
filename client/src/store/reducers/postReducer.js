const initState = [];

const postReducer = (state = initState, action) => {
    switch(action.type){
        case 'FETCH_ALL':
            console.log(action.payload);
            return action.payload;
        case 'CREATE_POST':
            console.log(action.payload);
            return [...state, action.payload];
        default:
            return state;
    }
}

export default postReducer;