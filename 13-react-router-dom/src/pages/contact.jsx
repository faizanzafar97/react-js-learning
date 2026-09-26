
import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section className="contact-page">

      <div className="contact-header">

        <span className="contact-badge">
          Contact Us
        </span>

        <h1>
          Let's Start a
          <span> Conversation</span>
        </h1>

        <p>
          Have a question or want to work together?
          Send us a message and we'll get back to you.
        </p>

      </div>

      <div className="contact-container">

        <div className="contact-info">

          <h2>Get in Touch</h2>

          <p>
            Feel free to contact us through the information
            below. We are always happy to hear from you.
          </p>

          <div className="info-item">
            <strong>Email</strong>
            <span>hello@example.com</span>
          </div>

          <div className="info-item">
            <strong>Phone</strong>
            <span>+92 300 1234567</span>
          </div>

          <div className="info-item">
            <strong>Location</strong>
            <span>Pakistan</span>
          </div>

        </div>


        <form className="contact-form">

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              placeholder="Write your message..."
              rows="6"
            ></textarea>
          </div>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  )
}

export default Contact

