import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// redux
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import myReducers from './redux/reducers'
import thunk from 'redux-thunk'

// do podlaczenia bazy do aplikacji
import { createFirestoreInstance, reduxFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import firebase from './config/config'

import { isLoaded } from "react-redux-firebase"
import { useSelector } from 'react-redux'

const store = createStore(myReducers, compose(
  applyMiddleware(thunk.withExtraArgument({ getFirebase })),
  reduxFirestore(firebase),
));

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  // enableClaims: true // Get custom claims along with the profile
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,

}
function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth))
    return (
      <p>Loading....</p>
    );
  return children;
}


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
          <App />
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
