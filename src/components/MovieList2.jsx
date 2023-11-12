import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard1 from "./MovieCard1";
import styled from "styled-components";
import { fetchMoviesWithImages } from "../api/MovieApi";

const MovieList2 = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMoviesWithImages().then((moviesWithImages) => {
      setMovies(moviesWithImages);
    });
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth <= 1500 ? 2 : 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  return (
    <SMovieList>
      <div className="MovieList2">
        <Slider {...sliderSettings}>
          {movies.map((it) => (
            <MovieCard1 it={it} key={it.id} number={3} />
          ))}
        </Slider>
      </div>
    </SMovieList>
  );
};
const SMovieList = styled.div`
  width: 100%;
  color: white;
  margin-bottom: 30px;
  .MovieList2 {
    width: 100%;
  }
`;
export default MovieList2;
