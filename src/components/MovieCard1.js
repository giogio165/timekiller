import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { contentUpdate } from "../global/store/detailSlice";
import MovieInfoButton from "./MovieInfoButton";
import styled from "styled-components";
import { fetchGenreNames } from "../api/MovieApi";

const MovieCard1 = ({ it, number }) => {
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
    <>
      {number === 3 && it.image ? (
        //맨위에 카드 3개
        <StyledMovieCard2 onClick={gotoDetailPage}>
          <div className="movie-title">{it.original_title}</div>
          <img
            src={`https://image.tmdb.org/t/p/original${it.image}`}
            alt={it.title}
          />
        </StyledMovieCard2>
      ) : (
        //그 밑에 카드 8개
        <StyledMovieCard1 onClick={gotoDetailPage}>
          <MovieCardImgWrapper>
            <img
              src={`https://image.tmdb.org/t/p/w300${it.poster_path}`}
              alt={`${it.original_title} Poster`}
            />
            <div className="MovieCard__overlay">
              <div className="movie-info">
                <MovieInfoButton />
                <h4>{it.original_title}</h4>
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
          </MovieCardImgWrapper>
        </StyledMovieCard1>
      )}
    </>
  );
};

const StyledMovieCard2 = styled.div`
  width: 80%;
  height: 240px;


  > img {
    position: relative;
    cursor: pointer;
    width: 100%;
    height: 180px;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 8px;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.05);
    }
  }

  .movie-title {
    margin: 10px 0 10px 0;
    font-size: 20px;
    font-weight: 700;
  }
`;

const StyledMovieCard1 = styled.div`
  width: 75%;
  height: 230px;
  cursor: pointer;
  transition: transform 0.3s;
  margin: 30px 0 30px 0;
  margin-left: 10%;
  &:hover {
    transform: scale(1.05);
    .MovieCard__overlay {
      display: flex;
      opacity: 1;
    }
  }
`;
const MovieCardImgWrapper = styled.div`
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
  .MovieCard__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
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

export default MovieCard1;
