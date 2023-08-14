import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieInfoButton from "./MovieInfoButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const WebtoonCard = ({ it, number }) => {
  const navigate = useNavigate();
  const toDetailPage = () => {
    navigate("/detail");
  };
  const cardClassName = number === 8 ? "MovieCard" : "MovieCard2";
  return (
    <div className={cardClassName} onClick={toDetailPage}>
      <div className="MovieCard__img-wrapper">
        <img src={it.img} alt={`${it.title} Poster`} className="movie-poster" />
        <div className={cardClassName + "__overlay"}>
          {number === 8 ? (
            <div className="movie-info">
              <MovieInfoButton />
              <h3 className="it.title">{it.title}</h3>
              <div>{it.author}</div>
              <div>
                찜
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{
                    "--fa-primary-color": "#ffffff",
                    "--fa-secondary-color": "#ffffff",
                  }}
                />
                {it.fanCount}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default WebtoonCard;
