import React from 'react'
import { Card, Button } from 'react-bootstrap'
// import {Grid} from '@material-ui/core'

const movieCard = (props) => {

    const movie = props.movie;

    const addWatchList = (watchList) => {
        console.log("Heelllooo");

        return (dispatch, getState, { getFirebase, getFirestore }) => {
            const firebase = getFirebase();
            const firestore = getFirestore();
            firestore.collection('watch-list').set({
                name: 'Los Angeles',
                state: 'CA',
                country: 'USA'
            })
                .then(function () {
                    console.log('Document successfully written!');
                })
                .catch(function (error) {
                    console.error('Error writing document: ', error);
                });
        }

        // return (dispatch, getState, { getFirebase, getFirestore }) => {

        //     // const firebase = getFirebase();
        //     const firestore = getFirestore();
        //     const profile = getState().firebase.profile;
        //     const authorId = getState().firebase.uid;
        //     firestore.collection('watch-list').add({       
        //         movieId: 1,
        //         movieName: 'Her',
        //         description: 'Its about a guy...'

        //     }).then(() => {
        //         dispatch({ type: 'WATCH-LIST_SUCCESS', watchList })
        //     }).catch((err) => {
        //         dispatch({ type: 'WATCH-LIST_ERROR', err })
        //     })

        // }

    };

    return (

        <Card className="card" style={{ maxWidth: "600em", flexGrow: 0 }}>
            <Card.Img variant="bottom" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title + ' poster'} />
            <Card.Body >
                <Card.Title><h3 className="card--title">{movie.title}</h3></Card.Title>
                <Card.Text text='white' style={{ fontSize: 18 }}>
                    RELEASE DATE: {movie.release_date}{"\n"}
                    IMDB RATING: {movie.vote_average}
                </Card.Text>
                <Card.Text text='white' style={{ fontSize: 15 }}>{movie.overview}</Card.Text>
                <Button onClick={addWatchList} variant="primary">Add to List</Button>
            </Card.Body>
        </Card>

    );
}

export default movieCard;