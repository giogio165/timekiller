import React from "react";

const UpcomingCard1 = ({ it }) => {
  return (
    <div className="UpcomingCard3">
      <div className="UpcomingCard__img-wrapper">
        <img
          src={`https://image.tmdb.org/t/p/w500${it.poster_path}`}
          alt={`${it.original_title} Poster`}
          className="UmcomingCard-poster3"
        />
      </div>
    </div>
  );
};

export default UpcomingCard1;
