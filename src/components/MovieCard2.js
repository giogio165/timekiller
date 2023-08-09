import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MovieCard2 = ({ it }) => {
  console.log(it);
  const navigate = useNavigate();
  const gotoDetailPage = () => {
    navigate("/library");
  };

  //   const [genreName, setGenreName] = useState("");

  //   useEffect(() => {
  //     fetchGenreName(it.genre);
  //   }, [it.genre]);

  //   const fetchGenreName = async (genreCode) => {
  //     try {
  //       const response = await fetch(
  //         `https://api.themoviedb.org/3/genre/movie/list?api_key=fcdcf37d8779f435786606a2ddd02898&language=en-US`
  //       );
  //       const data = await response.json();
  //       console.log(data);

  //       const genre = data.genres.find((genre) => genre.id === it.genre_ids);
  //       if (genre) {
  //         setGenreName(genre.name);
  //       }
  //     } catch (error) {
  //       console.error("API Error:", error);
  //     }
  //   };

  return (
    <div className="MovieCard2" onClick={gotoDetailPage}>
      {/* <div>{genreName}</div>이거 왜 안됨 ㅠㅠ  */}
      <div className="movie-title">{it.original_title}</div>

      <div className="img-wrapper">
        <div className="overlay"></div>
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
