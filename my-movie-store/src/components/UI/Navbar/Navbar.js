import React from 'react'
import logo from '../Logo/logo.jpg'
import { Link } from 'react-router-dom'
import SignedInLinks from '../SignedInLinks'
import SignedOutLinks from '../SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
    const { auth } = props;
    const links = auth.uid ? <SignedInLinks/> : <SignedOutLinks/>;
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
             <Link to="/" className="navbar-brand ml-5"><img src={logo} alt="" style={{ width: '35px'}}/>MovieDB</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                    <Link to="/most-popular" className="nav-link text-black text-uppercase ml-5">Most Popular</Link>
                    </li>               
                    <li className="nav-item">
                    {links}
                    </li>               
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar);
