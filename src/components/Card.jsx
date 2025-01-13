import React from "react";
import "./Card.css";

function Card({ author, download_url }) {
  return (
    <div className="card">
      <img src={download_url} alt={author} className="card-image" />
      <p>{author}</p>
    </div>
  );
}

export default Card;
