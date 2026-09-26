
import React from 'react'
import './home.css'

const Home = () => {
  return (
    <section className="home-page">

      <div className="home-content">

        <span className="home-badge">
          Welcome to My Website
        </span>

        <h1>
          Build Modern
          <span> React Applications</span>
        </h1>

        <p>
          Learn React by building real-world projects with
          clean components, modern UI, and React Router.
        </p>

        <div className="home-buttons">
          <button className="primary-btn">
            Get Started
          </button>

          <button className="secondary-btn">
            Learn More
          </button>
        </div>

      </div>

      <div className="home-card">

        <div className="card-icon">
          ⚛
        </div>

        <h2>React Development</h2>

        <p>
          Create fast, reusable and responsive web
          applications using React.
        </p>

      </div>

    </section>
  )
}

export default Home

