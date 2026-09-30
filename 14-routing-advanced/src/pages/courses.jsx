import React from 'react'
import { Link } from 'react-router-dom'


const courses = [
  {
    id: 'react',
    number: '01',
    title: 'React JS',
    category: 'Frontend Development',
    description:
      'Learn React from the basics and build modern interactive web applications.',
    lessons: 32,
    level: 'Beginner',
    duration: '8 Weeks',
  },

  {
    id: 'javascript',
    number: '02',
    title: 'JavaScript',
    category: 'Programming',
    description:
      'Master JavaScript fundamentals, DOM, ES6, APIs and modern JavaScript.',
    lessons: 40,
    level: 'Beginner',
    duration: '10 Weeks',
  },

  {
    id: 'css',
    number: '03',
    title: 'Modern CSS',
    category: 'Frontend Development',
    description:
      'Learn Flexbox, Grid, responsive design, animations and modern CSS.',
    lessons: 28,
    level: 'Beginner',
    duration: '6 Weeks',
  },

  {
    id: 'python',
    number: '04',
    title: 'Python',
    category: 'Programming',
    description:
      'Learn Python programming, functions, OOP and practical programming concepts.',
    lessons: 36,
    level: 'Beginner',
    duration: '9 Weeks',
  },
]


const Courses = () => {

  return (
    <section className="courses-page">

      <div className="container">

        {/* PAGE HEADER */}

        <div className="courses-header">

          <span>LEARN & BUILD</span>

          <h1>
            Explore Our Courses
          </h1>

          <p>
            Learn modern development skills through
            practical and beginner-friendly courses.
          </p>

        </div>


        {/* COURSE GRID */}

        <div className="courses-grid">

          {courses.map((course) => (

            <article
              className="course-card"
              key={course.id}
            >

              <div className="course-card-top">

                <span className="course-number">
                  {course.number}
                </span>

                <span className="course-category">
                  {course.category}
                </span>

              </div>


              <div className="course-icon">
                {course.title.charAt(0)}
              </div>


              <h2>
                {course.title}
              </h2>


              <p className="course-description">
                {course.description}
              </p>


              <div className="course-meta">

                <span>
                  📚 {course.lessons} Lessons
                </span>

                <span>
                  ⏱ {course.duration}
                </span>

                <span>
                  🎯 {course.level}
                </span>

              </div>


              <Link
                to={`/courses/${course.id}`}
                className="course-btn"
              >
                View Course
                <span>→</span>
              </Link>

            </article>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Courses  