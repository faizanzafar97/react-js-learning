
import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {

  return (
    <footer className="footer">

      <div className="footer-inner">

        {/* LEFT SIDE */}

        <div>

          <Link
            to="/"
            className="footer-logo"
          >
            <span>Dev</span>Space
          </Link>

          <p>
            Modern websites built with React.
          </p>

        </div>


        {/* RIGHT SIDE */}

        <div className="footer-links">

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:hello@example.com">
            Email
          </a>

        </div>

      </div>


      {/* BOTTOM */}

      <div className="footer-bottom">

        <p>
          © 2026 DevSpace. All rights reserved.
        </p>

        <p>
          Built with React + CSS
        </p>

      </div>

    </footer>
  )
}


export default Footer