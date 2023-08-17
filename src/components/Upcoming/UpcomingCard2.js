import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieInfoButton from "../MovieInfoButton";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const UpcomingCard = ({ it, number }) => {
  const navigate = useNavigate();
  console.log(it);

  const gotoDetailPage = () => {
    navigate(`/detail/${it.id}`);
  };

  const cardClassName = number === 2 ? "UpcomingCard" : "UpcomingCard2";
  const cardPosterClassName =
    number === 2 ? "UpcomingCard-poster" : "UpcomingCard-poster2";

  return (
    <div className={cardClassName} onClick={gotoDetailPage}>
      {number === 1 ? (
        <div>
          <div className="movie-info">
            <div className="movie-title">{it.original_title}</div>
            <div className="UpcomingCard-overview">{it.overview}</div>
          </div>
          <div className="UpcomingCard__img-wrapper">
            <div className={cardClassName + "__overlay"}></div>
            <img
              src={`https://image.tmdb.org/t/p/w500${it.backdrop_path}`}
              alt={`${it.original_title} Poster`}
              className={cardPosterClassName}
            />
          </div>
          <div className="UpcomingCard__purchaseTag">개별구매</div>
        </div>
      ) : (
        <div className="UpcomingCard__img-wrapper">
          <img
            src={`https://image.tmdb.org/t/p/w500${it.backdrop_path}`}
            alt={`${it.original_title} Poster`}
            className={cardPosterClassName}
          />
          <div className={cardClassName + "__overlay"}>
            <div className="movie-info">
              <MovieInfoButton />
              <h3>{it.original_title}</h3>
              <div>
                예상
                <FontAwesomeIcon icon={faStar} style={{ color: "#ffffff" }} />
                {it.vote_average}
              </div>
              <div>개봉일{it.release_date}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpcomingCard;
