import React, { useState, useEffect } from 'react'
import {Card} from 'react-bootstrap'

export default function MoviesTrending(props) {

    //create the state for movies, and update that state appropriate
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        searchMovie();
    }, []);

    const searchMovie = async (e) => {
        console.log("submitting");

        const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=a43b9405f6e8b21a323ed6a3bb65cc97&language=en-US&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data.results);
            setMovies(data.results);
        } catch (error) {
            console.error(error);
        }

    }

    return (
        <div>
            <h1 style={{fontFamily: 'Open Sans', fontStyle: 'normal', fontWeight: 'bold', color: "yellow", textAlign: 'left', paddingTop: '1em'}}>Trending Movies</h1>
            <div style={{ display: 'flex', width: '120%', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' }} >
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <Card className="card" key={movie.id} style={{ maxWidth: "600em", flexGrow: 0 }}>
                        <Card.Img variant="bottom" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title + ' poster'} />
                        {/* <Card.Body >
                            <Card.Title><h3 className="card--title">{movie.title}</h3></Card.Title>
                            <Card.Text text='white' style={{ fontSize: 18 }}>
                            RELEASE DATE: {movie.release_date}{"\n"}
                            IMDB RATING: {movie.vote_average}
                            </Card.Text>
                            <Card.Text text='white' style={{ fontSize: 15 }}>{movie.overview}</Card.Text>
                        </Card.Body> */}
                    </Card>
                ))}
            </div>
        </div >
    );
}
