import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from '../SignedInLinks'
import SignedOutLinks from '../SignedOutLinks'
import { connect } from 'react-redux'
import { Navbar, Nav } from 'react-bootstrap'
import classes from './Menu.module.css'
import { MdLocalMovies} from 'react-icons/md'
import { IconContext } from "react-icons";

const Menu = (props) => {
    const { auth, profile } = props;
    const links = auth.uid ? <SignedInLinks profile={profile} /> :  <SignedOutLinks />;
    // const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
    

    return (
        <Navbar className={classes.colorNav}>
            <Nav className="container-fluid">
                <Nav.Item>
                    <Link to="/" className="navbar-brand ml-5">
                    <IconContext.Provider value={{ color: "white", size: "2em"}}>
                        <MdLocalMovies />
                    </IconContext.Provider>
                        <p style={{ color: "white"}}>WatchLater</p>
                    </Link>
                </Nav.Item>
                {/* <Nav.Item className="ml-auto">
                    <Link to="/most-popular" className="nav-link text-white text-uppercase ml-5">Most Popular</Link>
                </Nav.Item> */}
                <Nav.Item>
                    {links}
                </Nav.Item>
            </Nav>
        </Navbar>
    )
}



const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Menu);
