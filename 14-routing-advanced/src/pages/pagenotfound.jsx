// ============================================================
// ERROR DIAGNOSIS
// ============================================================
//
// Error:
// /src/pages/pagenotfound.jsx does not provide an export named
// 'default'
//
// Your App.jsx is importing:
//
// import PageNotFound from './pages/pagenotfound'
//
// So your pagenotfound.jsx MUST contain:
//
// export default PageNotFound
//
// ============================================================


// ============================================================
// FIX
// Replace:
//
// src/pages/pagenotfound.jsx
//
// with this complete code.
// ============================================================

import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <section className="not-found">

      <div className="not-found-content">

        <p className="error-number">
          404
        </p>

        <h1>
          Page Not Found
        </h1>

        <p className="error-text">
          The page you are looking for doesn't exist
          or has been moved somewhere else.
        </p>

        <Link
          to="/"
          className="home-btn"
        >
          ← Go Back Home
        </Link>

      </div>

    </section>
  )
}


// ============================================================
// ⭐ VERY IMPORTANT
// This must be at the bottom of the file.
// ============================================================

export default PageNotFound