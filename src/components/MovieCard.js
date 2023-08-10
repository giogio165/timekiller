import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
  const navigate = useNavigate();
  const toDetailPage = () => {
    navigate(`/detail/${item.id}`);
  }; //일단 라이브러리로 이동하게 해놨습니다. 후에 디테일 페이지로 이동할 것
  //console.log(item);
  return (
    <div className="MovieCard" onClick={toDetailPage}>
      <img
        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        alt={`${item.original_title} Poster`}
        className="movie-poster"
      />

      <div className="overlay">
        <div className="movie-info">
          <h3>{item.original_title}</h3>
          <div>평균 {item.vote_average}</div>
          <div>{item.genre_ids}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
