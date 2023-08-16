import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/css/MovieList.css";
import MovieCard1 from "./MovieCard1";

const MovieList = ({ it }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular",
        {
          params: {
            api_key: "fcdcf37d8779f435786606a2ddd02898",
            language: "ko-KR",
            page: 1,
          },
        }
      );

      setMovies(response.data.results);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  return (
    <div className="MovieList">
      <h2 className="MovieList__title">{it}</h2>
      <Slider {...sliderSettings}>
        {movies.map((it) => (
          <div key={it.id}>
            <MovieCard1 it={it} number={8} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieList;
