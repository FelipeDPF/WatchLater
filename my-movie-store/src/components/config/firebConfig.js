import firebase from 'firebase/app'
import 'firebase/firestore' // database
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCuhsxz_lI4x1jBJB8lWiW3h44RQQeN1F0",
    authDomain: "moviedb-505ef.firebaseapp.com",
    databaseURL: "https://moviedb-505ef.firebaseio.com",
    projectId: "moviedb-505ef",
    storageBucket: "moviedb-505ef.appspot.com",
    messagingSenderId: "67724232380",
    appId: "1:67724232380:web:e52525a7cfc7352dabf2b9",
    measurementId: "G-H5V36ZZZBX"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true })
//   firebase.analytics();

export default firebase;