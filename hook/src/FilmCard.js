import React from 'react';

function FilmCard({ title, description, posterURL, rating }) {
  return (
    <div className="film-card">
      <img src={posterURL} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Rating: {rating}</p>
    </div>
  );
}

export default FilmCard;
