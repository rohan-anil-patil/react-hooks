import React from "react";
import "./Card.css"

function Card({ title, thumbnailUrl }) {
  const fallbackImage = "https://via.placeholder.com/150";
  return (
    <div className="card">
      <img
        src={thumbnailUrl || fallbackImage}
        alt={title}
        className="card-image"
        onError={(e) => (e.target.src = fallbackImage)}
      />
      <p>{title}</p>
    </div>
  );
}

export default Card;
