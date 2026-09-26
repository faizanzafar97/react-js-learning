// ============================================================
// THE PROBLEM
// ============================================================
//
// If clicking Navbar links does NOT open:
//
// /about
// /services
// /contact
//
// then the most common issue is that navbar.jsx is still using:
//
// <a href="#about">
//
// Instead, React Router needs:
//
// <Link to="/about">
//
// Use the complete code below.
// ============================================================


// ============================================================
// src/components/navbar.jsx
// ============================================================

import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="navbar-inner">

        {/* LOGO */}
        <Link to="/" className="logo">
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

          <NavLink to="/contact">
            Contact
          </NavLink>

        </div>


        {/* GET STARTED */}
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