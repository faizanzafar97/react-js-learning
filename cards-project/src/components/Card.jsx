import React from "react";
import { Bookmark } from "lucide-react";

const Card = ({
  brandLogo,
  name,
  datePosted,
  post,
  tag1,
  tag2,
  pay,
  location,
}) => {
  return (
    <article className="card">
      {/* Top */}
      <div className="top">
        <img src={brandLogo} alt={`${name} logo`} />

        <button className="save-btn" type="button">
          SAVE
          <Bookmark size={11} />
        </button>
      </div>

      {/* Center */}
      <div className="center">
        <h3>
          {name}
          <span>{datePosted}</span>
        </h3>

        <h2>{post}</h2>

        <div className="tags">
          <p>{tag1}</p>
          <p>{tag2}</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="bottom">
        <div className="job-info">
          <h3>{pay}</h3>
          <p>{location}</p>
        </div>

        <button className="apply-btn" type="button">
          Apply Now
        </button>
      </div>
    </article>
  );
};

export default Card;