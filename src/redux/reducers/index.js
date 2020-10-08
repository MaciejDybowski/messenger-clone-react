import { combineReducers } from 'redux'; // do łączenia reducerow
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

import authReducer from './authReducer'
import personReducer from './personReducer'


const myReducers = combineReducers({
    auth : authReducer,
    
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    person: personReducer,

})

export default myReducers