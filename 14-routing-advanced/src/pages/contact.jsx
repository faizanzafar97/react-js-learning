import React, { useState } from 'react'


const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })


  const handleChange = (e) => {

    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    })

  }


  const handleSubmit = (e) => {

    e.preventDefault()

    console.log('Form Data:', formData)

    alert('Message submitted successfully!')

    setFormData({
      name: '',
      email: '',
      message: ''
    })

  }


  return (
    <section className="section-dark">

      <div className="container contact-container">

        <div className="section-title">

          <span>CONTACT</span>

          <h2>
            Let's Work Together
          </h2>

          <p>
            Have a project in mind?
            Send us a message.
          </p>

        </div>


        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <div className="form-group">

            <label>
              Your Name
            </label>

            <input
              className="form-input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />

          </div>


          <div className="form-group">

            <label>
              Your Email
            </label>

            <input
              className="form-input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />

          </div>


          <div className="form-group">

            <label>
              Your Message
            </label>

            <textarea
              className="form-textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows="6"
              required
            ></textarea>

          </div>


          <button
            className="submit-btn"
            type="submit"
          >
            Send Message →
          </button>

        </form>

      </div>

    </section>
  )
}

export default Contact