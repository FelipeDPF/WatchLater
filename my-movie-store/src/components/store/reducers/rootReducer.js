import authReducer from './authReducer'
import movieReducer from './movieReducer'
import { combineReducers } from 'redux'
//import { firestoreReducer } from 'redux-firestore' // project - not surreeee ?????????
 import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers ({
    auth: authReducer,
    movies: movieReducer,
    // firestore: firestoreReducer
    firebase: firebaseReducer
});

export default rootReducer;