

const personReducer = (state = {uid:'dummydata'}, action) => {
    switch (action.type) {
        case "SET_USER":
            state.uid = action.uid;
            return state;
        default:
            return state;
    }
}

export default personReducer;