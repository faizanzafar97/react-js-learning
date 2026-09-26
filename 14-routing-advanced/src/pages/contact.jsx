


import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="section-dark">

      <div className="container">

        <div className="section-title">

          <span>Contact</span>

          <h2>Let's Work Together</h2>

          <p>
            Have a project in mind? Send us a message.
          </p>

        </div>


        <form className="contact-form">

          <div className="form-group">

            <input
              className="form-input"
              type="text"
              placeholder="Your Name"
            />

          </div>


          <div className="form-group">

            <input
              className="form-input"
              type="email"
              placeholder="Your Email"
            />

          </div>


          <div className="form-group">

            <textarea
              className="form-textarea"
              placeholder="Your Message"
            ></textarea>

          </div>


          <button
            className="submit-btn"
            type="submit"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  )
}

export default Contact