import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyBSN_CR6YGq4yc-ehGg_dwNAoTcZVBx6KE",
    authDomain: "messenger-clone-c49f8.firebaseapp.com",
    databaseURL: "https://messenger-clone-c49f8.firebaseio.com",
    projectId: "messenger-clone-c49f8",
    storageBucket: "messenger-clone-c49f8.appspot.com",
    messagingSenderId: "278893569872",
    appId: "1:278893569872:web:5e4a4e7cbd8558998aae55"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;