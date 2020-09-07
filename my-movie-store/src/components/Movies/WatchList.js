import React, { useState, useEffect } from 'react'
import { getFirestore } from 'redux-firestore'
import { getFirebase } from 'react-redux-firebase'
import { Card, Button } from 'react-bootstrap'
import { deleteMovieFromWatchList } from '../store/actions/movieActions'
import { connect } from 'react-redux'
// import { Redirect } from 'react-router-dom'
import { Container } from '@material-ui/core'

function DisplayUserWatchList(props) {

    //create the state for movies, and update that state appropriate
    const [movies, setMovies] = useState([]);

    // this has to be done tomorrow !!!
    // const {auth} = props;
    //         if (!auth.uid) {
    //             return <Redirect to='/login' />
    //         }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    useEffect(() => {
        const DisplayUserWatchList = async (e) => {
            // e.preventDefault();
            console.log("submitting");
            await sleep(1000);
            const firebaseUser = getFirebase().auth().currentUser;
            const firestore = getFirestore();
            const movieDocumentRef = await firestore.collection('watch-list').doc(firebaseUser.uid).collection('movies').get()
            setMovies(movieDocumentRef.docs.map(doc => doc.data()))
        }

        DisplayUserWatchList()

    }, [])

    return (

        <Container style={{margin: '0 auto', maxWidth: '1000px', padding: '40px'}}>
            <h1 style={{ fontFamily: 'Open Sans', fontStyle: 'normal', fontWeight: 'bold', color: "yellow", textAlign: 'left', paddingBottom: '1em' }}> My Watchlist</h1>
            <div style={{ display: 'flex', width: '120%', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' }} >
                {movies.map(movie => (
                    <Card className="card" key={movie.id} style={{ maxWidth: "600em", flexGrow: 0 }}>
                        <Card.Img variant="bottom" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title + ' poster'} />
                        <Button style={{ fontWeight: 900 }} onClick={() => deleteMovieFromWatchList(movie)} variant="danger">Remove</Button>
                    </Card>
                ))}
            </div>
        </Container >
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(DisplayUserWatchList);
// export default DisplayUserWatchList