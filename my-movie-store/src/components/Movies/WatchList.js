import React, { useState } from 'react'
import { getFirestore } from 'redux-firestore'
import { getFirebase } from 'react-redux-firebase'
import { Card } from 'react-bootstrap'

export default function DisplayUserWatchList(props) {

    //create the state for movies, and update that state appropriate
    const [movies, setMovies] = useState([]);

    React.useEffect(() => {
        const DisplayUserWatchList = async (e) => {
            // e.preventDefault();
            console.log("submitting");

            const firebaseUser = getFirebase().auth().currentUser;
            const firestore = getFirestore();
            const movieDocumentRef = await firestore.collection('watch-list').doc(firebaseUser.uid).collection('movies').get()
            setMovies(movieDocumentRef.docs.map(doc => doc.data()))
        }
        DisplayUserWatchList()
        // console.log(movies.data());
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
                    </Card>
                ))}
            </div>

        </div >
    );
}


// class WatchList extends Component {
//     render() {
//         const {auth} = this.props;

//         if (!auth.uid) {
//             return <Redirect to='/Login' />
//         }

//         return (
//             <div>
//                 <h1>Watch List</h1>


//             </div>
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         auth: state.firebase.auth
//     }
// }

// export default connect(mapStateToProps)(WatchList);