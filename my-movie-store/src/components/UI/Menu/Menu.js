import React from 'react'
import logo from '../Logo/logo.jpg'
import { Link } from 'react-router-dom'
import SignedInLinks from '../SignedInLinks'
import SignedOutLinks from '../SignedOutLinks'
import { connect } from 'react-redux'
import { Navbar, Nav } from 'react-bootstrap'

const Menu = (props) => {
    const { auth, profile } = props;
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;

    return (
         <Navbar bg="dark" variant="dark">
        {/* <Navbar.Brand><Link to="/" className="navbar-brand ml-5"><img src={logo} alt="" style={{ width: '35px' }} />MovieDB</Link></Navbar.Brand>
             <Nav className="mr-auto">
                 <Nav.Link href="#home">Home</Nav.Link>
                 <Nav.Link to="/most-popular">Most Popular</Nav.Link>
              
                 {links}
                 <Nav.Link href="#pricing">Pricing</Nav.Link>
             </Nav> */}
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
             </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Link to="/" className="navbar-brand ml-5"><img src={logo} alt="" style={{ width: '35px'}}/>MovieDB</Link>
                <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                        <Link to="/most-popular" className="nav-link text-white text-uppercase ml-5">Most Popular</Link>
                    </li>
                    <li className="nav-item" >
                        {links}
                    </li>
                </ul>
            </div>
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
