import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { addMovieToWatchList, deleteMovieFromWatchList } from '../store/actions/movieActions'

const movieCard = (props) => {

    const movie = props.movie;

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
                <Button onClick={() => addMovieToWatchList(movie)} variant="primary">Add to List</Button>
                <Button onClick={() => deleteMovieFromWatchList(movie)} variant="danger"> Remove</Button>
            </Card.Body>
        </Card>
    );
}

export default movieCard;