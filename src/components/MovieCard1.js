import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { contentUpdate } from "../global/store/detailSlice";
import MovieInfoButton from "./MovieInfoButton";

const MovieCard1 = ({ it, number }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const gotoDetailPage = () => {
    navigate(`/detail/${it.id}`);
    dispatch(contentUpdate(it));
  };
  const [genreNames, setGenreNames] = useState([]);
  const cardClassName = number === 8 ? "MovieCard" : "MovieCard2";
  const imgPosterName = number === 8 ? "movie-poster" : "movie-poster2";

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
    <div className={cardClassName} onClick={gotoDetailPage}>
      {number === 3 ? (
        <div className="movie-title">{it.original_title}</div>
      ) : (
        ""
      )}
      <div className="MovieCard__img-wrapper">
        {number === 8 ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${it.poster_path}`}
            alt={`${it.original_title} Poster`}
            className={imgPosterName}
          />
        ) : (
          ""
        )}
        <div className={cardClassName + "__overlay"}>
          {number === 8 ? (
            <div className="movie-info">
              <MovieInfoButton />
              <h3>{it.original_title}</h3>
              <div>
                평균
                <FontAwesomeIcon icon={faStar} style={{ color: "#ffffff" }} />
                {it.vote_average}
              </div>
              <div className="movie-info__genre-names">
                {genreNames.join(" ")}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        {number === 3 && it.image ? (
          <img
            src={`https://image.tmdb.org/t/p/original${it.image}`}
            alt={it.title}
            className="movie-poster2"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default MovieCard1;
