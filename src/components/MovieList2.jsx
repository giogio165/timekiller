import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/css/MovieList2.css";
import MovieCard1 from "./MovieCard1";

const MovieList2 = () => {
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
            language: "en-US",
            page: 1,
          },
        }
      );

      const moviesWithImages = await Promise.all(
        response.data.results.map(async (movie) => {
          const imageResponse = await fetch(
            `https://api.themoviedb.org/3/movie/${movie.id}/images?api_key=fcdcf37d8779f435786606a2ddd02898`
          );
          const imageData = await imageResponse.json();
          const image = imageData.backdrops[0]?.file_path || "";
          return { ...movie, image };
        })
      );

      setMovies(moviesWithImages);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  return (
    <div className="MovieList2">
      <Slider {...sliderSettings}>
        {movies.map((it) => (
          <MovieCard1 it={it} key={it.id} number={3} />
        ))}
      </Slider>
    </div>
  );
};

export default MovieList2;
