import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Products = () => {

  return (
    <section className="products-page">

      <div className="container">

        <div className="shop-header">

          <span>
            OUR COLLECTION
          </span>

          <h1>
            Products
          </h1>

          <p>
            Choose a collection and explore
            our products.
          </p>

        </div>


        {/* =========================================
            CATEGORY CARDS

            Women and Men are NOT in Navbar.

            They are inside Products page.
        ========================================= */}

        <div className="category-grid">


          {/* WOMEN */}

          <Link
            to="/products/women"
            className="category-card women-card"
          >

            <div className="category-content">

              <span>
                01
              </span>

              <h2>
                Women
              </h2>

              <p>
                Explore our latest women's
                collection.
              </p>

              <strong>
                Explore Collection →
              </strong>

            </div>

          </Link>


          {/* MEN */}

          <Link
            to="/products/men"
            className="category-card men-card"
          >

            <div className="category-content">

              <span>
                02
              </span>

              <h2>
                Men
              </h2>

              <p>
                Explore our latest men's
                collection.
              </p>

              <strong>
                Explore Collection →
              </strong>

            </div>

          </Link>


        </div>


        {/* =========================================
            IMPORTANT:

            Nested Women/Men components appear here.

            /products/women
            /products/men
        ========================================= */}

        <Outlet />

      </div>

    </section>
  )
}

export default Products