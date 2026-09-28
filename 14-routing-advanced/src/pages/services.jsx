import React from 'react'
import { Link } from 'react-router-dom'


const Services = () => {

  return (
    <section className="section-darker">

      <div className="container">

        <div className="section-title">

          <span>SERVICES</span>

          <h2>
            What We Build
          </h2>

          <p>
            Modern solutions for modern websites.
          </p>

        </div>


        <div className="cards">


          <div className="service-card">

            <div className="service-number">
              01
            </div>

            <h3>
              React Applications
            </h3>

            <p>
              Build scalable and interactive
              React applications.
            </p>

            <Link
              to="/contact"
              className="learn-more"
            >
              Learn More →
            </Link>

          </div>


          <div className="service-card">

            <div className="service-number">
              02
            </div>

            <h3>
              Modern UI
            </h3>

            <p>
              Create modern and beautiful
              user interfaces.
            </p>

            <Link
              to="/contact"
              className="learn-more"
            >
              Learn More →
            </Link>

          </div>


          <div className="service-card">

            <div className="service-number">
              03
            </div>

            <h3>
              Responsive Websites
            </h3>

            <p>
              Make websites that work perfectly
              on every screen.
            </p>

            <Link
              to="/contact"
              className="learn-more"
            >
              Learn More →
            </Link>

          </div>


        </div>

      </div>

    </section>
  )
}

export default Services