import React from 'react'
import { Modal, Button } from 'react-bootstrap' 
import MovieCard from '../../movies/MovieCard'

export default function PopUpWindow(props) {
  // const movie = this.props  

  return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
          {/* IMDB RATING: {movie.vote_average} */}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  