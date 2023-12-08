import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { keep } from "../global/store/keepSlice";

import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const MovieInfoButton = ({ content, webtoon }) => {
  // const pinkColor = "#F82D62";
  const basicColor = "#FFFFFF";

  const dispatch = useDispatch();

  const handleKeepButtonClick = () => {
    content ? dispatch(keep(content)) : dispatch(keep(webtoon));
  };
  return (
    <SMovieInfoButton>
      <div className="MovieInfoButton">
        {/* <button className="movie-info__btn">
          <FontAwesomeIcon
            className="movie-info__playIcon"
            icon={faCirclePlay}
            size="2x"
            color={basicColor}
          />
        </button> */}
        <button className="movie-info__btn" onClick={handleKeepButtonClick}>
          <FontAwesomeIcon
            className="movie-info__plusBtn"
            icon={faCirclePlus}
            size="2x"
            color={basicColor}
          />
        </button>
      </div>
    </SMovieInfoButton>
  );
};

const SMovieInfoButton = styled.div`
  width: 100%;
  --pinkColor: #f82d62;

  .MovieInfoButton {
    width: 60%;
  }
  .movie-info__btn {
    background-color: transparent;
    margin-right: 5px;
    border: none;
    cursor: pointer;
  }

  .movie-info__plusBtn:hover {
    color: var(--pinkColor);
  }
  .movie-info__playIcon:hover {
    color: var(--pinkColor);
  }
`;

export default MovieInfoButton;
