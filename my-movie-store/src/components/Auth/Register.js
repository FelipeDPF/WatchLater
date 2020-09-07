import React, { Component } from 'react'
import { Button, Form } from "react-bootstrap";
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { register } from '../store/actions/authActions'
import classes from './Register.module.css'

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
                    <h1 style={{ fontFamily: 'Open Sans', fontStyle: 'normal', fontWeight: 'bold', color: "White", textAlign: 'middle', paddingTop: '3em' }}>Don't know what movie to watch?</h1>
                    <h1 style={{ fontSize: '100px', fontFamily: 'Open Sans', fontStyle: 'normal', fontWeight: 'bold', color: "White", textAlign: 'middle', paddingTop: '' }}>Join and find whats trending right now! </h1>
                    <div className={classes.container}>
                    <Form onSubmit={this.handleSubmit}>
                    <h1>Register</h1>
                        <Form.Group controlId="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter first name" onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group controlId="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter last name" onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={this.handleChange} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={this.handleChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Register
                    </Button>
                        <div style={{ color: "red" }}>
                            {authError ? <p>{authError}</p> : null}
                        </div>
                    </Form>
                </div>
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

