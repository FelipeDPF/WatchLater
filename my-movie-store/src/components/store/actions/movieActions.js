import { getFirestore } from 'redux-firestore'
import {getFirebase} from 'react-redux-firebase'

import { connect } from 'react-redux'


export const addMovieToWatchList = (movie) => {
    console.log(movie)

    const firebaseUser = getFirebase().auth().currentUser;
    const firestore = getFirestore();
    firestore.collection('watch-list').doc(firebaseUser.uid).collection('movies').doc(movie.title).set({
       ...movie
    }).then(function () {
        console.log("Added");
    }).catch(function (error) {
        console.log("not error" + error);
    });

}



//  export const addMovieToWatchList = (movie) => {
//     return (dispatch, getState, { getFirebase, getFirestore }) => {
//         // const firebase = getFirebase();
//         const firestore = getFirestore();
//         const profile = getState().firebase.profile;
//         const authorId = getState().firebase.uid;
//         firestore.collection('watch-list').doc('movie').add({       
//            ...movie,
//             movieId: 1,
//             movieName: 'Her',
//             description: 'Its about a guy...'

//         }).then(() => {
//             dispatch({ type: 'WATCH-LIST_SUCCESS', movie })
//         }).catch((err) => {
//             dispatch({ type: 'WATCH-LIST_ERROR', err })
//         })
//     }
// };