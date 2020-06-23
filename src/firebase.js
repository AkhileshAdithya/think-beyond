import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBSm87G1EHvxVWQax6BZ-Bk6GrSHmMPDG4",
    authDomain: "think-beyond.firebaseapp.com",
    databaseURL: "https://think-beyond.firebaseio.com",
    projectId: "think-beyond",
    storageBucket: "think-beyond.appspot.com",
    messagingSenderId: "931954600573",
    appId: "1:931954600573:web:0807c477ff61f97e7edf14"
}

const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.firestore()

export default db