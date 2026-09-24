import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userdata, setUserdata] = useState([])

  async function getdata() {

    const response = await axios.get(
      'https://picsum.photos/v2/list?page=3&limit=15'
    )

    setUserdata(response.data)
    console.log(response.data)
  }

  useEffect(function(){
    getdata()
  },[])

  let print_user = 'No user available'

  if (userdata.length > 0) {

    print_user = userdata.map(function (e, idx) {

      return (
        <div>
          <div key={idx}>

          <img
            src={e.download_url}
            alt={e.author}
          />

          <h3>{e.author}</h3>

        </div>
        </div>
      )
    })
  }

  return (
    <div>

      <button onClick={getdata}>
        Get Data
      </button>

      <div>
        {print_user}
      </div>

    </div>
  )
}

export default App