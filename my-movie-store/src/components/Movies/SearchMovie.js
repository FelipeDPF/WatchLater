import React, { useState } from 'react'
import MovieCard from '../movies/MovieCard'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import { BsSearch} from 'react-icons/bs'
// import { IconContext } from "react-icons";


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

    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
          },
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "white"
          },
            "& .MuiInputLabel-outlined": {
            color: "white"
          },
          "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "yellow"
          },
        },
      }));

    const classes = useStyles();

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={searchMovie} value={query} onChange={(e) => setQuery(e.target.value)}> 
            <TextField style={{width:'100%', backgroundColor: 'black'}} InputProps={{style: {color: "white" }}} color="secondary" id="filled-search" label="Search Movie" type="search" variant="outlined" />
            {/* <IconContext.Provider value={{color: "white", size: "2em"}}>
                    <BsSearch style={{width: '5ch'}}/> 
                </IconContext.Provider>  */}
            </form>
       
            <div style={{ display: 'flex', width: '120%', flexDirection: 'row', paddingTop: '2em', flexWrap: 'wrap', justifyContent: 'flex-start' }} >
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>

        </div >
    );
}
