import React from 'react'
import { NavLink } from 'react-router-dom'
import {Nav} from 'react-bootstrap'

const SignedOutLinks = () => {
    return (
       <Nav>
           <NavLink to="/register" style={{color:"white"}}className="nav-link text-black text-uppercase ml-5">{/*Register*/}</NavLink>
           {/* <NavLink to="/" style={{color:"white"}} className="nav-link text-black text-uppercase ml-5">Login</NavLink> */}
       </Nav>
    )
}

export default SignedOutLinks;
