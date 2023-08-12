import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import MovieInfoButton from "./MovieInfoButton";

const MovieCard1 = ({ it }) => {
  const navigate = useNavigate();
  const toDetailPage = () => {
    navigate("/detail");
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
            language: "en-US",
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
    <div className="MovieCard" onClick={toDetailPage}>
      <div className="MovieCard__img-wrapper">
        <img
          src={`https://image.tmdb.org/t/p/w500${it.poster_path}`}
          alt={`${it.original_title} Poster`}
          className="movie-poster"
        />
        <div className="MovieCard__overlay">
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
        </div>
      </div>
    </div>
  );
};

export default MovieCard1;
