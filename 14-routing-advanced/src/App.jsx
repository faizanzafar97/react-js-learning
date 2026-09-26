// ============================================================
// src/App.jsx
// ============================================================

import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar'
import Footer from './components/footer'

import Home from './pages/home'
import About from './pages/about'
import Services from './pages/services'
import Contact from './pages/contact'
import PageNotFound from './pages/pagenotfound'

import './App.css'


const App = () => {
  return (
    <div>

      <Navbar />

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* ABOUT */}
        <Route
          path="/about"
          element={<About />}
        />

        {/* SERVICES */}
        <Route
          path="/services"
          element={<Services />}
        />

        {/* CONTACT */}
        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* 404 */}
        <Route
          path="*"
          element={<PageNotFound />}
        />

      </Routes>

      <Footer />

    </div>
  )
}

export default App