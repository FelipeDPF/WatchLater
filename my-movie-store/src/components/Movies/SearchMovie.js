import React, { useState } from 'react'
import MovieCard from './MovieCard'
import { Form, Button, InputGroup } from 'react-bootstrap'


export default function SearchMovie(props) {

    // states = input query, movies
    const [query, setQuery] = useState('');

    //create the state for movies, and update that state appropriate
    const [movies, setMovies] = useState([]);

    const searchMovie = async (e) => {
        e.preventDefault();
        console.log("submitting");

        const url = `https://api.themoviedb.org/3/search/movie?api_key=a43b9405f6e8b21a323ed6a3bb65cc97&language=en-US&query=${query}&page=1&include_adult=false`;

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
            <Form className="form" onSubmit={searchMovie}>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    </InputGroup.Prepend>
                </InputGroup>
                <input className="input"
                    type="text"
                    name="query"
                    placeholder="i.e Jurassic park"
                    value={query} onChange={(e) => setQuery(e.target.value)}
                />
                <Button style={{ marginTop: '2rem' }} variant="dark" size="lg" type="submit">Search</Button>
            </Form>

            <div style={{ display: 'flex', width: '100%', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' }} >
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>

        </div >
    );
}
//export default SearchMovie;

// export const watchList = (newMovie) => {
//     firestore.collection('watch-list').doc("watch-list").set({
//                 movieId: newMovie.movieId,
//                 movieName: newMovie.MovieName,
//                 movieDescription: newMovie.MovieDescription
//             })
//             .then(function() {
//                 console.log("WATCH-LIST SUCCESS");
//             })
//             .catch(function(error) {
//                 console.error("WATCH-LIST FAIL", error);
//             });
//     }