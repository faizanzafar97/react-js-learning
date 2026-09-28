import React from 'react'
import { NavLink, Link } from 'react-router-dom'


const Navbar = () => {

  return (
    <nav className="navbar">

      <div className="navbar-inner">

        {/* LOGO */}

        <Link
          to="/"
          className="logo"
        >
          <span>Dev</span>Space
        </Link>


        {/* NAVIGATION */}

        <div className="nav-links">

          <NavLink to="/">
            Home
          </NavLink>

          <NavLink to="/about">
            About
          </NavLink>

          <NavLink to="/services">
            Services
          </NavLink>

          <NavLink to="/products">
            Products
          </NavLink>

          <NavLink to="/contact">
            Contact
          </NavLink>
          
          <NavLink to='/courses'>Courses</NavLink>


        </div>


        {/* BUTTON */}

        <Link
          to="/contact"
          className="nav-btn"
        >
          Get Started
        </Link>

      </div>

    </nav>
  )
}

export default Navbar