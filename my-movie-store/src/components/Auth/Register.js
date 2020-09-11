import React, { Component } from 'react'
import { Button, Form, Row, Col } from "react-bootstrap";
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { register } from '../store/actions/authActions'
import { Link } from 'react-router-dom'
import classes from '../auth/Register.module.css'

class Register extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.register(this.state);
    }

    render() {
        const { auth, authError } = this.props;
        if (auth.uid) {
            return <Redirect to='/landing-page' />
        }
        return (
            <div className={classes.Register}>
                <Row>
                    <Col>
                <div className={classes.message}>
                <h4 style={{ fontFamily: 'Open Sans', fontStyle: 'normal', fontWeight: 'bold', color: "White", textAlign: 'middle', paddingTop: '3em' }}>
                    Don't know what movie to watch?
                </h4>
                <h1 style={{ fontSize: '50px', fontFamily: 'Open Sans', fontStyle: 'normal', fontWeight: 'bold', color: "White", textAlign: 'middle' }}>
                    Join us and find whats trending right now! 
                </h1>
                </div>
                
                <div className={classes.form} >
                   <Form onSubmit={this.handleSubmit} >
                        <h1>Register</h1>
                        <Form.Group controlId="firstName">
                            <Form.Control type="text" size="lg" placeholder="Enter first name" onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group controlId="lastName">
                            <Form.Control type="text" size="lg" placeholder="Enter last name" onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Control type="email" size="lg" placeholder="Enter email" onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Control type="password" size="lg" placeholder="Password" onChange={this.handleChange} />
                        </Form.Group>
                        <Button variant="primary" style={{width: '200px', height: '50px', fontSize: '20px'}} size="lg" type="submit">
                            Register 
                        </Button>{'    '}
                        <Button variant="danger" size="lg" style={{width: '200px', height: '50px', fontSize: '20px'}}>
                            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                                Login
                            </Link>
                        </Button>
                        <div style={{ color: "red" }}>
                            {authError ? <p>{authError}</p> : null}
                        </div>
                    </Form>
                </div>
                </Col>
                <Col>
                <img src={require('../UI/images/demo2.gif')} alt="loading..." width="500" height="700"/>
                </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: (newUser) => dispatch(register(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);

