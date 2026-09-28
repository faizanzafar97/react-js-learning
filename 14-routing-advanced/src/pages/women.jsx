import React from 'react'


const Women = () => {

  const products = [
    {
      id: 1,
      name: 'Classic Dress',
      description: 'Modern and elegant design.',
      price: '$79'
    },
    {
      id: 2,
      name: 'Elegant Jacket',
      description: 'Stylish everyday jacket.',
      price: '$99'
    },
    {
      id: 3,
      name: 'Modern Handbag',
      description: 'Simple and modern handbag.',
      price: '$65'
    }
  ]


  return (
    <div className="nested-products">

      <div className="shop-header">

        <span>
          WOMEN'S COLLECTION
        </span>

        <h2>
          Women Products
        </h2>

        <p>
          Explore our latest women's collection.
        </p>

      </div>


      <div className="product-grid">

        {products.map((product) => (

          <div
            className="product-card"
            key={product.id}
          >

            <div className="product-image women-image">

              <span>
                Women
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

export default Women