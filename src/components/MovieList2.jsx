import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./temp.css";
import MovieCard2 from "./MovieCard2";

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

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
  };

  return (
    <div className="MovieList2">
      <div className="carousel">
        <Carousel responsive={responsive}>
          {movies.map((it) => (
            <MovieCard2 key={it.id} it={it} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default MovieList2;
