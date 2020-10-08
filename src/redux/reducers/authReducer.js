const initState = {
    test: 'qweqwq'
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOGIN":
            console.log('login success')
            return state;
        case "REGISTER":
            console.log('register success')
            return state;
        case "LOGOUT":
            console.log('logout success')
            return state;
        default:
            return state;
    }
}

export default authReducer