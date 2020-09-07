import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../store/actions/authActions'

const SignedInLinks = (props) => {
    return (
        <div className="navbar-nav m-auto">
            <NavLink to="/watch-list" className="nav-link text-white text-uppercase ml-5">Watch List</NavLink>
            <NavLink to="/" className="nav-link text-white text-uppercase ml-5" onClick={props.signOut}> Log Out</NavLink>
            <NavLink to="/landing-page" className="nav-link text-white text-uppercase ml-5"><i className="fas fa-user"> {props.profile.firstName} {props.profile.lastName}</i></NavLink>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
