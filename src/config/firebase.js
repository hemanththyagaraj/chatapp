import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD61LDmqwdLl4QEluYnwFlfMh8VERWsb9U",
    authDomain: "cloneapp-chat.firebaseapp.com",
    projectId: "cloneapp-chat",
    storageBucket: "cloneapp-chat.appspot.com",
    messagingSenderId: "221793256043",
    appId: "1:221793256043:web:b246e30d97f7ef6b30e72e",
    measurementId: "G-S9ZCSVG70W"
}

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const fireStore = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { auth, fireStore, googleAuthProvider, firebase }