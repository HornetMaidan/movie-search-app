const initialState = {
    username: 'username'
}

export const nameReducer = (state = initialState, action) => {
    console.log(nameReducer);
    switch (action.type) {
        case 'CHANGE_NAME':
            return {...state, username: state.username}
        default:
            return state;
    }
}
