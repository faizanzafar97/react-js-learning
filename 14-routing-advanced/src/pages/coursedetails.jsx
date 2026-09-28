import React from 'react'
import { Link, useParams } from 'react-router-dom'


const courseData = {

  react: {
    title: 'React JS',
    category: 'Frontend Development',
    description:
      'Learn React from the basics and build modern interactive web applications.',
    level: 'Beginner',
    duration: '8 Weeks',
    lessons: '32 Lessons',
    students: '1,250 Students',

    topics: [
      'React Components',
      'JSX',
      'Props',
      'useState Hook',
      'useEffect Hook',
      'Event Handling',
      'Forms',
      'React Router',
      'API Integration',
      'Project Development',
    ],
  },


  javascript: {
    title: 'JavaScript',
    category: 'Programming',
    description:
      'Master JavaScript fundamentals and learn how to create interactive websites.',
    level: 'Beginner',
    duration: '10 Weeks',
    lessons: '40 Lessons',
    students: '1,850 Students',

    topics: [
      'JavaScript Variables',
      'Functions',
      'Arrays',
      'Objects',
      'DOM Manipulation',
      'Events',
      'ES6',
      'Promises',
      'Async / Await',
      'API Integration',
    ],
  },


  css: {
    title: 'Modern CSS',
    category: 'Frontend Development',
    description:
      'Learn modern CSS techniques to create beautiful and responsive websites.',
    level: 'Beginner',
    duration: '6 Weeks',
    lessons: '28 Lessons',
    students: '980 Students',

    topics: [
      'CSS Fundamentals',
      'Selectors',
      'Flexbox',
      'CSS Grid',
      'Responsive Design',
      'Media Queries',
      'Transitions',
      'Animations',
      'Gradients',
      'Modern UI Design',
    ],
  },


  python: {
    title: 'Python',
    category: 'Programming',
    description:
      'Learn Python programming from the fundamentals to object-oriented programming.',
    level: 'Beginner',
    duration: '9 Weeks',
    lessons: '36 Lessons',
    students: '1,420 Students',

    topics: [
      'Python Basics',
      'Variables',
      'Conditions',
      'Loops',
      'Functions',
      'Lists and Dictionaries',
      'Modules',
      'File Handling',
      'OOP',
      'Practical Projects',
    ],
  },

}


const CourseDetail = () => {

  const { courseId } = useParams()

  const course = courseData[courseId]


  // ==========================================================
  // COURSE NOT FOUND
  // ==========================================================

  if (!course) {

    return (
      <section className="course-not-found">

        <div>

          <span>404</span>

          <h1>
            Course Not Found
          </h1>

          <p>
            The course you are looking for does not exist.
          </p>

          <Link
            to="/courses"
            className="course-btn"
          >
            ← Back to Courses
          </Link>

        </div>

      </section>
    )
  }


  return (
    <section className="course-detail-page">

      <div className="container">


        {/* ==================================================
            BACK BUTTON
        ================================================== */}

        <Link
          to="/courses"
          className="back-courses"
        >
          ← Back to Courses
        </Link>


        {/* ==================================================
            COURSE HERO
        ================================================== */}

        <div className="course-detail-hero">

          <div className="course-detail-content">

            <span className="detail-category">
              {course.category}
            </span>

            <h1>
              {course.title}
            </h1>

            <p>
              {course.description}
            </p>


            <div className="detail-stats">

              <div>
                <strong>{course.lessons}</strong>
                <span>Course Content</span>
              </div>

              <div>
                <strong>{course.duration}</strong>
                <span>Duration</span>
              </div>

              <div>
                <strong>{course.level}</strong>
                <span>Level</span>
              </div>

              <div>
                <strong>{course.students}</strong>
                <span>Enrolled</span>
              </div>

            </div>


            <button className="start-course-btn">
              Start Learning →
            </button>

          </div>


          {/* COURSE VISUAL */}

          <div className="course-detail-visual">

            <div className="visual-number">
              {course.title.charAt(0)}
            </div>

            <span>
              MASTER
            </span>

            <strong>
              {course.title}
            </strong>

          </div>

        </div>


        {/* ==================================================
            COURSE CONTENT
        ================================================== */}

        <div className="course-content-section">

          <div className="course-content-main">

            <span className="content-label">
              COURSE CONTENT
            </span>

            <h2>
              What You Will Learn
            </h2>

            <p className="content-intro">
              This course covers the important concepts
              you need to start building real projects.
            </p>


            <div className="topics-list">

              {course.topics.map((topic, index) => (

                <div
                  className="topic-item"
                  key={topic}
                >

                  <span>
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <strong>
                    {topic}
                  </strong>

                  <small>
                    ✓
                  </small>

                </div>

              ))}

            </div>

          </div>


          {/* ==================================================
              SIDEBAR
          ================================================== */}

          <aside className="course-sidebar">

            <div className="sidebar-card">

              <span>
                COURSE ACCESS
              </span>

              <h3>
                Start Learning Today
              </h3>

              <p>
                Get access to all course lessons
                and start learning step by step.
              </p>

              <button className="sidebar-btn">
                Enroll Now
              </button>

              <div className="sidebar-info">

                <p>
                  ✓ Lifetime access
                </p>

                <p>
                  ✓ Practical projects
                </p>

                <p>
                  ✓ Beginner friendly
                </p>

                <p>
                  ✓ Course certificate
                </p>

              </div>

            </div>

          </aside>

        </div>

      </div>

    </section>
  )
}


export default CourseDetail