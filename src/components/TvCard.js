import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MovieInfoButton from "./MovieInfoButton";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { contentUpdate } from "../global/store/detailSlice";
import styled from "styled-components";

const TvCard = ({ it }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const gotoDetailPage = () => {
    navigate(`/detail/${it.id}`);
    dispatch(contentUpdate(it));
  };
  const [genreNames, setGenreNames] = useState([]);

  useEffect(() => {
    fetchGenreNames(it.genre_ids);
  }, [it.genre_ids]);

  const fetchGenreNames = async (genreCodes) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list`,
        {
          params: {
            api_key: "fcdcf37d8779f435786606a2ddd02898",
            language: "ko-KR",
          },
        }
      );

      const matchingGenres = response.data.genres.filter((genre) =>
        genreCodes.includes(genre.id)
      );

      const limitedGenres = matchingGenres.slice(0, 2);

      const genreNames = limitedGenres.map((genre) => genre.name);
      setGenreNames(genreNames);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

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
            <h3 className="movie-info__title">{it.original_name}</h3>
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
  width: 170px;
  height: 230px;
  cursor: pointer;
  transition: transform 0.3s;
  padding: 30px 0 30px 0;
  &:hover {
    transform: scale(1.1);
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
    width: 140px;
    height: 200px;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 8px;
  }
  .TvCard__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 140px;
    height: 200px;
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
    width: 120px;
    font-size: 13px;
    margin-left: 10px;
    margin-bottom: 20px;
    white-space: nowrap;
    > h4 {
      width: 120px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

export default TvCard;
