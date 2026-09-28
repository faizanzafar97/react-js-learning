import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {

  return (
    <section className="hero">

      <div className="hero-container">

        <div className="hero-content">

          <span className="hero-label">
            MODERN WEB DEVELOPMENT
          </span>

          <h1>
            Build
            <span> Beautiful </span>
            Websites
          </h1>

          <p>
            Create modern, responsive and professional
            websites using React and CSS.
          </p>


          <div className="hero-buttons">

            <Link
              to="/products"
              className="primary-btn"
            >
              Explore Products
            </Link>

            <Link
              to="/services"
              className="secondary-btn"
            >
              Our Services
            </Link>

          </div>

        </div>


        <div className="hero-card">

          <div className="browser-top">

            <div className="browser-dots">

              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>

            </div>

            <span className="browser-title">
              devspace.jsx
            </span>

          </div>


          <div className="code-box">

            <div className="code-line long"></div>

            <div className="code-line medium"></div>

            <div className="code-line short"></div>

            <div className="code-large-box"></div>

            <div className="code-small-row">

              <div></div>
              <div></div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Home