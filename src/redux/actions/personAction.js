export const setUserAction = (userId) => {
    return (dispatch, getState, { getFirebase }) => {
        dispatch({
            type: "SET_USER",
            uid: userId
        })
    }
}