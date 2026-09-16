import { Bookmark } from 'lucide-react'

const App = () => {
  return (
    <div className="parent">
      <div className="card">

        <div className="top">
          <img
            src="https://thumbs.dreamstime.com/b/icons-sample-psost-setting-428651102.jpg"
            alt="icon"
          />

          <button>
            SAVE <Bookmark />
          </button>
        </div>

        <div className="center"></div>

        <div className="bottom"></div>

      </div>
    </div>
  )
}

export default App