import React, { Component } from 'react'
import { Button, Form } from "react-bootstrap";
import { connect } from 'react-redux'
import { signIn } from '../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import classes from './Login.module.css'
import { Link } from 'react-router-dom'
import background from '../UI/images/background.png'

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
            <div style={{backgroundSize: 'cover', backgroundImage: `url(${background})`}}>
            <div className={classes.Login}>
                <div className={classes.message}>
                    <h1 style={{ fontSize: '100px', fontFamily: 'Open Sans', fontStyle: 'normal', fontWeight: 'bold', color: "yellow", textAlign: 'middle'}}>
                        Login to access your watchlist!
                </h1>
                </div>
                <div className={classes.form}>
                    <Form onSubmit={this.handleSubmit} >
                        <h1>Login</h1>
                        <Form.Group controlId="email" >
                            <Form.Control type="email" size="lg" style={{padding: '30px', fontSize: '40px'}} placeholder="Enter email" onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Control type="password" size="lg" style={{padding: '30px', fontSize: '40px'}} placeholder="Password" onChange={this.handleChange} />
                        </Form.Group>
                        <Button variant="primary" size="lg"  style={{width: '300px', height: '100px', fontSize: '40px'}} type="submit">Login</Button>{'    '}
                        <Button variant="danger" size="lg"   style={{width: '300px', height: '100px' ,fontSize: '40px'}} type="submit">
                            <Link to="/register" style={{ color: 'white', textDecoration: 'none'}}>
                                Register
                        </Link>
                        </Button>

                        <div style={{ textDecoration: 'none' }}>
                            {authError ? <p>{authError}</p> : null}
                        </div>
                    </Form>
                    </div>
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
