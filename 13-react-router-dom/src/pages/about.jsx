
import React from 'react'
import './about.css'

const About = () => {
  return (
    <section className="about-page">

      <div className="about-header">

        <span className="about-badge">
          About Us
        </span>

        <h1>
          We Build With
          <span> React & Creativity</span>
        </h1>

        <p>
          This website is a React learning project designed
          to practice components, routing, layouts and
          responsive design.
        </p>

      </div>

      <div className="about-cards">

        <div className="about-card">
          <h2>01</h2>
          <h3>Modern UI</h3>
          <p>
            Clean and responsive interfaces designed for
            desktop, tablet and mobile devices.
          </p>
        </div>

        <div className="about-card">
          <h2>02</h2>
          <h3>React</h3>
          <p>
            Reusable components make applications easier
            to build, maintain and scale.
          </p>
        </div>

        <div className="about-card">
          <h2>03</h2>
          <h3>Learning</h3>
          <p>
            Every project is an opportunity to understand
            React concepts through practical development.
          </p>
        </div>

      </div>

    </section>
  )
}

export default About
