const InitalError = {
    currentError: null,
}

let ErrorReducer = (state = InitalError, action) => {
    if(action.type === "error/user") {
        return {...state, currentError: action.payload};
    }
    return state;
}


export default ErrorReducer;