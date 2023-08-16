import React from "react";

const UpcomingCard1 = ({ it }) => {
  const w = window.innerWidth;

  return (
    <div className={w <= 1500 ? "UpcomingCard3Small" : "UpcomingCard3"}>
      <div className="UpcomingCard__img-wrapper">
        <img
          src={`https://image.tmdb.org/t/p/w500${it.backdrop_path}`}
          alt={`${it.original_title} Poster`}
          className="UpcomingCard-poster3"
        />
      </div>
      <h2 className="UpcomingCard3__overview">{it.overview}</h2>
    </div>
  );
};

export default UpcomingCard1;
