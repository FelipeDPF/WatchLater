import React, { Component } from 'react'
import { Button, Form } from "react-bootstrap";
import { connect } from 'react-redux'
import { signIn } from '../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import classes from './Login.module.css'
import { Link } from 'react-router-dom'

class Login extends Component {
    state = {
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
        this.props.signIn(this.state);
    }

    render() {
        const { authError, auth } = this.props;
        if (auth.uid) {
            return <Redirect to='/landing-page' />
        }
        return (
            <div className={classes.Login}>  
                <h1 style={{fontSize: '100px', fontFamily: 'Open Sans', fontStyle: 'normal', fontWeight: 'bold', color: "White", textAlign: 'middle', paddingTop: ''}}>Login to access your watchlist!</h1>
            <div className={classes.container}>
                
                <Form onSubmit={this.handleSubmit} >
                    <h1>Login</h1>
                    <Form.Group controlId="email" >
                        <Form.Label >Email address</Form.Label>
                        <Form.Control type="email" size="lg" placeholder="Enter email" onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" size="lg" placeholder="Password" onChange={this.handleChange} />
                    </Form.Group>
                    <Button variant="primary" size="lg" type="submit">Login</Button>{'    '}
                    <Button variant="danger" size="lg" type="submit">
                        <Link to="/register" style={{ color: 'white' }}>
                            Register
                        </Link>
                    </Button>
                    <div style={{ textDecoration: 'none' }}>
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
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
