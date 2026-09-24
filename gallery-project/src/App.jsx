import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

const App = () => {

  const [userdata, setUserdata] = useState([])
  const [index, setIndex] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function getdata() {

    try {

      setLoading(true)
      setError('')

      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=15`
      )

      setUserdata(response.data)

    } catch (error) {

      setError('Something went wrong. Please try again.')

    } finally {

      setLoading(false)

    }
  }

  useEffect(() => {
    getdata()
  }, [index])

  return (
    <div className="container">

      <h1>Image Gallery</h1>

      <h2>Page: {index}</h2>

      {loading && (
        <h3 className="loading">
          Loading...
        </h3>
      )}

      {error && (
        <h3 className="error">
          {error}
        </h3>
      )}

      {!loading && !error && (
        <div className="gallery">

          {userdata.length > 0 ? (

            userdata.map((e, idx) => {

              return (
                <div className="card" key={idx}>

                  <img
                    src={e.download_url}
                    alt={e.author}
                  />

                  <h3>{e.author}</h3>

                </div>
              )

            })

          ) : (

            <h2>No user available</h2>

          )}

        </div>
      )}

      <div className="buttons">

        <button
          disabled={index === 1 || loading}
          onClick={() => setIndex(index - 1)}
        >
          Prev
        </button>

        <button
          disabled={loading}
          onClick={() => setIndex(index + 1)}
        >
          Next
        </button>

      </div>

    </div>
  )
}

export default App