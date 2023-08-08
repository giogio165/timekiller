import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
  };

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

      setMovies(response.data.results);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  return (
    <div className="MovieList">
      <h1>왓챠 최고 인기작</h1>
      <div className="carousel">
        <Carousel responsive={responsive}>
          {movies.map((it) => (
            <MovieCard it={it} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default MovieList;
