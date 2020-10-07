import { combineReducers } from 'redux'; // do łączenia reducerow
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

import authReducer from './authReducer'


const myReducers = combineReducers({
    auth : authReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,

})

export default myReducers