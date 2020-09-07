import { getFirestore } from 'redux-firestore'
import { getFirebase } from 'react-redux-firebase'

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

export const deleteMovieFromWatchList = (movie) => {

    const firebaseUser = getFirebase().auth().currentUser;
    const firestore = getFirestore();
    firestore.collection('watch-list').doc(firebaseUser.uid).collection('movies').doc(movie.title).delete()
        .then(function () {
            console.log("deleted");
            window.location.reload(false);
        }).catch(function (error) {
            console.log("Not deleted" + error);
        });

}
