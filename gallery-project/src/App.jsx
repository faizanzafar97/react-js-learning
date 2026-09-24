import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

const App = () => {

  const [userdata, setUserdata] = useState([])
  const [index, setIndex] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [selectedImage, setSelectedImage] = useState(null)
  const [downloading, setDownloading] = useState(false)

  async function getdata() {

    try {

      setLoading(true)
      setError('')

      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=15`
      )

      setUserdata(response.data)

      console.log(response.data)

    } catch (error) {

      setError('Something went wrong')

    } finally {

      setLoading(false)

    }
  }

  useEffect(() => {
    getdata()
  }, [index])


  async function downloadImage() {

    try {

      setDownloading(true)

      const response = await axios.get(
        selectedImage,
        {
          responseType: 'blob'
        }
      )

      const blob = new Blob(
        [response.data],
        {
          type: response.data.type
        }
      )

      const url = window.URL.createObjectURL(blob)

      const link = document.createElement('a')

      link.href = url
      link.download = 'picsum-image.jpg'

      document.body.appendChild(link)

      link.click()

      document.body.removeChild(link)

      window.URL.revokeObjectURL(url)

    } catch (error) {

      console.log(error)

      alert('Image could not be downloaded')

    } finally {

      setDownloading(false)

    }
  }


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


      <div className="gallery">

        {userdata.map((e, idx) => (

          <div
            className="card"
            key={e.id || idx}
          >

            <img
              src={e.download_url}
              alt={e.author}
              onClick={() => setSelectedImage(e.download_url)}
            />

            <h3>{e.author}</h3>

          </div>

        ))}

      </div>


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


      {/* IMAGE POPUP */}

      {selectedImage && (

        <div
          className="image-popup"
          onClick={() => setSelectedImage(null)}
        >

          <div
            className="popup-content"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-button"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>


            <img
              src={selectedImage}
              alt="Selected"
            />


            <button
              className="download-button"
              onClick={downloadImage}
              disabled={downloading}
            >

              {downloading
                ? 'Downloading...'
                : 'Download Image'
              }

            </button>

          </div>

        </div>

      )}

    </div>
  )
}

export default App