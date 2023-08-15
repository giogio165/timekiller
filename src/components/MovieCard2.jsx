import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MovieCard2 = ({ it }) => {
  //console.log(it);
  const navigate = useNavigate();
  const gotoDetailPage = () => {
    navigate(`/detail/${it.id}`);
  };

  console.log(id);

  const [genreName, setGenreName] = useState("");

  useEffect(() => {
    fetchGenreName(it.genre_ids[0]); // Pass the first genre ID
  }, [it.genre_ids]);

  const fetchGenreName = async (genreCode) => {
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
      const genre = response.data.genres.find(
        (genre) => genre.id === genreCode
      );
      if (genre) {
        setGenreName(genre.name);
      }
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  return (
    <div className="MovieCard2" onClick={gotoDetailPage}>
      {/* <div>{genreName}</div> */}
      <div className="movie-title">{it.original_title}</div>
      <div className="img-wrapper">
        <div className="MovieCard2__overlay"></div>
        {it.image && (
          <img
            src={`https://image.tmdb.org/t/p/original${it.image}`}
            alt={it.title}
            className="movie-poster2"
          />
        )}
      </div>
    </div>
  );
};

export default MovieCard2;
