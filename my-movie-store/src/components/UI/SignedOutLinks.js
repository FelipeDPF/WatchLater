import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
       <div className="navbar-nav m-auto">
           <NavLink to="/register" className="nav-link text-black text-uppercase ml-5">Register</NavLink>
           <NavLink to="/Login" className="nav-link text-black text-uppercase ml-5">Login</NavLink>
       </div>
    )
}

export default SignedOutLinks;
