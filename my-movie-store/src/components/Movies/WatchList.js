import React, { useState, useEffect } from 'react'
import { getFirestore } from 'redux-firestore'
import { getFirebase } from 'react-redux-firebase'
import { Card, Button } from 'react-bootstrap'
import { deleteMovieFromWatchList } from '../store/actions/movieActions'

export default function DisplayUserWatchList(props) {

    //create the state for movies, and update that state appropriate
    const [movies, setMovies] = useState([]);

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
        <div>
            <div style={{ display: 'flex', width: '100%', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' }} >
                {movies.map(movie => (
                    <Card className="card" key={movie.id} style={{ maxWidth: "600em", flexGrow: 0 }}>
                        <Card.Img variant="bottom" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title + ' poster'} />
                        <Card.Body >
                            <Card.Title><h3 className="card--title">{movie.title}</h3></Card.Title>
                            <Card.Text text='white' style={{ fontSize: 18 }}>
                                RELEASE DATE: {movie.release_date}{"\n"}
                                IMDB RATING: {movie.vote_average}
                            </Card.Text>
                            <Card.Text text='white' style={{ fontSize: 15 }}>{movie.overview}</Card.Text>
                        </Card.Body>
                        <Button onClick={() => deleteMovieFromWatchList(movie)} variant="danger">Remove</Button>
                    </Card>
                ))}
            </div>

        </div >
    );
}
