import React from "react";

const MovieCard = ({ it }) => {
  console.log(it);
  return (
    <div className="MovieCard">
      <img
        src={`https://image.tmdb.org/t/p/w500${it.poster_path}`}
        alt={`${it.title} Poster`}
        className="movie-poster"
      />
    </div>
  );
};

export default MovieCard;
