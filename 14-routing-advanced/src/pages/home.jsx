// ============================================================
// 1. src/pages/Home.jsx
// ============================================================

import React from 'react'

const Home = () => {
  return (
    <section id="home" className="hero">

      <div className="hero-container">

        {/* Left Content */}

        <div className="hero-content">

          <span>
            Modern Web Development
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

            <button className="primary-btn">
              Start Project
            </button>

            <button className="secondary-btn">
              Learn More
            </button>

          </div>

        </div>


        {/* Right Content */}

        <div className="hero-card">

          <div className="browser-dots">

            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>

          </div>

          <div className="code-box">

            <div className="line blue"></div>

            <div className="line full"></div>

            <div className="line small"></div>

            <div className="big-box"></div>

            <div className="small-boxes">

              <div className="small-box"></div>

              <div className="small-box"></div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Home