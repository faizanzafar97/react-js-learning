import React from 'react'
import { Bookmark } from 'lucide-react'
const Card = (props) => {
  return (
    <div>
      <div className="parent">
      <div className="card">

        <div className="top">
          <img
            src={props.brandLogo}
            alt="icon"
          />

          <button>
            SAVE <Bookmark size={10} />
          </button>
        </div>

        <div className="center">
          <h3>{props.name} <span>{props.datePosted}</span></h3>
          <h2>{props.post}</h2>
          <div className="tag">
           <p>{props.tag1}</p>
             <p>{props.tag2}</p>
          </div>
        </div>

        <div className="bottom">
          <div>
              <h3>{props.pay}</h3>
              <p>{props.location}</p>
          </div>
          <button>Apply Now</button>
        
        </div>

      </div>
      
    </div>
    </div>
  )
}

export default Card
