const initialState = {
    moviesCount: 0
}

export const movieReducer = (state = initialState, action) => {
    console.log(movieReducer);
    switch (action.type) {
        case 'INCREMENT':
            return {...state, moviesCount: state.moviesCount + 1}
        default:
            return state
    }
}