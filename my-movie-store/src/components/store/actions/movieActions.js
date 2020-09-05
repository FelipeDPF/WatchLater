import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

 const addWatchList = (watchList) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // const firebase = getFirebase();
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.uid;
        firestore.collection('watch-list').add({       
           ...watchList,
            movieId: 1,
            movieName: 'Her',
            description: 'Its about a guy...'

        }).then(() => {
            dispatch({ type: 'WATCH-LIST_SUCCESS', watchList })
        }).catch((err) => {
            dispatch({ type: 'WATCH-LIST_ERROR', err })
        })
    }
};

const mapStateToProps = (state) => {
    return {
        
    }
}

export default compose(
    connect(mapStateToProps)
)(addWatchList);
