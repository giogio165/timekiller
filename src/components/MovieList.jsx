import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import MovieCard1 from "./MovieCard1";
import Loading from "./Loading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchMovies } from "../api/MovieApi";

const MovieList = ({ it }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovies()
      .then((response) => {
        setMovies(response);
        setLoading(false);
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth <= 1500 ? 5 : 8,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <SMovieList>
          <h2>{it}</h2>
          <Slider {...sliderSettings}>
            {movies.map((it) => (
              <div key={it.id}>
                <MovieCard1 it={it} number={8} />
              </div>
            ))}
          </Slider>
        </SMovieList>
      )}
    </>
  );
};
const SMovieList = styled.div`
  color: white;
  width: 100%;
  > h2 {
    margin-top: 30px;
  }
`;
export default MovieList;
