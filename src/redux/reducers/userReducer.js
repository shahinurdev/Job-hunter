const initialState = {
    user: {}
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN" : {
            const newState = {
                ...state,
                user:  action.payload
            }
            return newState;
        }
        default : {
            return state;
        }
    }
}

export default userReducer;