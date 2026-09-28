import React from 'react'


const Men = () => {

  const products = [
    {
      id: 1,
      name: 'Classic Shirt',
      description: 'Clean and modern everyday shirt.',
      price: '$59'
    },
    {
      id: 2,
      name: 'Premium Jacket',
      description: 'Modern jacket for everyday style.',
      price: '$119'
    },
    {
      id: 3,
      name: 'Casual Sneakers',
      description: 'Comfortable everyday sneakers.',
      price: '$95'
    }
  ]


  return (
    <div className="nested-products">

      <div className="shop-header">

        <span>
          MEN'S COLLECTION
        </span>

        <h2>
          Men Products
        </h2>

        <p>
          Explore our latest men's collection.
        </p>

      </div>


      <div className="product-grid">

        {products.map((product) => (

          <div
            className="product-card"
            key={product.id}
          >

            <div className="product-image men-image">

              <span>
                Men
              </span>

            </div>


            <div className="product-info">

              <h3>
                {product.name}
              </h3>

              <p>
                {product.description}
              </p>


              <div className="product-bottom">

                <strong>
                  {product.price}
                </strong>

                <button>
                  Add to Cart
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Men