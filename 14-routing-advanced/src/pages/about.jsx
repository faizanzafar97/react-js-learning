import React from 'react'


const About = () => {

  return (
    <section className="section-dark">

      <div className="container">

        <div className="section-title">

          <span>ABOUT US</span>

          <h2>
            Everything You Need
          </h2>

          <p>
            A clean and modern UI built with React
            and simple CSS.
          </p>

        </div>


        <div className="cards">

          <div className="card">

            <div className="card-icon">
              ⚡
            </div>

            <h3>
              Fast Performance
            </h3>

            <p>
              Build fast and optimized interfaces
              with modern React development.
            </p>

          </div>


          <div className="card">

            <div className="card-icon">
              🎨
            </div>

            <h3>
              Modern Design
            </h3>

            <p>
              Create beautiful interfaces with
              clean and simple CSS.
            </p>

          </div>


          <div className="card">

            <div className="card-icon">
              📱
            </div>

            <h3>
              Responsive
            </h3>

            <p>
              Your website looks great on mobile,
              tablet and desktop.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default About