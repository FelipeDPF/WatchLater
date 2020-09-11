import React, { useState } from 'react'
import { Modal, Card, Button } from 'react-bootstrap'
import { addMovieToWatchList } from '../store/actions/movieActions'
// import PopUpWindow from '../UI/popUpWindow/PopUpWindow'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const MovieCard = (props) => {

    const movie = props.movie;
    const [modalShow, setModalShow] = useState(false);
    const [open, setOpen] = useState(false);

    const handleClick = (movie) => {
        addMovieToWatchList(movie);
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <>
            <Card className="card" style={{ maxWidth: "600em", flexGrow: 0 }}>
                <Card.Img style={{ height: '450px' }} onClick={() => setModalShow(true)} variant="bottom" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title + ' poster'} />
                <Button style={{ fontWeight: 900 }} onClick={() => handleClick(movie)} variant="warning" block>Add to WatchList</Button>
            </Card>

            <Modal show={modalShow} onHide={() => setModalShow(false)}
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header style={{ backgroundColor: '#060606' }} closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" style={{ fontSize: 25, fontWeight: 'bold', color: "yellow" }}>
                        {movie.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: '#060606', maxWidth: "1600px", backgroundPosition: 'center', backgroundSize: 'cover', backgroundImage: `url(${`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`})` }}>
                    <Card className="card" bg="dark" style={{ maxWidth: "600em", flexGrow: 0 }}>
                        <Card.Img variant="bottom" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title + ' poster'} />
                        <Card.Body style={{ width: '100%' }}>
                            <Card.Text text='white' style={{ fontSize: 18, color: "yellow" }}>
                                RELEASE DATE: {movie.release_date}{"\n"}
                                SCORE: {movie.vote_average}
                            </Card.Text>
                            <Card.Text style={{ fontSize: '20px', fontStyle: 'normal', color: "white", textAlign: 'middle' }}>{movie.overview}</Card.Text>
                        </Card.Body>
                    </Card>
                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: '#060606' }}>
                    <Button onClick={() => handleClick(movie)} variant="warning">Add to WatchList</Button>
                </Modal.Footer>
            </Modal>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <MuiAlert onClose={handleClose} severity="success">
                   Movie added!
                </MuiAlert>
            </Snackbar>
        </>
    );
}

export default MovieCard;