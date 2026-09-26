import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-logo">
          <h2>My Website</h2>
          <p>Learn React with simple projects.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 My Website. All rights reserved.</p>
      </div>

    </footer>
  )
}

export default Footer