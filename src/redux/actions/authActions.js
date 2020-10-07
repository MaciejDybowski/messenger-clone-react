export const register = (user) => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore(); // odwołanie do firestore
        const firebase = getFirebase(); // odwołanie do usług firebas

        firebase.auth().createUserWithEmailAndPassword( // tworzymy nowego usera w firebase
            user.email,
            user.password
        )
            .then((data) => {
                firestore.collection('users').doc(data.user.uid).set({
                    firstName: user.firstName,
                    lastName: user.lastName,

                })
            })
            .then(() => dispatch({ type: "REGISTER" }))
    }
}

export const login = (credentials) => {
    // credentials to podane przez uzytkownika dane z formularza
        return (dispatch, getState, { getFirebase }) => {
            const firebase = getFirebase(); // podłaczenie do uslugi
            firebase.auth().signInWithEmailAndPassword( // dostepna metoda z API
                credentials.email,
                credentials.password,
    
            ).then(() => {
                dispatch({ type: "LOGIN" })
            })
        }
    }