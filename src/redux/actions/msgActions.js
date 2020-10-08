export const addMsg = (data) => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();
        firestore.collection('messages').add({
            ...data,
            time: new Date()
        })
        .then(() => {
            dispatch({
                type: 'to_do',
            })
        })
    }
}