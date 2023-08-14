import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCirclePlay,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import "./css/MovieInfoButton.css";

const MovieInfoButton = () => {
  const pinkColor = "#F82D62";
  const basicColor = "#FFFFFF";
  return (
    <div className="MovieInfoButton">
      <button className="movie-info__btn">
        <FontAwesomeIcon
          className="movie-info__playIcon"
          icon={faCirclePlay}
          size="3x"
          color={basicColor}
        />
      </button>
      <button className="movie-info__btn">
        <FontAwesomeIcon
          className="movie-info__plusBtn"
          icon={faCirclePlus}
          size="3x"
          color={basicColor}
        />
      </button>
    </div>
  );
};

export default MovieInfoButton;
