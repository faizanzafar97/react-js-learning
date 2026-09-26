import React from 'react'

const Services = () => {
  return (
    <section id="services" className="section-darker">

      <div className="container">

        <div className="section-title">

          <span>Services</span>

          <h2>What We Build</h2>

          <p>
            Modern solutions for modern websites.
          </p>

        </div>


        <div className="cards">

          {/* Service 1 */}
          <div className="service-card">

            <div className="service-number">
              1
            </div>

            <h3>React Applications</h3>

            <p>
              Build scalable and interactive React applications
              using modern development practices.
            </p>

            <button className="learn-more">
              Learn More →
            </button>

          </div>


          {/* Service 2 */}
          <div className="service-card">

            <div className="service-number">
              2
            </div>

            <h3>Modern UI</h3>

            <p>
              Create modern, clean and beautiful user
              interfaces with React and CSS.
            </p>

            <button className="learn-more">
              Learn More →
            </button>

          </div>


          {/* Service 3 */}
          <div className="service-card">

            <div className="service-number">
              3
            </div>

            <h3>Responsive Websites</h3>

            <p>
              Make websites that work properly on mobile,
              tablet and desktop screens.
            </p>

            <button className="learn-more">
              Learn More →
            </button>

          </div>

        </div>

      </div>

    </section>
  )
}



export default Services