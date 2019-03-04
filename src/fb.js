
import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
var config = {
apiKey: "AIzaSyA6DTGeFM1UijUrCen5M6IjrvyxMM1wCsY",
authDomain: "todoproject-426aa.firebaseapp.com",
databaseURL: "https://todoproject-426aa.firebaseio.com",
projectId: "todoproject-426aa",
storageBucket: "todoproject-426aa.appspot.com",
messagingSenderId: "1087584120103"
};
firebase.initializeApp(config);

const db = firebase.firestore();

export default db;