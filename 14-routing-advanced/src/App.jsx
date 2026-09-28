import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar'
import Footer from './components/footer'

import Home from './pages/home'
import About from './pages/about'
import Services from './pages/services'
import Contact from './pages/contact'

import Products from './pages/products'
import Women from './pages/women'
import Men from './pages/men'

import Courses from './pages/courses'
import Coursesdetails from './pages/coursedetails'

import PageNotFound from './pages/pagenotfound'

import './App.css'


const App = () => {
  return (
    <div className="app">

      <Navbar />

      <main>

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

          {/* =========================================
              PRODUCTS = PARENT ROUTE
              
              URL:
              /products
          ========================================= */}

          <Route
            path="/products"
            element={<Products />}
          >

            {/* =========================================
                WOMEN = NESTED ROUTE

                URL:
                /products/women
            ========================================= */}

            <Route
              path="women"
              element={<Women />}
            />

            {/* =========================================
                MEN = NESTED ROUTE

                URL:
                /products/men
            ========================================= */}

            <Route
              path="men"
              element={<Men />}
            />

          </Route>

          <Route path='courses'
          element={<Courses/>}
          />

          <Route path='coursedetails'
          element={<Coursesdetails/>}
          />

          {/* 404 PAGE */}

          <Route
            path="*"
            element={<PageNotFound />}
          />

        </Routes>

      </main>

      <Footer />

    </div>
  )
}

export default App