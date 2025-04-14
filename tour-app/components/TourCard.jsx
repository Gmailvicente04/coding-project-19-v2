import React, { useState } from 'react';

function TourCard({ id, name, info, price, image, onRemove }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="tour-card">
      <img src={image} alt={name} className="tour-img" />
      <div className="tour-details">
        <div className="tour-header">
          <h3>{name}</h3>
          <h4>${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}... `}
          <button 
            className="toggle-btn" 
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "Show Less" : "Read More"}
          </button>
        </p>
        <button 
          className="not-interested" 
          onClick={() => onRemove(id)}
        >
          Not Interested
        </button>
      </div>
    </article>
  );
}

export default TourCard;


// task 3 (Single Tour Component)
