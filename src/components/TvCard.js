import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MovieInfoButton from "./MovieInfoButton";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { contentUpdate } from "../global/store/detailSlice";
import styled from "styled-components";
import { fetchGenreNames } from "../api/TvApi";

const TvCard = ({ it }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const gotoDetailPage = () => {
    navigate(`/detail/${it.id}`);
    dispatch(contentUpdate(it));
  };
  const [genreNames, setGenreNames] = useState([]);

  useEffect(() => {
    fetchGenreNames(it.genre_ids).then((names) => setGenreNames(names));
  }, [it.genre_ids]);

  return (
    <STvCard onClick={gotoDetailPage}>
      <STvCardImgWrapper>
        <img
          src={`https://image.tmdb.org/t/p/w500${it.poster_path}`}
          alt={`${it.original_name} Poster`}
          className="movie-poster"
        />
        <div className="TvCard__overlay">
          <div className="movie-info">
            <MovieInfoButton />
            <h4 className="movie-info__title">{it.original_name}</h4>
            <div>
              평균
              <FontAwesomeIcon icon={faStar} style={{ color: "#ffffff" }} />
              {it.vote_average}
            </div>
            <div className="movie-info__genre-names">
              {genreNames.join(" ")}
            </div>
          </div>
        </div>
      </STvCardImgWrapper>
    </STvCard>
  );
};

const STvCard = styled.div`
  width: 75%;
  height: 230px;
  cursor: pointer;
  transition: transform 0.3s;
  margin: 30px 0 30px 0;
  margin-left: 10%;
  &:hover {
    transform: scale(1.05);
    .TvCard__overlay {
      display: flex;
      opacity: 1;
    }
  }
`;

const STvCardImgWrapper = styled.div`
  position: relative;
  border-radius: 8px;
  z-index: 1;
  > img {
    position: relative;
    width: 100%;
    height: 200px;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 8px;
  }
  .TvCard__overlay {
    width: 100%;
    height: 200px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    opacity: 0;
    transition: opacity 0.3s;
    border-radius: 8px;
  }
  .movie-info {
    width: 85%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 13px;
    margin-left: 8px;
    margin-bottom: 20px;
    white-space: nowrap;
    > h4 {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

export default TvCard;
