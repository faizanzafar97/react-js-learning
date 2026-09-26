// ============================================================
// 2. src/pages/About.jsx
// ============================================================

import React from 'react'

const About = () => {
  return (
    <section id="about" className="section-dark">

      <div className="container">

        {/* Section Heading */}

        <div className="section-title">

          <span>About Us</span>

          <h2>
            Everything You Need
          </h2>

          <p>
            A clean and modern UI built with React
            and simple CSS.
          </p>

        </div>


        {/* About Cards */}

        <div className="cards">

          {/* Card 1 */}

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


          {/* Card 2 */}

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


          {/* Card 3 */}

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